import { Product } from "./Product";

export abstract class Factory {
  public create(owner: string): Product {
    const p: Product = this.createProduct(owner);
    this.registerProduct(p);
    return p;
  }
  public abstract createProduct(owner: string): Product;
  public abstract registerProduct(p: Product): void;
}
