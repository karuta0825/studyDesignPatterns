import FileThreatmentException from "./FileTreatmentException";

export default abstract class Entry {
  public abstract getName(): string;
  public abstract getSize(): number;
  public add(entry: Entry): Entry | never {
    throw new FileThreatmentException();
  }

  public toString(): string {
    return `${this.getName()} (${this.getSize()})`;
  }

  // overloadは、デフォルト引数を利用する
  public abstract printList(prefix: string): void;
}
