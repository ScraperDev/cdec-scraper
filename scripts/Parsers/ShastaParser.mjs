import CoreParser from "./CoreParser.mjs";

export class ShastaParser extends CoreParser {
  reservoirTriplet = "SHA"
  getSHA = async () => {
    this.requestHTML(this.reservoirTriplet);
  }
}