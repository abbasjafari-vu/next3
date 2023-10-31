import Link from "next/link";
import React from "react";
import { BsGithub, BsWhatsapp } from "react-icons/bs";

export default function SocialIcons() {
  return (
    <div className="text-2xl flex gap-3">
      <Link href="https://github.com/abbasjafari-vu">
        <BsGithub />
      </Link>
      <Link href="">
        <BsWhatsapp />
      </Link>
    </div>
  );
}
