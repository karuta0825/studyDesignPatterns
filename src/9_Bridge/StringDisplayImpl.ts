import DisplayImpl from "./DisplayImpl";

export default class StringDisplayImpl extends DisplayImpl {
  private str: string;
  private width: number;
  public constructor(str: string) {
    super();
    this.str = str;
    this.width = str.length;
  }
  public rawOpen(): void {
    this.printLine();
  }

  public rawPrint(): void {
    console.log(`|${this.str}|`);
  }

  public rawClose(): void {
    this.printLine();
  }

  private printLine(): void {
    process.stdout.write("+");
    for (let i = 0; i < this.width; i += 1) {
      process.stdout.write("-");
    }
    console.log("+");
  }
}
