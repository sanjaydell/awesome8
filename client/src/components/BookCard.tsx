import { bookData } from "../api/api";
import BookImage from "./BookImage";
import BookName from "./BookName";
import BookDetails from "./BookDetailsl";

function BookCard(props: { book: bookData }) {
  const { book } = props;
  const { title, discountRate, price } = book;
  return (
    <div className="w-full flex flex-col">
      <BookImage />
      <div className="w-full flex flex-col gap-8 p-2">
        <BookName title={title} />
        <BookDetails discountRate={discountRate} price={price} />
      </div>
    </div>
  );
}

export default BookCard;
