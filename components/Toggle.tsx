import { ToggleProps } from '@/types';

const Toggle: React.FC<ToggleProps> = ({ isOpen, setIsOpen }) => {
  const handleToggleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <button
      onClick={handleToggleClick}
      className='lg:hidden flex flex-col gap-2 justify-center z-20 p-3'
    >
      <span
        className={`w-6 h-0.5 rounded-md bg-black/75 transition ${
          isOpen ? 'rotate-45 translate-y-[250%]' : ''
        }`}
      ></span>
      <span
        className={`w-6 h-0.5 rounded-md bg-black/75 transition ${
          isOpen ? '-rotate-45 -translate-y-[250%]' : ''
        }`}
      ></span>
    </button>
  );
};

export default Toggle;