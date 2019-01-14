import IIterator from "./IIterator";
import Directory from './Directory';
import Entry from './Entry';

export default class DirecotryIterator implements IIterator {
  private direcotry: Directory;
  private index: number;

  public constructor(directory: Directory) {
    this.direcotry = directory;
    this.index = 0;
  }

  public hasNext(): boolean {
    return this.index < this.direcotry.getLength();
  }

  public next(): object {
    const entry: Entry = this.direcotry.getAt(this.index);
    this.index++;
    return entry;
  }

}