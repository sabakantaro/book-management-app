import Book from './book';

class BookRepository {
  private books: Book[];

  constructor() {
    this.books = [];
  }

  addBook(book: Book) {
    this.books.push(book);
  }

  getAllBooks(): Book[] {
    return this.books;
  }
}

export default BookRepository;
