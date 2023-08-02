"use client";
import { socialIconsArray } from "@/constants";
import Link from "next/link";
import Arrow from "@/public/icons/arrowup.svg";
import Mail from "@/public/icons/mail.svg";

const Info = () => {
  return (
    <section className="bg-section-pattern ">
      <div className="section_short">
        <div className="flex flex-col  lg:flex-row lg:justify-around  p-4">
          <div className="flex  flex-center justify-center flex-col text-center lg:text-start mb-10 lg:mb-0 ">
            <div>
              {" "}
              <h4 className="ternary_text font-bold border-b-2 border-primary-orange inline">
                Jakub Karbowski
              </h4>
            </div>
            <div>
              <h5 className="font-bold text- my-5 ">Obserwuj mnie tutaj:</h5>
              <ul className="flex flex-row justify-center items-center ">
                {socialIconsArray.map(({ icon: Icon, link }) => (
                  <li key={Icon} className="mr-4 last:mr-0">
                    <Link href={link} target="_blank">
                      <button className="icons_button z-10">
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

          <div className="flex flex-center justify-center flex-col text-center bg-white   ">
            <Link href="#Strona_główna">
              <button className="cursor-pointer up_button">
                <div className="flex flex-center justify-center  ">
                  <Arrow
                    alt="Strzałka przewiń w górę"
                    width={120}
                    height={120}
                    style={{ width: 120, height: 120 }}
                  />
                </div>
                <h5 className="ternary_text font-bold ">Przewiń w górę</h5>
              </button>
            </Link>
          </div>

          <div className="flex  flex-center justify-end flex-col text-center lg:text-start mt-5 lg:mt-0 ">
            <div>
              <h5 className="font-bold text-ternary my-5 ">
                Skontaktuj się ze mną
              </h5>
              <div>
                <p className="font-bold text-ternary leading-0">
                  <Mail className="inline mr-1 w-10 h-10" alt="Ikona emaila" />
                  kontakt@jakubkarbowski.pl
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
