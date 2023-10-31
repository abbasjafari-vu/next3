import type { Metadata } from "next";
import person from "_assets/images/person.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function HomePage() {
  return (
    <div className="mx-auto mt-10 max-w-3xl w-full">
      <Image
        src={person}
        width={200}
        height={300}
        alt=""
        priority
        className="w-48 h-auto bg-primary-gray rounded-xl"
      />
    </div>
  );
}