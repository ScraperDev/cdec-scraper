import { ShastaParser } from "../../../components/api/parsers";

export default async (req, res) => {
  const { query: { reservoir } } = req;
  let scraper;
  switch(reservoir) {
    case "SHA": {
      console.log("SHA");
    }
  }
  res.end(`${reservoir} endpoint`);
}