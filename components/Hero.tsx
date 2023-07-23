"use client"
import Image from "next/image";
import Typewriter from 'react-ts-typewriter';

const Hero = () => {
  return (
    <div className="hero section">
      <div className="hero_text">
        <h1 className="primary_text">
          Cześć,
          <br /> tu Jakub!
        </h1>
        <h2 className="secondary_text">Jestem <br/><Typewriter
       text={["Fullstack developerem", "Freelancerem"]} loop={true} speed={300}
       /></h2>
      </div>
      <Image
        alt="Hero Image"
        width={540}
        height={560}
        src="/images/hero.svg"
      ></Image>
    </div>
  );
};

export default Hero;
