import { getLastSunday } from "../utils/getLastSunday.mjs";

export default class CoreParser extends DOMParser {
  baseUrlString = "http://cdec.water.ca.gov/dynamicapp/QueryDaily";
  lastSunday = getLastSunday();

  async requestHTML(reservoirTriplet) {
    const response = await fetch(`${this.baseUrlString}?s=${reservoirTriplet}&end=${this.lastSunday}`);
    console.log(await response.text());
  }

}