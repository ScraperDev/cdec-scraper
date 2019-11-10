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

    console.log(dataArray);

    // Takes an array sliced from dataArray & returns an object with the corresponding keys.
    const createDayObject = (dataSlice) => {
      return {
        resEle: arraySlice[0],
        storage: arraySlice[1],
        resChg: arraySlice[2],
        tocSto: arraySlice[3],
        abvToc: arraySlice[4],
        outflow: arraySlice[5],
        inflow: arraySlice[6],
        evap: arraySlice[7],
        enf: arraySlice[8],
        rivRel: arraySlice[9],
        pptInc: arraySlice[10],
        rain: arraySlice[11],
        spill: arraySlice[12],
        disPwr: arraySlice[13]
      }
    }
  }
}