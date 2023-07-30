export interface NavLinks {
  home: string;
  about: string;
  services: string;
  portfolio: string;
  contact: string;
}

export interface Icons {
  name: string,
  icon: any,

}

export interface ServiceItemProps {
  Icon: React.ComponentType<{ width: string; height: string; alt:string }>; 
  title: string;
  text: string;
}

export interface ToggleProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

