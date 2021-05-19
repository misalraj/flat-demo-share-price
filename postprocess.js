import { readJSON, writeJSON, readImageFromURL, writeImage, removeFile } from 'https://deno.land/x/flat@0.0.10/mod.ts'

// Step 1: Read the downloaded_filename JSON
const filename = Deno.args[0] // Same name as downloaded_filename `const filename = 'share-price.json';`
const json = await readJSON(filename)
console.log(json)

// Step 2: Filter specific data we want to keep and write to a new JSON file
const shareData = Object.values(json['Time Series (Daily)']); // convert property values into an array
// const filteredShareData = currencyRates.map(rate => ({ 
//     currency: rate.description,
//     bitcoinRate: rate.rate
// }));

// Step 3. Write a new JSON file with our filtered data
const newFilename = `share-price-postprocessResults.json` // name of a new file to be saved
await writeJSON(newFilename, shareData) 
console.log("Wrote a post process file")
