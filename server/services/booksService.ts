import { BooksRepository } from '../repositories/booksRepository';
import { Book } from '../entities/bookEntity';
import { Request } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

export class BooksService {
  private booksRepository: BooksRepository;

  constructor() {
    this.booksRepository = new BooksRepository();
  }

  public getAllBooks = async (req: Request): Promise<Book[] | undefined> => {
    try {
      const books = await this.booksRepository.getAllBooks(req);
      return books;
    } catch (error) {
      console.error('Error fetching books:', error);
      throw error;
    }
  };
}
