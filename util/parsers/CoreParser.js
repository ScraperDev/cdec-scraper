import fetch from "isomorphic-unfetch";

export class CoreParser extends DOMParser {

  async requestHTML(reservoirTriplet) {
    // Base_Url for reservoirs
    const base_url = "http://localhost:4200/api/reservoir/"
    // Fetches the response
    const res = await fetch(base_url + reservoirTriplet);
    // Returns the html
    return await res.text();
  }
}