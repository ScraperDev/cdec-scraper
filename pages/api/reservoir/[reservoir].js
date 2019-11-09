import { getLastSunday } from "../../../util/getLastSunday";
import Axios from "axios";

export default async (req, res) => {
  // get reservoir triplet from url param
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