"use client";
import Image from "next/image";
import Typewriter from "react-ts-typewriter";
import Arrow from "@/public/icons/arrow-down.svg"

const Hero = () => {
  return (
    <section id="home">
    <div className="hero section">
      <div className="hero_text">
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
      </div>
      <Image  alt="Hero Image" width={540} height={560} src="/images/hero.svg" />
      <Arrow className="down_arrow animate-ping" />
      <div className="background"></div>
    </div>
    </section>
    
  );
};

export default Hero;
