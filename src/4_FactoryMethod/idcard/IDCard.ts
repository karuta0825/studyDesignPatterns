import { Product } from "../framework";

export class IDCard extends Product {
  private owner: string;
  constructor(owner: string) {
    super();
    this.owner = owner;
    console.log(`${this.owner}のカードをつくりました`);
  }

  public use(): void {
    console.log(`${this.owner}のカードを使いました`);
  }

  public getOwner(): string {
    return this.owner;
  }
}
