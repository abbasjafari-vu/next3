import { Children, Params } from "_types";
import tw from "tailwind-styled-components";

export async function generateStaticParams() {
  return [{ lang: "fa" }, { lang: "en" }];
}

type Props = Children & Params;
export default function languageLayout(props: Props) {
  const { children, params } = props;

  return (
    <Main
      dir={params.lang === "fa" ? "rtl" : "ltr"}
      className={params.lang === "fa" ? "font-dana" : "font-marko"}
    >
      {children}
    </Main>
  );
}

const Main = tw.main`flex flex-col min-h-screen w-screen overflow-x-hidden`;
