import Builder from './Builder';
import IBuilder from './IBuilder';

// export default class TextBulder extends Builder {
export default class TextBulder implements IBuilder {
    private buffer: string = '';

  public makeTitle(title: string): void {
    this.buffer += '======================\n';
    this.buffer += `「${title}」\n`;
    this.buffer += '\n';
  }

  public makeString(str: string): void {
    this.buffer += `■${str}\n`
    this.buffer += '\n';
  }

  public makeItems(items: string[]): void {
    items.forEach(item => {
      this.buffer += ` ・${item}\n`;
    })
    this.buffer += '\n';
  }

  public close(): void {
    this.buffer += '======================\n';
  }

  public getResult(): string {
    return this.buffer;
  }
}