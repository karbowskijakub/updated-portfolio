"use client";
import Image from "next/image";
import { iconsArray,socialIconsArray } from "@/constants";
import Link from "next/link";

const About = () => {
  return (
    <section id="O_mnie">
      <div className="section_short ">
        <div className="flex flex-col">
          <h2 className="primary_text relative mb-4 title_section_decoration ">
            O mnie
          </h2>
          <p className="secondary_text text-primary-grey">
            Fullstack Developer & Freelancer
          </p>
        </div>
        <div className="about-container">
          <div className="flex justify-center items-bottom">
            <Image
              className="animate-bounce-slow"
              alt="About Image"
              width={540}
              height={560}
              src="/images/about.svg"
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="w-full lg:w-1/2 py-5 lg:p-5 z-0">
            <h3 className="secondary_text mb-5 font-bold ">Poznaj mnie</h3>
            <p className="mt-5 ternary_text">
              Nazywam się{" "}
              <span className="text-primary-orange font-bold">Jakub Karbowski</span>,
              swoją przygodę z programowaniem rozpocząłem w czerwcu 2021 roku i
              od tamtej pory stanowi nieodłączną część mojego życia. To
              fascynujące hobby pochłania mnie każdego dnia. Nieustannie
              poszerzam swoje horyzonty, zgłębiając nowe technologie, które
              później implementuję w moich najnowszych projektach.
            </p>

            <p className="mt-5 ternary_text">
              Dążę zawsze do tego, aby moje prace były przejrzyste i intuicyjne
              dla użytkownika, zapewniając im wygodę i przyjemność z
              użytkowania. Niezależnie od skali projektu, dbam o każdy detal,
              aby zapewnić doskonałą jakość i funkcjonalność.
            </p>
            <div className="flex flex-col lg:flex-row mt-5">
              <Link href='#Kontakt'>
              <button className="contact_button">Kontakt</button>
              </Link>
              <ul className="flex flex-row justify-center items-center mt-8 lg:mt-0 lg:ml-7">
                {socialIconsArray.map(({icon:Icon,link}) => (
                  <li key={Icon} className="mx-2">
                    <Link href={link}>
                    <button
                      className="icons_button"
                    >
                      <Icon width={30} height={30} alt={`Icon ${Icon.name}`} />
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
