import "./BookCard.css";

export default function BookName(props: { title: string }) {
  const { title } = props;
  return (
    <div className="name">
      <span className="bookName">{title}</span>
    </div>
  );
}
