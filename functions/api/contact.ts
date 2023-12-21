interface Env {
  TURNSTILE_SITE_KEY: string;
  TURNSTILE_SECRET_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  let response = new Response('{"status": "API OK"}', {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
}
