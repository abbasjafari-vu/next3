"use client";

import { Dispatch, SetStateAction, useState } from "react";

export type Stores = {
  openDocsCategory: boolean;
  setOpenDocsCategory: Dispatch<SetStateAction<boolean>>;
};

export default function useSetStore(): Stores {
  const [openDocsCategory, setOpenDocsCategory] = useState(false);

  return { openDocsCategory, setOpenDocsCategory };
}
