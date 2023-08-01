import { NavLinks, Icons } from "@/types";
import Github from "@/public/icons/github.svg";
import Linkedin from "@/public/icons/linkedin.svg";
import Instagram from "@/public/icons/instagram.svg";
import Docker from "@/public/icons/docker.svg";
import Angular from "@/public/icons/angular.svg";
import Mongo from "@/public/icons/mongodb.svg";
import Nodejs from "@/public/icons/nodejs.svg";
import React from "@/public/icons/react.svg";
import Nextjs from "@/public/icons/nextjs.svg";
import Javascript from "@/public/icons/javascript.svg";
import Typescript from "@/public/icons/typescript.svg";
import Redux from "@/public/icons/redux.svg";
import Wordpress from "@/public/icons/wordpress.svg";
import Basket from "@/public/icons/basket.svg";
import Marketing from "@/public/icons/marketing.svg";
import App from "@/public/icons/app.svg";
import Responsive from "@/public/icons/responsive.svg";
import Support from "@/public/icons/support.svg";
import Laptop from "@/public/icons/Laptop.svg";

export const iconsArray = [Github, Linkedin, Instagram];

export const iconsArrayTwo = [
  Wordpress,
  React,
  Nodejs,
  Typescript,
  Javascript,
  Redux,
  Nextjs,
  Angular,
  Docker,
  Mongo,
];

export const myNavLinks: NavLinks = {
  home: "Strona główna",
  about: "O mnie",
  services: "Usługi",
  portfolio: "Portfolio",
  contact: "Kontakt",
};

export const isMobile: boolean = true;

const iconsArrayThree = [
  Basket,
  Marketing,
  App,
  Responsive,
  Support,
  Laptop,
];

export const imagesArray = [
{
    image:"businesses",
},
{
  image:"cryptoenth",
},
{
  image:"businesses",
}

]


export const iconsData = [
  {
    title: "Strony internetowe",
    text: "Wykonam stronę wizytówkę dla twojego biznesu.",
    icon: iconsArrayThree[5],
  },
  {
    title: "Sklepy internetowe",
    text: "Zadbaj o swoją sprzedaż online - osiągnij sukces w e-commerce!",
    icon: iconsArrayThree[0],
  },
  {
    title: "Opieka nad twoją stroną",
    text: "Całodobowy monitoring i obsługa twojej strony internetowej.",
    icon: iconsArrayThree[4],
  },
  {
    title: "Optymalizacja SEO",
    text: "Zoptymalizuję twoją stronę pod kątem responsywności i SEO.",
    icon: iconsArrayThree[3],
  },
  {
    title: "Marketing",
    text: "Zareklamuj się online. Zdobądź nowych klientów.",
    icon: iconsArrayThree[1],
  },
  {
    title: "Aplikacje",
    text: "Tworzę spersonalizowane aplikacje internetowe.",
    icon: iconsArrayThree[2],
  },

];


