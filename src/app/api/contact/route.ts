import { delay } from "@/lib/utils";

import { getCloudflareContext } from "@opennextjs/cloudflare";

const turnstileVerifyUrl =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

interface RequestData {
  "cf-turnstile-response": string | undefined;
}

enum TurnstileError {
  MissingSecret = "missing-input-secret",
  InvalidSecret = "invalid-input-secret",
  MissingResponse = "missing-input-response",
  InvalidResponse = "invalid-input-response",
  BadRequest = "bad-request",
  TimeoutOrDuplicate = "timeout-or-duplicate",
  InternalError = "internal-error",
}

interface VerificationResult {
  success: boolean;
  error?: TurnstileError[];
  challenge_ts?: string;
  hostname?: string;
}

export async function POST(request: Request) {
  const requestData: RequestData = await request.json();

  const turnstileResponse = requestData["cf-turnstile-response"] ?? null;

  if (turnstileResponse) {
    const verificationResponse = await fetch(turnstileVerifyUrl, {
      method: "POST",
      body: JSON.stringify({
        secret: process.env.NEXT_TURNSTILE_SECRET_KEY,
        response: turnstileResponse,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const verificationResult: VerificationResult =
      await verificationResponse.json();
    if (!verificationResult.success) {
      return Response.json(
        { error: "Turnstile verification failed" },
        { status: 400 },
      );
    }
  }

  // @ts-expect-error Wrangler is weird lol
  const myKv = getCloudflareContext().env.KV as KVNamespace;

  const randomDuration = Math.ceil(500 + Math.random() * 500);
  await delay(randomDuration);

  const data = await myKv.get("contactStatus");

  if (!data) {
    return Response.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 },
    );
  }

  const { email, available, message } = JSON.parse(data);

  if (!available || !email) {
    return Response.json(
      {
        error: message ?? "Contact form is currently unavailable",
      },
      { status: 503 },
    );
  }

  return Response.json({
    email,
  });
}
