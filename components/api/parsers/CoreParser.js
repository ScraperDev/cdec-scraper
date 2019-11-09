export class CoreParser extends DOMParser {
  // Base endpoint for scraping reservoir fields.
  baseRvUrl = 'http://cdec.water.ca.gov/dynamicapp/QueryDaily';

  createTargetUrl(rvTriplet) {
    const lastSunday = getLastSunday(); // Returns ISO-Formatted date for last sunday.
    // Concatenates the lastSunday & reservoir triplet query params to the baseUrl.
    // There's probably a better way to do this, even in vanilla.
    // However, this works & is clear enough.
    return `${this.baseRvUrl}?s=${rvTriplet}&end=${lastSunday}`;
  }
}
