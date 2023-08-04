import Book from './book';

interface BookRepositoryInterface {
  addBook(book: Book): void;
  getAllBooks(): Book[];
}

export default BookRepositoryInterface;
