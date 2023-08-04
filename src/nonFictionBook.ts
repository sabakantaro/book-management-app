import Book from './book';

class NonFictionBook extends Book {
  getType(): string {
    return "Non-Fiction Book";
  }
}

export default NonFictionBook;
