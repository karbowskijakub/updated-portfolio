import { NavLinks,Icons } from "@/types";
import Github from '@/public/icons/github.svg'
import Linkedin from '@/public/icons/linkedin.svg'
import Instagram from '@/public/icons/instagram.svg'

export const iconsArray = [ Github, Linkedin,Instagram]

export const myNavLinks:NavLinks = {
  home: "Strona główna",
  about: "O mnie",
  services: "Usługi",
  portfolio: "Portfolio",
  contact: "Kontakt",
};

export const myIcons:Icons ={
github: "github",
instagram: "instagram",
linkedin: "linkedin",

}

export const isMobile:boolean = true;