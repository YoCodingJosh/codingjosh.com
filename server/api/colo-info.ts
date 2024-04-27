import rawData from "../data/airports-code@public.json";

interface AirportData {
  column_1: string; // IATA code
  city_name: string;
  country_name: string;
  country_code: string;
  latitude: number;
  longitude: number;
}

const data = rawData as AirportData[];

const findIATA = (iata: string) => {
  return data.find((airport) => airport.column_1 === iata);
};

export default defineEventHandler(async (event) => {
  // get the cf property from the event context
  const { cf } = event.context;

  const colo = cf.colo as string;

  const airportDetails = await findIATA(colo);

  const response: ColoInfoResponse = {
    colo: colo,
    country: airportDetails?.country_code,
    city: airportDetails?.city_name,
  };

  // return the data center the request was routed to
  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'text/json',
    },
  });
})
