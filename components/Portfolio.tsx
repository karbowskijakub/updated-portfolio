"use client";
import PortfolioItem from "./PortfolioItem";
import { imagesArray } from "@/constants";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section id="Portfolio" className="bg-section-pattern ">
      <div className="relative section_short ">
        <div className="flex flex-col ">
          <h2 className="primary_text relative mb-4 title_section_decoration ">
            Portfolio
          </h2>
          <p className="secondary_text text-primary-grey">Moje prace</p>
        </div>

        <div className="flex flex-col lg:flex-row  z-[-10] lg:justify-between items-center w-full min-h-full  lg:my-20">
          {imagesArray.map((item) => (
            <PortfolioItem key={item.id} image={item.image} />
         
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
