import { NavLinks,Icons } from "@/types";
import Github from '@/public/icons/github.svg'
import Linkedin from '@/public/icons/linkedin.svg'
import Instagram from '@/public/icons/instagram.svg'
import Docker from '@/public/icons/docker.svg'
import Angular from '@/public/icons/angular.svg'
import Mongo from '@/public/icons/mongodb.svg'
import Nodejs from '@/public/icons/nodejs.svg'
import React from '@/public/icons/react.svg'
import Nextjs from '@/public/icons/nextjs.svg'
import Javascript from '@/public/icons/javascript.svg'
import Typescript from '@/public/icons/typescript.svg'
import Redux from '@/public/icons/redux.svg'
import Wordpress from '@/public/icons/wordpress.svg'


export const iconsArray = [ Github, Linkedin,Instagram]

export const iconsArrayTwo = [ Wordpress
  , React 
  ,Nodejs
  ,Typescript
  ,Javascript
  ,Redux
  ,Nextjs
  ,Angular
  ,Docker
  ,Mongo]

export const myNavLinks:NavLinks = {
  home: "Strona główna",
  about: "O mnie",
  services: "Usługi",
  portfolio: "Portfolio",
  contact: "Kontakt",
};


export const isMobile:boolean = true;