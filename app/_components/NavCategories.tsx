"use client";
import Button from "./Button";
import { useParams } from "next/navigation";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useStore } from "template";
import tw from "tailwind-styled-components";
import { Children } from "_types";

type Props = Children;
export default function NavCategories(props: Props) {
  const { category } = useParams();
  const { openDocsCategory, setOpenDocsCategory } = useStore();

  return (
    <button
      className="flex justify-between items-center relative"
      onClick={() => setOpenDocsCategory(!openDocsCategory)}
    >
      <Button href="" className="pointer-events-none capitalize">
        {category.toString().replace("-", " ")}
      </Button>
      <div className="text-xl">
        {openDocsCategory ? <BsChevronUp /> : <BsChevronDown />}
      </div>
      <Categories className={openDocsCategory ? "max-h-[500px]" : "max-h-0"}>
        <CategoriesContainer>{props.children}</CategoriesContainer>
      </Categories>
    </button>
  );
}

const Categories = tw.div`absolute top-full start-0 end-0 mt-2 overflow-hidden z-30`;
const CategoriesContainer = tw.div`p-3 bg-primary-dark2 rounded-lg flex flex-col gap-2`;
