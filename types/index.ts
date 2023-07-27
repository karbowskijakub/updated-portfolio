export interface NavLinks {
  home: string;
  about: string;
  services: string;
  portfolio: string;
  contact: string;
}

export interface Icons {
  github: string,
  instagram: string,
  linkedin: string,
}



export interface ToggleProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
