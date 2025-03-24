import { delay } from "@/lib/utils";

import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function POST() {
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

  const { email } = JSON.parse(data);

  return Response.json({
    email,
  });
}
