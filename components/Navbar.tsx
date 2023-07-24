"use client"
import { myNavLinks } from "../constants/index";
import Link from "next/link";
import Toggle from "./Toggle";
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full absolute z-10">
      <nav className="nav tertiary_text">
        <Link className="font-bold p-3 pl-0" href="/home">JKarbowski</Link>
        <div>
          {Object.values(myNavLinks).map((link) => (
            <Link className="link" key={link} href={`#${link}`}>
              {link}
            </Link>
          ))}
        </div>
        <Toggle isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </header>
  );
};

export default Navbar;
