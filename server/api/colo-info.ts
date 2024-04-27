const findIATA = async (colo: string) => {
  const path = new URL('node_modules/openflights-cached/index.js', import.meta.url).pathname;
  const pkg = await import(`file://${path}`);
  return pkg.findIATA(colo);
};

export default defineEventHandler(async (event) => {
  // get the cf property from the event context
  const { cf } = event.context;

  const colo = cf.colo as string;

  const airportDetails = await findIATA(colo);

  const response: ColoInfoResponse = {
    colo: colo,
    country: airportDetails?.country,
    city: airportDetails?.city,
  };

  // return the data center the request was routed to
  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'text/json',
    },
  });
})
