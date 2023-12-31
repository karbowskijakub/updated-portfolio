"use client";
import ServiceItem from "./ServiceItem";
import { iconsData } from "@/constants";
import Link from "next/link";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Services = () => {
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
    <section id="Usługi">
      <div className="relative section_short">
        <div className="flex flex-col ">
          <h2 className="primary_text relative mb-4 title_section_decoration z-0">
            Usługi
          </h2>
          <p className="secondary_text text-primary-grey">Zaistniej w sieci</p>
        </div>
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-10 mb-10 xl:mt-24"
        >
          {iconsData.map((item, index) => (
            <ServiceItem
              key={index}
              Icon={item.icon}
              title={item.title}
              text={item.text}
              index={index}
              controls={controls}
            />
          ))}
        </div>
        <Link href="#Kontakt">
          <button className="contact_button  w-full lg:w-fit ">
            Skontaktuj się ze mną
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Services;
