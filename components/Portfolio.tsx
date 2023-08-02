"use client";
import PortfolioItem from "./PortfolioItem";
import { imagesArray } from "@/constants";
import Link from "next/link";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [controls, inView]);

  return (
    <section id="Portfolio" className="bg-section-pattern ">
      <div className="relative section_short ">
        <div className="flex flex-col ">
          <h2 className="primary_text relative mb-4 title_section_decoration ">
            Portfolio
          </h2>
          <p className="secondary_text text-primary-grey">Moje prace</p>
        </div>

        <div
          ref={ref}
          className="flex flex-col lg:flex-row  z-[-10] lg:justify-between items-center w-full min-h-full  lg:my-20"
        >
          {imagesArray.map((item, index) => (
            <PortfolioItem
              key={item.id}
              image={item.image}
              index={index}
              controls={controls}
            />
          ))}
        </div>
        <Link href="https://github.com/karbowskijakub">
          <button className=" z-[-10] w-full mt-10 cursor-pointer  contact_button ">
            Zobacz moje prace
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
