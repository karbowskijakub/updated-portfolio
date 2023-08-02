"use client";
import Image from "next/image";
import Typewriter from "react-ts-typewriter";
import Arrow from "@/public/icons/arrow-down.svg";
import { motion } from "framer-motion";
import { scaleAnimation,scaleY } from "@/utils/animations";


const Hero = () => {
  return (
    <section id="Strona_główna">
      <div className="hero section">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={scaleAnimation}
        custom={1.5}
        
        className="hero_text">
          <h1 className="primary_text hero_section_decoration">
            Cześć,
            <br /> tu Jakub!
          </h1>
          <h3 className="secondary_text">
            Jestem <br />
            <Typewriter
              text={["Fullstack developerem", "Freelancerem"]}
              loop={true}
              speed={300}
            />
          </h3>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={scaleY}
        custom={1}
         >
          <Image
            alt="Hero grafika"
            width={540}
            height={560}
            src="/images/hero.svg"
            priority
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>
        <Arrow className="down_arrow animate-ping" />
        <div className="background"></div>
      </div>
    </section>
  );
};

export default Hero;
