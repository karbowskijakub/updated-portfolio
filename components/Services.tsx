

interface ServiceItem {
  icon: string;
  text: string;
  img: any;
}

interface ServicesProps {
  services: ServiceItem[];
}



const Services = () => {
  return (
<section >
      <div className="section_short  py-8 lg:py-24">
        <div className="flex flex-col mb-8 lg:mb-24">
          <h2 className="primary_text mb-4 relative title_section_decoration z-0">
            Usługi
          </h2>
          <p className="secondary_text text-primary-grey">
            Zobacz, czym dokładnie się zajmuję
          </p>
        </div>
        <div className="relative w-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
<div className="w-full h-full bg-secondary-orange p-7 hover:bg-primary-orange hover:-translate-y-3 transition-all ease-linear hover:text-white">
<h4>fdfdfd</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fuga!</p>
</div>

        </div>
      </div>
    </section>
  )
}





export default Services