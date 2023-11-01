import { categories } from "_appData";
import Button from "_components/Button";
import Header from "_components/Header";
import HomeContainer from "_components/HomeContainer";
import MyDocuments from "_components/MyDocuments";
import { Children, Params } from "_types";
import React from "react";
import tw from "tailwind-styled-components";

type Props = Children & Params;
export default function HomeLayout(props: Props) {
  const { children, params } = props;

  return (
    <>
      <Header />

      <HomeContainer>{children}</HomeContainer>
      <nav className="mt-auto">
        <NavContainer>
          <MyDocuments />
          {categories.map(({ title, slug }, index) => (
            <Button
              key={`home-nav-${index}`}
              href={`/${params.lang}/docs/${slug}`}
            >
              {title}
            </Button>
          ))}
        </NavContainer>
      </nav>
    </>
  );
}

const NavContainer = tw.div`max-w-content py-5 grid grid-cols-2 sm:grid-cols-3 md:flex flex-wrap items-center gap-2`;
