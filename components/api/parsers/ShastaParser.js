import { CoreParser } from '.';
import { load as loadHtml } from 'cheerio';
import Axios from 'axios';

export class ShastaParser extends CoreParser {
  // This Shasta-Specific Reservoir Page Parser requests the Shasta Reservoir page.
  // It also massages out the data we want from the returned HTML
  async scrape() {
    // Creates the url for this week in Shasta.
    // (The method is inherited from CoreParser)
    const shastaURL = this._createTargetUrl('SHA');
    // Fetches the page.
    try {
      // Request Page
      const pageRes = await Axios.get(shastaURL);

      // Gets the text from the response body.
      const html = pageRes.data;

      // parseHTML method pulls what I actually *want* from the html.

      return true;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  parseHTML(html) {
    const $ = loadHtml(html);
    const tableDataNodes = $('td').attr('align', 'right');
  }
}
