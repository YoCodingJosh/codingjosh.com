"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import { Turnstile } from "@marsidev/react-turnstile";
import { Mail } from "lucide-react";
import { useActionState, useRef, useState } from "react";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

async function getEmailAddress() {
  return await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (res) => {
    const json = await res.json();
    // @ts-expect-error type error lol
    return json.email as string;
  });
}

export default function Contact() {
  if (!turnstileSiteKey) {
    throw new Error("NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set");
  }

  const [emailAddress, formAction, isPending] = useActionState(
    getEmailAddress,
    null,
  );

  const [token, setToken] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  console.log("email", emailAddress);

  return (
    <>
      <p>
        Feel free to reach out to me! Click the button below to send me an
        email.
      </p>
      {isPending && (
        <span className="mx-auto">
          <LoadingSpinner />
        </span>
      )}
      {emailAddress && (
        <span className="mx-auto">
          <p className="select-none">Email address: {emailAddress}</p>
          <p>
            Just email me there. I will get back to you as soon as possible.
          </p>
        </span>
      )}
      <div className="flex mx-auto items-center flex-col sm:flex-row">
        <form action={formAction} ref={formRef}>
          <Turnstile
            siteKey={turnstileSiteKey}
            onSuccess={setToken}
            onExpire={() => setToken(null)}
            options={{
              theme: "light",
            }}
          />
          <button
            className="mx-auto rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center gap-2 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto md:w-[158px] disabled:cursor-not-allowed disabled:dark:opacity-25 disabled:bg-gray-400"
            disabled={!token}
            onClick={(e) => {
              e.preventDefault();
              if (!token) return;
              formRef.current?.requestSubmit();
            }}
          >
            <Mail />
            Contact
          </button>
        </form>
      </div>
    </>
  );
}
