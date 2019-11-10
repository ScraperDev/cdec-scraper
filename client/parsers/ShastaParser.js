export default class ShastaParser extends DOMParser {
  constructor(html) {
    super();
    // sets a document object from an html string
    this.document = this.parseFromString(html, "text/html");
  }


  // Handles the parsing & data organization
  splitUpData(document) {
    // Takes the doc's font elements into a NodeList
    const fontNodeList = document.querySelectorAll('font');

    // Forces the NodeList to be an array instead.
    const fontArray = Array.from(fontNodeList);

    // Slices off the first 16 items that I don't care about.
    const data = fontArray.slice(16);

    // Func that takes an array sliced from dataArray & returns an object with 
    // the corresponding keys.
    const createDayObject = (arraySlice) => {
      return {
        resEle: arraySlice[0].innerText,
        storage: arraySlice[1].innerText,
        resChg: arraySlice[2].innerText,
        tocSto: arraySlice[3].innerText,
        abvToc: arraySlice[4].innerText,
        outflow: arraySlice[5].innerText,
        inflow: arraySlice[6].innerText,
        evap: arraySlice[7].innerText,
        enf: arraySlice[8].innerText,
        rivRel: arraySlice[9].innerText,
        pptInc: arraySlice[10].innerText,
        rain: arraySlice[11].innerText,
        spill: arraySlice[12].innerText,
        disPwr: arraySlice[13].innerText
      }
    }
    const lastEightDays = [
      // Assigns the last 8 days to objects in the dayData array.

      // By the way, there are definitely DRYer
      // ways to do this but I'm on the clock.

      // Day 1
      createDayObject(data.slice(322, 336)),
      createDayObject(data.slice(336, 350)),
      createDayObject(data.slice(350, 364)),
      createDayObject(data.slice(364, 378)),
      createDayObject(data.slice(378, 392)),
      createDayObject(data.slice(392, 406)),
      createDayObject(data.slice(406, 420)),
      createDayObject(data.slice(420))
    ]
    console.log(lastEightDays);
    return lastEightDays;
  }
}