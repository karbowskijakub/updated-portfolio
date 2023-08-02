import { iconsArrayTwo } from "@/constants";

export const Slider = () => {
  return (
    <div className="relative slider_animation">
      <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        {iconsArrayTwo.map((Logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center "
            key={index}
          >
            <Logo
              width="100"
              height="100"
              alt={`Logo ${Logo.name} na banerze`}
            />
          </div>
        ))}
        {iconsArrayTwo.map((Logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center "
            key={index}
          >
            <Logo
              width="100"
              height="100"
              alt={`Logo ${Logo.name} na banerze`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
