import Display from "./Display";
import DisplayImpl from "./DisplayImpl";

export default class CountDisplay extends Display {
  public constructor(impl: DisplayImpl) {
    super(impl);
  }
  public multiDisplay(times: number): void {
    this.open();
    for (let i = 0; i < times; i += 1) {
      this.print();
    }
    this.close();
  }
}
