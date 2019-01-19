import DirecotryIterator from "./DirecotyIterator";
import Entry from "./Entry";
import IIterator from "./IIterator";
import Visitor from "./Visitor";

export default class Directory extends Entry {
  private name: string;
  private entries: Entry[];
  private index: number;
  constructor(name: string) {
    super();
    this.name = name;
    this.entries = [];
    this.index = 0;
  }

  public getName(): string {
    return this.name;
  }

  public add(entry: Entry): Entry {
    this.entries.push(entry);
    return this;
  }

  public getSize(): number {
    return this.entries.reduce((acc, entry) => acc + entry.getSize(), 0);
  }

  public accept(v: Visitor): void {
    v.visit(this);
  }

  public getAt(index: number): Entry {
    return this.entries[index];
  }

  public getLength(): number {
    return this.entries.length;
  }

  public iterator(): IIterator {
    return new DirecotryIterator(this);
  }
}
