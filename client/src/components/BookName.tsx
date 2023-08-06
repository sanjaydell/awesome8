export default function BookName(props: { title: string }) {
  const { title } = props;
  return (
    <div className="name">
      <span className="font-semibold pl-2">{title}</span>
    </div>
  );
}
