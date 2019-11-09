import { getLastSunday } from "../../../components/api/util/getLastSunday";
import Axios from "axios";

export default async (req, res) => {
  // Endpoint for parsing the CDEC reservoir pages & returning them as JSON.

  // Gets reservoir triplet
  const {
    query: { reservoir }
  } = req;
  const reservoirCaps = reservoir.toUpperCase();
  const reservoirList = ['CLE', 'FOL', 'MIL', 'NML', 'ORO', 'SHA'];
  if (reservoirList.includes(reservoirCaps)) {
    const htmlGetRes = await Axios.get(`http://cdec.water.ca.gov/dynamicapp/QueryDaily?s=${reservoirCaps}&end=${getLastSunday()}`);
    const html = htmlGetRes.data;
    res.end(html);
  }
}