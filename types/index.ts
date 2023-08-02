export interface NavLinks {
  home: string;
  about: string;
  services: string;
  portfolio: string;
  contact: string;
}

export interface Icons {
  name: string;
  icon: any;
}

export interface PortfolioProps {
  image: string;
  controls: any;
  index: number;
}

export interface ServiceItemProps {
  Icon: React.ComponentType<{ width: string; height: string; alt: string }>;
  title: string;
  text: string;
  index: number;
  controls: any;
}

export interface ToggleProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SidebarProps {
  setOpen: (value: boolean) => void;
}
