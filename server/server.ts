import express from "express";
import cors from "cors";
import { BooksController } from "./controllers/booksController"; // import { BooksController } from "./controllers/booksController";

const app = express();
app.use(cors());

const booksController = new BooksController();

app.get("/books", booksController.getAllBooks);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
