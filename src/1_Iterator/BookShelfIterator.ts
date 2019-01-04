import Book from "./Book";
import BookShelf from "./BookShelf";
import IIterator from "./IIterator";

export default class BookShelfIterator implements IIterator {
  private bookShelf: BookShelf;
  private index: number;

  public constructor(bookShelf: BookShelf) {
    this.bookShelf = bookShelf;
    this.index = 0;
  }

  public hasNext(): boolean {
    if (this.index < this.bookShelf.getLength()) {
      return true;
    }
    return false;
  }

  public next(): object {
    const book: Book = this.bookShelf.getBookAt(this.index);
    this.index++;
    return book;
  }
}
