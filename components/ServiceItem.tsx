import { ServiceItemProps } from "@/types";

const ServiceItem: React.FC<ServiceItemProps> = ({ Icon, title, text }) => {
  return (
    <div className="flex flex-col justify-center  w-full h-full bg-secondary-orange p-10 hover:bg-primary-orange hover:-translate-y-3 transition-all ease-linear hover:text-white hover:fill-white">
      <Icon width="80" height="80" alt={`${Icon} ikona`} />
      <h4 className="py-5 font-bold">{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default ServiceItem;
