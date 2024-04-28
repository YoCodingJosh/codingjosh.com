export default defineEventHandler(async (event) => {
  const kv = event.context.cloudflare.env.KV;

  const status = await kv.get<ContactPageStatus | undefined>('contactStatus', 'json');

  if (!status || !status.available) {
    const response: ContactPageStatus = {
      message: status?.message || 'Contact page is currently unavailable.',
      available: false,
    };

    // can't return a 503 here, as the page is technically available and Nuxt will not capture the response
    return Response.json(response);
  }

  const response: ContactPageStatus = {
    message: status.message || 'Contact page is available.',
    available: true,
  };

  return Response.json(response, { status: 200 });
})
