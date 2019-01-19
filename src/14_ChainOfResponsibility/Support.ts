import Trouble from "./Trouble";

export default abstract class Support {
  private name: string;
  private next: Support | null;

  constructor(name: string) {
    this.name = name;
    this.next = null;
  }

  public setNext(next: Support): Support {
    this.next = next;
    return next;
  }

  public support(trouble: Trouble) {
    if (this.resolve(trouble)) {
      this.done(trouble);
    } else if (this.next !== null) {
      this.next.support(trouble);
    } else {
      this.fail(trouble);
    }
  }

  public done(trouble: Trouble): void {
    console.log(`${trouble.toString()} is resolved by ${this.toString()}.`);
  }

  public fail(trouble: Trouble): void {
    console.log(`${trouble.toString()} cannnot be resolved.`);
  }

  public toString(): string {
    return `[${this.name}]`;
  }

  protected abstract resolve(trouble: Trouble): boolean;
}
