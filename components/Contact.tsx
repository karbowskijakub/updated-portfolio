"use client";
import Email from "@/public/icons/email.svg";
import ContactForm from "./Form";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { scaleY } from "@/utils/animations";

const Contact = () => {
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
    <section id="Kontakt">
      <div className="relative section_short">
        <div className="flex flex-col ">
          <h2 className="primary_text relative mb-4 title_section_decoration z-0">
            Kontakt
          </h2>
          <p className="secondary_text text-primary-grey">
            Skontaktuj się ze mną
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center  mt-10  lg:mt-20">
          <ContactForm />
          <motion.div
            ref={ref}
            animate={controls}
            initial="initial"
            variants={scaleY}
            custom={0.5}
          >
            <Email
              className="hidden lg:block animate-floating"
              src="/images/email.svg"
              alt="Skrzynka kontaktowa"
              width={540}
              height={560}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
