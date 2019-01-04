import Banner from "./Banner";
import IPrint from "./IPrint";

export default class PrintBanner extends Banner implements IPrint {
  public constructor(str: string) {
    super(str);
  }
  public printWeak(): void {
    this.showWithParen();
  }
  public printStrong(): void {
    this.showWithAster();
  }
}
