export default class ShastaParser extends DOMParser {
  constructor(html) {
    super();
    this.document = this.parseFromString(html, "text/html");
  }

  splitUpData(document) {
    // Handles the parsing & data organization

    // Takes the doc's font elements into a NodeList
    const fontNodeList = document.querySelectorAll('font');

    // Forces the NodeList to be an array instead.
    const fontArray = Array.from(fontNodeList);

    // Slices off the first 16 items that I don't care about.
    const dataArray = fontArray.slice(16);

    // Creates a two-dimensional array, with one dimension being "data types"
    // and the other being "date"
    const dayArray = [];
    const currentPosition = 0;
    dayArray.slice(currentPosition, currentPosition + 14);
  }
}