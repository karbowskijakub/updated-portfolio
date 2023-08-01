"use client";
import Slider from "@/components/Slider";

const Technology = () => {
  return (
    <section className="bg-secondary-orange ">
      <div className="section_short">
        <div className="flex flex-col">
          <h2 className="primary_text mb-4 relative title_section_decoration z-0">
            Technologie
          </h2>
          <p className="secondary_text text-primary-grey">
            Spójrz jakich technologii używam
          </p>
        </div>
        <div className="w-full ">
         <Slider/>
        </div>
      </div>
    </section>
  );
};

export default Technology;
