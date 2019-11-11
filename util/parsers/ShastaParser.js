import { CoreParser } from "."
import { getLastSunday } from "../getLastSunday";

export class ShastaParser extends CoreParser {
  // Handles the parsing & data organization for the Shasta page

  splitUpData(html) {
    // Turns HTML into a document
    const document = this.parseFromString(html, "text/html");
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
    const lastWeekData = [
      // Assigns the last 7 data array to objects in the dayData array.

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
    return lastWeekData;
  }
  makeSummaryString(data) {

    const clean = (dirtyString) => {
      // Removes commas
      return parseFloat(dirtyString.replace(/,/g, ''));
    }

    const numberWithCommas = (x) => {
      // Magical regex. Don't touch.
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const calcAverageFlow = (flowType) => {
      // calculates average outflow or inflow.
      const flowArray = [];
      data.map((day) => {
        flowArray.push(clean(day[flowType]));
      });
      // Removes first day
      flowArray.shift();
      return flowArray.reduce((a, b) => a+b, 0) / 7;
    }

    const startSundayStorage = clean(data[0]['storage']);
    const endSundayStorage = clean(data[7]['storage']);

    const storageChange = numberWithCommas(Math.abs(startSundayStorage - endSundayStorage));
    const storageUpOrDown = (startSundayStorage - endSundayStorage > 0) ? 'down': 'up';
    const maxCapacity = 4552100;

    const startPctOfMax = (startSundayStorage / maxCapacity).toString().substring(2, 4);
    const endPctOfMax = (endSundayStorage / maxCapacity).toString().substring(2, 4);
    const pctOfMaxChange = Math.abs(endPctOfMax - startPctOfMax);

    return `As of Sunday, ${getLastSunday()}, storage in Shasta Reservoir was approximately 
      ${data[7]['storage']} AF (${endPctOfMax}% of capacity). That's 
      ${storageUpOrDown} ${storageChange} AF (${pctOfMaxChange}%) from the sunday before.
      Total capacity is about ${numberWithCommas(maxCapacity)} AF. The weekly average for
      daily inflows was calculated at ${calcAverageFlow("inflow").toFixed(2)} CFS and the weekly average 
      for daily outflows was calculated at ${calcAverageFlow('outflow').toFixed(2)} CFS.
      `;
  }
}