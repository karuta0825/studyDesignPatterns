import { Factory, Product } from "../framework";
import { IDCard } from "./IDCard";

export class IDCardFactory extends Factory {
  private owners: string[] = [];
  constructor() {
    super();
  }

  public createProduct(owner: string): Product {
    return new IDCard(owner);
  }

  public registerProduct(product: Product) {
    this.owners.push((product as IDCard).getOwner());
  }

  public getOwners(): string[] {
    return this.owners;
  }
}
