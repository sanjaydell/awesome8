import mysql, { Pool, PoolConnection } from "mysql2/promise";
import { Book } from "../entities/bookEntity";

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

  public getAllBooks = async (): Promise<Book[]> => {
    try {
      const connection: PoolConnection = await this.pool.getConnection();
      const [result] = await connection.query("SELECT * FROM books");
      connection.release();
      // const [result] = await this.pool.query('SELECT * FROM books');
      return result as Book[];
    } catch (error) {
      console.error("Error fetching books:", error);
      throw error;
    }
  };
}
