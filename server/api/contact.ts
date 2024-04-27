export default defineEventHandler(async (event) => {
  const kv = event.context.cloudflare.env.KV;

  const status = await kv.get<ContactPageStatusKV | undefined>('contactStatus', 'json');

  // hmmm.. this shouldn't happen, but we'll just assume the contact page is unavailable
  if (!status) {
    return new Response('Contact form is currently unavailable.', { status: 503 });
  }

  if (!status.available) {
    const response: ContactPageStatusResponse = {
      message: status.message || 'Contact page is currently unavailable.',
    };

    return new Response(JSON.stringify(response), { status: 503 });
  }

  const response: ContactPageStatusResponse = {
    message: status.message || 'Contact page is available.',
  };

  return new Response(JSON.stringify(response), { status: 200 });
})
