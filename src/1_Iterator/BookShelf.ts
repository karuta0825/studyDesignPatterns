import Book from "./Book";
import BookShelfIterator from "./BookShelfIterator";
import IAggregate from "./IAggregate";
import IIterator from "./IIterator";

export default class BookShelf implements IAggregate {
  private books: Book[];
  private last: number = 0;

  public constructor() {
    this.books = [];
  }

  public iterator(): IIterator {
    return new BookShelfIterator(this);
  }

  public getLength(): number {
    return this.books.length;
  }

  public getBookAt(idx: number): Book {
    return this.books[idx];
  }

  public appendBook(book: Book): void {
    this.books[this.last] = book;
    this.last++;
  }
}
