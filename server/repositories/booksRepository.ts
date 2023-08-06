import mysql, { Pool, PoolConnection } from "mysql2/promise";
import { Book } from "../entities/bookEntity";
import { Request } from "express";

export class BooksRepository {
  private pool: Pool;

  constructor() {
    this.pool = mysql.createPool({
      host: "127.0.0.1",
      user: "root",
      password: "Sanjaydell@1",
      database: "awesome8",
    });
  }

  public getAllBooks = async (req: Request): Promise<Book[] | undefined> => {
    try {
      const offsetParam = req.query.offset;
      if (typeof offsetParam === "string") {
        const offset = parseInt(offsetParam) || 0;
        const limit = 10;
        const connection: PoolConnection = await this.pool.getConnection();

        const [result] = await connection.query(
          "SELECT * FROM books LIMIT ?, ?",
          [offset, limit]
        );
        connection.release();
        return result as Book[];
      }
    } catch (error) {
      console.error("Error fetching books:", error);
      throw error;
    }
  };

  public buyBook = async (bookId: number, userID: number): Promise<void> => {
    try {
      const connection: PoolConnection = await this.pool.getConnection();
      //assuming we have tables for orders and user
      await connection.query("INSERT INTO purchases (book_id, user_id) VALUES (?, ?)", [bookId, userID]);
      connection.release();
    } catch (error) {
      console.error("Error buying the book:", error);
      throw error;
    }
  };
}
