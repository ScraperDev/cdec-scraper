import { getLastSunday } from "../utils/index.mjs";

export class CoreParser extends DOMParser {
  base_reservoir_url = "http://cdec.water.ca.gov/dynamicapp/QueryDaily";
  lastSunday = getLastSunday();
}