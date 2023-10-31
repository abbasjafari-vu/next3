"use client";

import { locate } from "_controls/languages";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import tw from "tailwind-styled-components";

export default function LocateSwicher() {
  const { replace } = useRouter();
  const { lang, category, post } = useParams();

  function setLang(lang: string) {
    localStorage.setItem("abbasjafari-language", lang);
    replace(
      `/${lang}${category ? "/docs/" + category : ""}${post ? "/" + post : ""}`
    );
  }
  return (
    <div className="flex gap-3 items-center">
      {locate.map((item, index) => (
        <Button
          key={index}
          onClick={() => setLang(item)}
          className={lang === item ? "text-primary-green" : "text-primary-gray"}
        >
          {item}
        </Button>
      ))}
    </div>
  );
}

const Button = tw.button`capitalize font-marko`;
