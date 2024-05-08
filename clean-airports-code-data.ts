// remove extraneous data from the file to reduce bundle size

// run with `bun run clean-airports-code-data.ts`

// we really only need the IATA code, city name, country name, country code
// and remove everything else

import fs from 'node:fs';

interface AirportData {
  column_1: string; // IATA code
  city_name: string;
  country_name: string;
  country_code: string;
  latitude: number;
  longitude: number;
  world_area_code?: number;
  city_name_geo_name_id?: string;
  country_name_geo_name_id?: number;
  coordinates?: {
    lon: number;
    lat: number;
  }
}

interface FilteredAirportData {
  column_1: string;
  city_name: string;
  country_code: string;
}

// read the data from the file
const rawData = fs.readFileSync("./server/data/airports-code@public.json", 'utf8');

// parse the data into an array of objects
const data = JSON.parse(rawData) as AirportData[];

// filter out the data we don't need
const filteredData: FilteredAirportData[] = data.map(({ column_1, city_name, country_code }) => ({
  column_1,
  city_name,
  country_code,
}));

// write the filtered data back to the file
fs.writeFileSync("./server/data/airports-code@public.json", JSON.stringify(filteredData), 'utf8');
