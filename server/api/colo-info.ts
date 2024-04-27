export default defineEventHandler(async (event) => {
  // get the cf property from the event context
  const { cf } = event.context;

  // return the data center the request was routed to
  return new Response(cf.colo as string, {
    headers: {
      'content-type': 'text/plain',
    },
  });
})
