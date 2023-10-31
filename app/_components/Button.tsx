import Link from "next/link";
import tw from "tailwind-styled-components";

export default tw(
  Link
)`inline-flex rounded-md relative px-5 py-2 text-sm md:text-base z-0 item-center justify-center font-marko
before:absolute before:inset-0 before:rounded-md before:-z-20
before:transition-all before:bg-gradient-to-br before:animate-pulse hover:before:animate-none 
before:from-primary-blue/30 before:via-primary-green/30 before:to-primary-red/30 before:duration-[2s] 
after:absolute after:inset-[1px] after:rounded-md after:bg-primary-dark2 after:-z-10
`;
