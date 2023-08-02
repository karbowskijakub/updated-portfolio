import Image from "next/image";
import { motion } from "framer-motion";
import { scaleAnimation } from "@/utils/animations";
import { PortfolioProps } from "@/types";

const PortfolioItem = ({ image, controls, index }: PortfolioProps) => {
  return (
    <>
      <motion.div
        className="relative portfolio_card   p-5 lg:mr-10 lg:last:mr-0 mt-10 lg:mt-0 "
        variants={scaleAnimation}
        initial="initial"
        animate={controls}
        custom={index * 0.4}
      >
        <div className="bg-transparent hover:bg-black hover:opacity-30  absolute w-full h-full top-0 left-0 "></div>

        <Image
          alt={`Ikona ${image}`}
          src={`/images/${image}.png`}
          width={270}
          height={270}
          priority
          style={{ width: 270, height: 270 }}
        />
      </motion.div>
    </>
  );
};

export default PortfolioItem;
