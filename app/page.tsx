import { Suspense } from "react";
import LocateDirect from "./_components/LocateDirect";

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      }
    >
      <LocateDirect />
    </Suspense>
  );
}
