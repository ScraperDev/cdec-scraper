export class CoreParser extends DOMParser {
  // Base Parser Class. Handles the functionalities that the
  // Reservoir-Specific parsers share.

  // Base endpoint for scraping reservoir fields.
  _baseRvUrl = 'http://cdec.water.ca.gov/dynamicapp/QueryDaily';

  _createTargetUrl(rvTriplet) {
    // Concatenates the lastSunday & reservoir triplet query params to the baseUrl.
    // There's probably a better way to do this, even in vanilla.
    // However, this works & is clear enough.

    const lastSunday = getLastSunday(); // Returns ISO-Formatted date for last sunday.
    return `${this.baseRvUrl}?s=${rvTriplet}&end=${lastSunday}`;
  }
}
