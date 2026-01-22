import React from "react";
import Image from "next/image";
import logoImage from "./assets/logo.png";
import AnimatedLink from "@/src/components/ui/AnimatedLink";
import Divider from "../../ui/Divider";

export default function Header() {
  return (
    <header className="px-100">
      <nav className="flex items-center justify-between py-9">
        <Image src={logoImage} alt="Logo" width={200} height={200} />
        <ul className="flex gap-4">
          <li>
            <AnimatedLink href="/characters">Characters</AnimatedLink>
          </li>
          <li>
            <AnimatedLink href="#about">About</AnimatedLink>
          </li>
          <li>
            <AnimatedLink href="#services">Services</AnimatedLink>
          </li>
        </ul>
        
      </nav>
      <Divider />
    </header>
  );
}
