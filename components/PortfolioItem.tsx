import Image from "next/image";

const PortfolioItem = ({ image }: any) => {
  return (
    <>
      <div className="relative portfolio_card   p-5 lg:mr-10 lg:last:mr-0 mt-10 lg:mt-0 ">
        <div className="bg-transparent hover:bg-black hover:opacity-30  absolute w-full h-full top-0 left-0 "></div>

        <Image
          alt={`${image} ikona`}
          src={`/images/${image}.png`}
          width={270}
          height={270}
          priority
          style={{ width: 270, height: 270 }}
        />
      </div>
    </>
  );
};

export default PortfolioItem;
