import { categories } from "_appData";
import DocsNav from "_components/DocsNav";
import Header from "_components/Header";
import { Children, Params } from "_types";

export async function generateStaticParams() {
  return categories.map(({ slug }) => ({
    category: slug,
  }));
}

type Props = Children & Params;
export default function CategoryLayout(props: Props) {
  const { children, params } = props;

  return (
    <>
      <Header />
      <DocsNav />

      <div className="min-h-screen max-w-content flex pb-5 duration-300">
        <div className="bg-primary-dark2 p-5 flex-1 rounded-xl lg:ms-64">
          {children}
        </div>
      </div>
    </>
  );
}
