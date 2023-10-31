import { ReactNode } from "react";

export type Children = { children: ReactNode };
export type Params = {
  params: { lang: string; category: string; post: string };
};
