import NumberGenerator from "./NumberGenerator";

export default class RandomNumberGenerator extends NumberGenerator {
  private num: number = -1;
  public getNumber(): number {
    return this.num;
  }
  public execute(): void {
    for (let i = 0; i < 20; i += 1) {
      setTimeout(() => {
        this.num = Math.floor(Math.random() * 50);
        this.notifyObservers();
      }, 1000 * (i + 1));
    }
  }
}
