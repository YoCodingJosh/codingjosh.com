import TurnstileClient from "./TurnstileClient";

// this is kinda dumb but we have to do it this way
// because cloudflare's environment variables binding don't work with Next.js (client side) very well.

export default function TurnstileWrapper() {
  return (
    <TurnstileClient siteKey={process.env.TURNSTILE_SITE_KEY} />
  );
};
