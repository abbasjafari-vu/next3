import React from "react";
import Logo from "./Logo";
import LocateSwicher from "./LocateSwicher";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

export default function Header() {
  return (
    <header className="bg-primary-dark1">
      <div className="max-w-content flex flex-wrap items-center gap-4 py-5">
        <Logo />

        <LocateSwicher />

        <SocialIcons />
      </div>
    </header>
  );
}
