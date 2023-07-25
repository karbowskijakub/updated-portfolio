"use client";
import { myNavLinks } from "../constants/index";
import Link from "next/link";
import Toggle from "./Toggle";
import Sidebar from "./Sidebar";
import { useState,useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { slideDown } from "@/utils/animations";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false)

	const changeNav = () => {
		if (window.scrollY >= 40) {
			setNavbar(true)
		} else setNavbar(false)
	}
	useEffect(() => {
		window.addEventListener('scroll', changeNav)
	}, [])

  return (
  <AnimatePresence>
    <motion.header 

    initial="initial"
    animate="animate"
    exit="exit"
    variants={slideDown}
    className={`w-full  duration-500 z-10 fixed ${navbar ?'bg-white shadow-[0_7px_29px_-21px_rgba(249,168,38,0.64)]': 'transparent' }`}>
      <nav className="nav tertiary_text">
        <Link className="font-bold p-3 pl-0" href="/home">
          JKarbowski
        </Link>
        <div>
          <ul>
            {Object.values(myNavLinks).map((link) => (
              <li key={link} className="link hover">
                <Link href={`#${link}`}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Toggle isOpen={isOpen} setIsOpen={setIsOpen} />
        <AnimatePresence>{isOpen && <Sidebar />}</AnimatePresence>
      </nav>
    </motion.header>
    </AnimatePresence>
  );
};

export default Navbar;
