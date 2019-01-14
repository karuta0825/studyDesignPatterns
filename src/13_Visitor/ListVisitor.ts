import Visitor from './Visitor';
import Entry from './Entry';
import File from './File';
import Directory from './Directory';

export default class ListVisitor extends Visitor {
  private currentdir: string = '';

  public visit(entry: Entry): void {
    if ( entry instanceof File) {
      console.log(`${this.currentdir}/${entry.toString()}`);
    }

    if (entry instanceof Directory) {
      console.log(`${this.currentdir}/${entry.toString()}`);
      const savedir: string = this.currentdir;
      this.currentdir = `${this.currentdir}/${entry.getName()}`
      const it = entry.iterator();
      while(it.hasNext()) {
        const e: Entry = it.next() as Entry;
        e.accept(this);
      }
      this.currentdir = savedir;
    }

  }

}