// cleans up and simplifies the airport data

// run with `bun run clean-airports-code-data.ts` or whatever the command is for your runtime (Deno, Bun, Node.js, etc.)

// we really only need the IATA code, ICAO code, city name, state/region name, and country code
// and remove everything else

declare const Deno: any; // For Deno
declare const Bun: any;   // For Bun

// Define the shape of the data rows
interface AirportRow {
  ident: string;
  iata_code: string;
  municipality: string;
  iso_region: string;
  iso_country: string;
}

interface RegionRow {
  code: string;
  name: string;
}

function detectRuntime() {
  if (typeof Deno !== 'undefined') {
    return 'Deno';
  } else if (typeof Bun !== 'undefined') {
    return 'Bun';
  } else if (typeof process !== 'undefined' && process.versions && process.versions.node) {
    return 'Node.js';
  } else {
    return 'Unknown runtime';
  }
}

async function getFsModule() {
  const runtime = detectRuntime();
  if (runtime === 'Node.js') {
    return await import('fs');
  } else if (runtime === 'Deno' || runtime === 'Bun') {
    return await import('node:fs');
  } else {
    throw new Error('Unsupported runtime');
  }
}

async function getCsvParserModule() {
  const runtime = detectRuntime();
  if (runtime === 'Node.js' || runtime === 'Bun') {
    return await import('csv-parser');
  } else if (runtime === 'Deno') {
    // @ts-ignore
    return await import('npm:csv-parser@3.0.0');
  } else {
    throw new Error('Unsupported runtime');
  }
}

async function main() {
  const fs = await getFsModule();
  const csvParser = await getCsvParserModule();
  const csv = csvParser.default;

  // Function to convert CSV files to JSON
  const convertToJSON = async () => {
    const airportsFile = 'airports.csv';
    const regionsFile = 'regions.csv';

    // Read regions data into a Map
    const regionsMap = new Map<string, string>();

    await new Promise<void>((resolve, reject) => {
      fs.createReadStream(regionsFile)
        .pipe(csv())
        .on('data', (row: RegionRow) => {
          regionsMap.set(row.code, row.name);
        })
        .on('end', () => {
          console.log('Regions CSV file successfully processed');
          resolve();
        })
        .on('error', (error: Error) => {
          reject(error);
        });
    });

    // Convert airports data to desired JSON format
    const result: Array<{
      IATA: string;
      ICAO: string;
      City: string;
      Region: string;
      CountryCode: string;
    }> = [];

    await new Promise<void>((resolve, reject) => {
      fs.createReadStream(airportsFile)
        .pipe(csv())
        .on('data', (row: AirportRow) => {
          const regionName = regionsMap.get(row.iso_region) || 'Unknown Region';
          if (row.iata_code) {
            result.push({
              IATA: row.iata_code,
              ICAO: row.ident,
              City: row.municipality || 'Unknown City',
              Region: regionName,
              CountryCode: row.iso_country
            });
          }
        })
        .on('end', () => {
          console.log('Airports CSV file successfully processed');
          resolve();
        })
        .on('error', (error: Error) => {
          reject(error);
        });
    });

    // Write the result to a JSON file
    fs.writeFileSync('./server/data/airports.json', JSON.stringify(result, null, 0));
    console.log('JSON file successfully written');
  };

  await convertToJSON();
}

main().catch(console.error);
