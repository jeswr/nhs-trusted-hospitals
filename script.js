import fs from 'fs';
import { convertXlsxToCsv } from "xlsx-to-csv-ts";

const excel = await fetch("https://www.england.nhs.uk/wp-content/uploads/2019/04/register-of-licensed-independent-providers-20-october-2024.xlsx");
fs.writeFileSync("register.xlsx", await excel.text());

console.log("Excel file downloaded and saved");

await convertXlsxToCsv({
  inputFile: "./register.xlsx",
  outputFilename: "./sample-filtered.csv",
  outputDir: "./",
});