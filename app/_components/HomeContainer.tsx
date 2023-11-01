"use client";

import { Children } from "_types";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import tw from "tailwind-styled-components";

type Props = Children;
export default function HomeContainer(props: Props) {
  const { children } = props;
  const { lang } = useParams();
  const [more, setMore] = useState(false);

  return (
    <HomePage
      className={more ? "max-h-[2000px] pb-10" : "max-h-screen sm:h-author"}
    >
      {children}
      <ReadMore
        className={lang === "fa" ? "translate-x-1/2" : "-translate-x-1/2"}
        onClick={() => setMore(!more)}
      >
        <div className="flex justify-center bg-gradient-to-t from-primary-dark2 to-primary-green/10 py-2 rounded-t-xl text-sm lg:py-2.5 lg:text-base">
          {more ? "مطالب کمتر" : "مطالب بیشتر"}
        </div>
      </ReadMore>
    </HomePage>
  );
}

const HomePage = tw.div` max-w-content my-5 sm:my-10 overflow-hidden relative duration-500`;

const ReadMore = tw.button`absolute bottom-0 max-w-4xl w-full start-1/2 px-4 md:px-0 z-50`;
