import Book from './book';
import FictionBook from './fictionBook';
import NonFictionBook from './nonFictionBook';
import BookRepository from './bookRepository';

const bookRepository = new BookRepository();

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, 15);
const fictionBook = new FictionBook("Harry Potter", "J.K. Rowling", 1997, 20);
const nonFictionBook = new NonFictionBook("Ikigai: The Japanese Secret to a Long and Happy Life",
  "Héctor García and Francesc Miralles",
  2016,
  30);

bookRepository.addBook(book1);
bookRepository.addBook(fictionBook);
bookRepository.addBook(nonFictionBook);

const allBooks = bookRepository.getAllBooks();
console.log(allBooks);
