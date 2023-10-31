type Props = { params: { category: string } };
export default function categoryPage(props: Props) {
  const { params } = props;

  return <div>{decodeURI(params.category)}</div>;
}
