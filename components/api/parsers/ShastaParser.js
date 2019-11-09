import { CoreParser } from '.';
export class ShastaParser extends CoreParser {
  // This Shasta-Specific Reservoir Page Parser requests the Shasta Reservoir page.
  // It also massages out the data we want from the returned HTML
  async scrape() {
    // Creates the url for this week in Shasta.
    // (The method is inherited from CoreParser)
    const shastaURL = this._createTargetUrl('SHA');
    // Fetches the page.
    const res = await fetch(shastaURL);
    // Gets the text from the response body.
    const html = await res.text();
    // Logs the HTML
    console.log(html);
  }
}
