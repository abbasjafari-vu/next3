"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";

import { useContext, createContext, useState } from "react";
import { Children } from "./_types";
import useSetStore, { type Stores } from "./_controls/useSetStore";

export const context = createContext<any>(null);
export const useStore = () => useContext<Stores>(context);

type Props = Children;
export default function Template(props: Props) {
  const { children } = props;

  const defaultOptions = { queries: { staleTime: 5 * 1000 } };

  const [queryClient] = useState(() => new QueryClient({ defaultOptions }));

  return (
    <context.Provider value={useSetStore()}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </context.Provider>
  );
}
