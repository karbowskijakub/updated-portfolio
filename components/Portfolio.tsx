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

        <div className="grid grid-cols-1 grid-rows-6  lg:grid-cols-3 lg:grid-rows-4 gap-y-5 lg:gap-10 mt-10 mb-10 xl:mt-24">
          <div className=" relative col-span-2 row-span-5 lg:col-span-2 lg:row-span-4   ">
            <Image
              alt="Hero Image"
              layout='fill'

              src="/images/cryptoenth.png"
            />
          </div>
          <div className="relative  hidden lg:block lg:relative lg:row-span-3 lg:col-start-3  ">
            <Image
              alt="Hero Image"
              layout='fill'
              src="/images/cryptoenth.png"
            />
          </div>
          <div className="relative cursor-pointer flex justify-center items-center contact_button  w-full h-full bg-primary-grey  lg:col-start-3 lg:row-start-4">
            Zobacz resztę prac
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
