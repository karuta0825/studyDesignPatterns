import FileThreatmentException from "./FileTreatmentException";
import IElement from "./IElement";
import Visitor from './Visitor';

export default abstract class Entry implements IElement {
  public abstract getName(): string;
  public abstract getSize(): number;
  public add(entry: Entry): Entry | never {
    throw new FileThreatmentException();
  }

  public toString(): string {
    return `${this.getName()} (${this.getSize()})`;
  }
  public abstract accept(v: Visitor): void;
}