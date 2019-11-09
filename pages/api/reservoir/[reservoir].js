import { ShastaParser } from "../../../components/api/parsers";

export default async (req, res) => {
  // Endpoint for parsing the CDEC reservoir pages & returning them as JSON.

  // Gets reservoir triplet
  const {
    query: { reservoir }
  } = req;

  // Initialize parser outside of the switch.
  let parser;

  // Switch statement that determines which parser to use.
  // Each valid case instatiates the class & sets it equal to parser var.
  switch (reservoir) {
    case "SHA": {
      parser = new ShastaParser();
      break;
    }
    default: {
      parser = null;
    }
  }
  if (!parser) {
  } else {
    console.log(await parser.scrape())
  }
  res.end('');  
};
