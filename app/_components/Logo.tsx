"use client";
import tw from "tailwind-styled-components";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function Logo() {
  const { lang } = useParams();
  return (
    <Link href={`/${lang}`} className="me-auto">
      <Container dir="ltr">
        <FirstCharacter>A</FirstCharacter>bbas
        <FirstCharacter className="ms-2">J</FirstCharacter>afari
      </Container>
    </Link>
  );
}

const Container = tw.div`
font-moirai text-2xl md:text-3xl xl:text-4xl font-bold tracking-widest`;
const FirstCharacter = tw.span`text-primary-green`;
