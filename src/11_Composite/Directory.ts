import Entry from "./Entry";

export default class Directory extends Entry {
  private name: string;
  private entries: Entry[];
  constructor(name: string) {
    super();
    this.name = name;
    this.entries = [];
  }

  public getName(): string {
    return this.name;
  }

  public add(entry: Entry): Entry {
    this.entries.push(entry);
    return entry;
  }

  public getSize(): number {
    return this.entries.reduce((acc, entry) => acc + entry.getSize(), 0);
  }

  // この再帰が肝で、引数にprefixを渡していくことでパスがうまく表現できてる
  public printList(prefix: string = ""): void {
    console.log(`${prefix}/${this.toString()}`);
    this.entries.forEach((entry) => {
      entry.printList(`${prefix}/${this.name}`);
    });
  }
}
