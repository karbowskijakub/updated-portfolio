"use client";
import { myNavLinks } from "../constants/index";
import Link from "next/link";
import Toggle from "./Toggle";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { slideDown } from "@/utils/animations";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedNavbar = JSON.parse(
        sessionStorage.getItem("navbar") ?? "false"
      );
      setNavbar(storedNavbar);

      const changeNav = () => {
        setNavbar(window.scrollY >= 40);
      };

      window.addEventListener("scroll", changeNav);

      return () => {
        window.removeEventListener("scroll", changeNav);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("navbar", JSON.stringify(navbar));
    }
  }, [navbar]);

  return (
    <AnimatePresence>
      <motion.header
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideDown}
        className={`w-full  duration-500 z-10 fixed ${
          navbar ? "bg-shadow" : ""
        }`}
      >
        <nav className="nav tertiary_text">
          <Link className="font-bold p-3 pl-0" href="/">
            Jakub Karbowski
          </Link>
          <div>
            <ul>
              {Object.values(myNavLinks).map((link) => (
                <li key={link} className="link hover">
                  <Link href={`#${link.replace(/\s/g, "_")}`}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Toggle isOpen={isOpen} setIsOpen={setIsOpen} />
          <AnimatePresence>
            {isOpen && <Sidebar setOpen={setIsOpen} />}
          </AnimatePresence>
        </nav>
      </motion.header>
    </AnimatePresence>
  );
};

export default Navbar;
