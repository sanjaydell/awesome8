import "./BookCard.css";
import { bookData } from "../api/api";
import BookImage from "./BookImage";
import BookName from "./BookName";
import BookDetails from "./BookDetailsl";

function BookCard(props: { book: bookData }) {
  const { book } = props;
  const { title, discountRate, price } = book;
  return (
    <div className="bookCard">
      <BookImage />
      <div className="content">
        <BookName title={title} />
        <BookDetails discountRate={discountRate} price={price} />
      </div>
    </div>
  );
}

export default BookCard;
