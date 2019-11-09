import { getLastSunday } from "../utils/getLastSunday.mjs";

export default class CoreParser extends DOMParser {
  base_reservoir_url = "http://cdec.water.ca.gov/dynamicapp/QueryDaily";
  lastSunday = getLastSunday();
}