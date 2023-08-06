export default function BookDetails(props: {
  discountRate: number;
  price: number;
}) {
  const { discountRate, price } = props;
  return (
    <div className="details">
      <span className="discountRate">{discountRate}%</span>
      <span className="price">{price}원</span>
    </div>
  );
}
