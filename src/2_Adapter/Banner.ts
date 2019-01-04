export default class Banner {
  private str: string;

  public constructor(str: string) {
    this.str = str;
  }
  public showWithParen(): void {
    console.log(`(${this.str})`);
  }

  public showWithAster(): void {
    console.log(`*${this.str}*`);
  }
}
