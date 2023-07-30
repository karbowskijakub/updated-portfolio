import Image from "next/image";
const Portfolio = () => {
  return (
    <section className="bg-secondary-orange ">
      <div className="relative section_short py-8 lg:py-24">
        <div className="flex flex-col ">
          <h2 className="primary_text relative mb-4 title_section_decoration z-0">
            Portfolio
          </h2>
          <p className="secondary_text text-primary-grey">Moje prace</p>
        </div>

        <div className="grid grid-cols-3 grid-rows-10 lg:grid-cols-3 lg:grid-rows-3 gap-5 lg:gap-10 mt-10 mb-10 xl:mt-24">
        <div className="col-span-3 row-span-6 lg:col-span-2 lg:row-span-4 w-full h-full bg-primary-grey">
          <Image  alt="Hero Image" width={540} height={560} src="/images/hero.svg" />
          </div>
          <div className="col-span-3 row-span-3 row-start-7 lg:row-start-auto lg:row-span-2 lg:col-start-3 w-full h-full bg-primary-grey"><Image  alt="Hero Image" width={540} height={560} src="/images/hero.svg" /></div>
          <div className="flex  justify-center items-center contact_button col-span-3 row-start-10 lg:row-span-2 lg:col-start-3 lg:row-start-3 w-full h-full bg-primary-grey">Zobacz pozostałe prace</div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
