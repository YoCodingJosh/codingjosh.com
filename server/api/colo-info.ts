import rawData from "../data/airports.json";

interface AirportData {
  IATA: string;
  ICAO: string;
  City: string;
  Region: string;
  CountryCode: string;
}

const data = rawData as AirportData[];

const findIATA = (iata: string) => {
  return data.find((airport) => airport.IATA === iata);
};

export default defineEventHandler(async (event) => {
  // get the cf property from the event context
  const { cf } = event.context;

  const colo = cf.colo as string;

  const airportDetails = await findIATA(colo);

  const response: ColoInfoResponse = {
    colo: colo,
    country: airportDetails?.CountryCode,
    region: airportDetails?.Region,
    city: airportDetails?.City,
  };

  // return the data center the request was routed to
  return Response.json(response);
})
