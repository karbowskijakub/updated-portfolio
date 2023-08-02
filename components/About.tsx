"use client";
import Image from "next/image";
import { socialIconsArray } from "@/constants";
import Link from "next/link";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { scaleY } from "@/utils/animations";
import { useInView } from "react-intersection-observer";

const About = () => {
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
    <section id="O_mnie">
      <div className="section_short ">
        <div>
          <h2 className="primary_text relative mb-4 title_section_decoration ">
            O mnie
          </h2>
          <p className="secondary_text text-primary-grey">
            Fullstack Developer & Freelancer
          </p>
        </div>
        <div className="about-container">
          <motion.div
            className="flex justify-center items-bottom"
            ref={ref}
            animate={controls}
            initial="initial"
            variants={scaleY}
            custom={0.5}
          >
            <Image
              className="animate-floating"
              alt="Zdjęcie sekcji o mnie"
              width={540}
              height={560}
              src="/images/about.svg"
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </motion.div>
          <div className="w-full lg:w-1/2 py-5 lg:p-5 z-0">
            <h3 className="secondary_text mb-5 font-bold ">Poznaj mnie</h3>
            <p className="mt-5 ternary_text">
              Nazywam się{" "}
              <span className="text-primary-orange font-bold">
                Jakub Karbowski
              </span>
              , a moją przygodę z programowaniem rozpocząłem w czerwcu 2021
              roku. Od tego czasu stało się to moim hobby, które nieodłącznie
              towarzyszy mi w życiu. Nieustannie poszerzam swoje horyzonty,
              zgłębiając nowe technologie, które potem implementuję w moich
              najnowszych projektach.
            </p>

            <p className="mt-5 ternary_text">
              Dążę zawsze do tego, aby moje prace były przejrzyste i intuicyjne
              dla użytkownika, zapewniając im wygodę i przyjemność z
              użytkowania. Niezależnie od skali projektu, dbam o każdy detal,
              aby zapewnić doskonałą jakość i funkcjonalność.
            </p>
            <div className="flex flex-col lg:flex-row mt-5">
              <Link href="#Kontakt">
                <button className="contact_button w-full">Kontakt</button>
              </Link>
              <ul className="flex flex-row justify-center items-center mt-8 lg:mt-0 lg:ml-7">
                {socialIconsArray.map(({ icon: Icon, link }) => (
                  <li key={Icon} className="mx-2">
                    <Link href={link}>
                      <button className="icons_button">
                        <Icon
                          width={30}
                          height={30}
                          alt={`Ikona ${Icon.name}`}
                        />
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
