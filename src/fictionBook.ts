import Book from './book';

class FictionBook extends Book {
  getType(): string {
    return "Fiction Book";
  }
}

export default FictionBook;
