"use client";
import tw from "tailwind-styled-components";

import React from "react";
import { useParams } from "next/navigation";

export default function MyDocuments() {
  const { lang } = useParams();
  return (
    <Container className={lang === "fa" ? "px-10" : "px-5"}>
      {lang === "fa" ? "اسناد من" : "MyDocuments"}
    </Container>
  );
}

const Container = tw.div`inline-flex justify-center items-center bg-primary-dark2 py-2 shadow shadow-white/20 rounded col-span-2 sm:col-span-3 m-0.5`;
