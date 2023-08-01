"use client";
import Email from "@/public/icons/email.svg";
import ContactForm from "./Form";

const Contact = () => {
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
          <Email
            className="hidden lg:block"
            src="/images/email.svg"
            alt="Skrzynka kontaktowa"
            width={540}
            height={560}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
