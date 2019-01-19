import Support from "./Support";
import Trouble from "./Trouble";

export default class OddSupport extends Support {
  public constructor(name: string) {
    super(name);
  }

  protected resolve(trouble: Trouble): boolean {
    if (trouble.getNumber() % 2 === 1) {
      return true;
    }
    return false;
  }
}
