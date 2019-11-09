import { CoreParser } from './CoreParser';

export class ShastaParser extends CoreParser {
  /*
   * The Parser classes are basically just DOMParser plus methods
   * that access the specific data I need. There's probably a
   * better way to do it than having a class for each target,
   * refactor later when it becomes obvious.
   */
  reservoirQueryParam = 'SHA';
}
