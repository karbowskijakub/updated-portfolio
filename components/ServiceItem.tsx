import { ServiceItemProps } from "@/types";
import { motion } from "framer-motion";
import { scaleY } from "@/utils/animations";

const ServiceItem: React.FC<ServiceItemProps> = ({
  Icon,
  title,
  text,
  index,
  controls,
}) => {
  return (
    <motion.div
      variants={scaleY}
      initial="initial"
      animate={controls}
      custom={index * 0.1}
      className="flex flex-col justify-center  w-full h-full bg-secondary-orange p-12 hover:bg-primary-orange hover:-translate-y-3 transition-all ease-linear hover:text-white hover:fill-white"
    >
      <Icon width="80" height="80" alt={`Ikona ${Icon}`} />
      <h4 className="py-5 font-bold">{title}</h4>
      <p>{text}</p>
    </motion.div>
  );
};

export default ServiceItem;
