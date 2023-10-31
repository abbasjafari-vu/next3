import { ReactNode } from "react";

export async function generateStaticParams() {
  return [{ lang: "fa" }, { lang: "en" }];
}

type Props = { children: ReactNode };
export default function layout(props: Props) {
  return <>{props.children}</>;
}
