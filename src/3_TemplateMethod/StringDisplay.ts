import AbstractDisplay from "./AbstractDisplay";

export default class StringDisplay extends AbstractDisplay {
  private str: string;
  private width: number;

  constructor(str: string) {
    super();
    this.str = str;
    this.width = str.length;
  }

  public open(): void {
    this.printLine();
  }

  public close(): void {
    this.printLine();
  }

  public print(): void {
    console.log(`|${this.str}|`);
  }

  private printLine(): void {
    process.stdout.write("+");
    for (let i = 0; i < this.width; i++) {
      process.stdout.write("-");
    }
    console.log("+");
  }
}
