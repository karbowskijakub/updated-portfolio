"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { slideDown } from "@/utils/animations";
import { myNavLinks } from "../constants/index";
import Link from "next/link";
import { SidebarProps } from "@/types";

const Sidebar = ({ setOpen }: SidebarProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideDown}
        className="sidebar"
      >
        <div className="sidebar-wrapper">
          <ul>
            {Object.values(myNavLinks).map((link) => (
              <li key={link} className="link-sidebar hover secondary_text">
                <Link
                  onClick={handleLinkClick}
                  href={`#${link.replace(/\s/g, "_")}`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
