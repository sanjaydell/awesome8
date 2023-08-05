import { BooksRepository } from '../repositories/booksRepository';
import { Book } from '../entities/bookEntity';

export class BooksService {
  private booksRepository: BooksRepository;

  constructor() {
    this.booksRepository = new BooksRepository();
  }

  public getAllBooks = async (): Promise<Book[]> => {
    try {
      const books = await this.booksRepository.getAllBooks();
      return books;
    } catch (error) {
      console.error('Error fetching books:', error);
      throw error;
    }
  };
}
