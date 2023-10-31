"use client";
import { redirect } from "next/navigation";

export default function DirectLanguage() {
  if (typeof window !== "undefined") {
    const getLang = localStorage.getItem("abbasjafari-language");
    redirect(`/${getLang ?? "fa"}`);
  }
  return (
    <div className="h-screen flex justify-center items-center text-2xl">
      Loading...
    </div>
  );
}
