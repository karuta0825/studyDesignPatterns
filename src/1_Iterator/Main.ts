import Book from "./Book";
import BookShelf from "./BookShelf";
import IIterator from "./IIterator";

(function Main() {
  const bookShelf: BookShelf = new BookShelf();
  bookShelf.appendBook(new Book("Around"));
  bookShelf.appendBook(new Book("Bible"));
  bookShelf.appendBook(new Book("Cinderella"));
  bookShelf.appendBook(new Book("Daddy-Long_Legs"));
  bookShelf.appendBook(new Book("思い思われふりふられ"));
  const it: IIterator = bookShelf.iterator();
  while (it.hasNext()) {
    const book: Book = it.next() as Book;
    console.log(book.getName());
  }
})();
