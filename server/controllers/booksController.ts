import { Request, Response } from 'express';
import { BooksService } from '../services/booksService';

export class BooksController {
  private booksService: BooksService;

  constructor() {
    this.booksService = new BooksService();
  }

  public getAllBooks = async (_req: Request, res: Response) => {
    try {
      const books = await this.booksService.getAllBooks();
      res.json(books);
    } catch (error) {
      console.error('Error fetching books:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
}
