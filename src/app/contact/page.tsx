"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import { Turnstile } from "@marsidev/react-turnstile";
import { Mail } from "lucide-react";
import { useActionState, useRef, useState } from "react";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

async function getEmailAddress(_: string | null, data: FormData) {
  return await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(data)),
  }).then(async (res) => {
    if (!res.ok) {
      const json = await res.json();
      // @ts-expect-error type error lol
      return (json.error as string) || "Unknown error occurred";
    }

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

  return (
    <>
      {!emailAddress && (
        <p className="text-center font-[family-name:var(--font-geist-mono)]">
          Feel free to reach out to me! Click the button below to send me an
          email.
        </p>
      )}
      <p className="text-center font-[family-name:var(--font-geist-mono)]">
        Please be respectful of my time in your email.
      </p>
      {isPending && (
        <span className="mx-auto">
          <LoadingSpinner />
        </span>
      )}
      {emailAddress && !isPending && (
        <div className="mx-auto">
          <p className="mx-auto text-xl mb-3 select-none pointer-events-none">
            {emailAddress}
          </p>
          <p className="mx-auto text-sm font-[family-name:var(--font-geist-mono)]">
            I will try to get back to you as soon as possible.
          </p>
        </div>
      )}
      <div className="flex mx-auto items-center flex-col sm:flex-row">
        {!emailAddress && (
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
              disabled={!token || isPending}
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
        )}
      </div>
    </>
  );
}
