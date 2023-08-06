export default function BookDetails(props: {
  discountRate: number;
  price: number;
}) {
  const { discountRate, price } = props;
  return (
    <div className="w-90% flex flex-row justify-between pl-1">
      <span className="text-red-500 font-bold">{discountRate}%</span>
      <span className="font-bold">{price}원</span>
    </div>
  );
}
