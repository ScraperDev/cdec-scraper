import { getLastSunday } from "../../../util/getLastSunday";
import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  // get reservoir triplet from url param
  const {
    query: { reservoir }
  } = req;
  const reservoirCaps = reservoir.toUpperCase();
  const reservoirList = ['CLE', 'FOL', 'MIL', 'NML', 'ORO', 'SHA'];
  if (reservoirList.includes(reservoirCaps)) {
    console.log(getLastSunday());
    const htmlGetRes = await fetch(`http://cdec.water.ca.gov/dynamicapp/QueryDaily?s=${reservoirCaps}&end=${getLastSunday()}`);
    const html = await htmlGetRes.text();
    res.end(html);
  }
}