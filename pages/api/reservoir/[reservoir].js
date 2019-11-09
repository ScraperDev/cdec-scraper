import { ShastaParser } from "../../../components/api/parsers";

export default async (req, res) => {
  // Endpoint for scraping the CDEC reservoir pages & returning them as JSON.

  // Gets reservoir triplet
  const {
    query: { reservoir }
  } = req;

  // Initialize scraper outside of the switch.
  let scraper;

  // Switch statement that determines which scraper to use.
  // Each valid case instatiates the class & sets it equal to scraper var.
  switch (reservoir) {
    case "SHA": {
      scraper = new ShastaParser();
      console.log(scraper);
      break;
    }
    default: {
      scraper = null;
    }
  }
  if (!scraper) {
  } else {
  }
};
