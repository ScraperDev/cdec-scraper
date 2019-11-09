export class CoreParser extends DOMParser {
  baseRvUrl = 'http://cdec.water.ca.gov/dynamicapp/QueryDaily';
  createTargetUrl(rvTriplet) {
    const lastSunday = getLastSunday();
    return `${this.baseRvUrl}?s=${rvTriplet}&end=${lastSunday}`;
  }
}
