import { Item } from "@components/Grid/Grid"

import { teatime0, teatime1, teatime2, teatime3, teatime4 } from '../assets/projects/teatime';
import { egyptian0, egyptian1, egyptian2, egyptian3, egyptian4 } from '../assets/projects/egyptian';
import { ecom0, ecom1, ecom2, ecom3 } from '../assets/projects/ecom';
import { blog0, blog1, blog2, blog3, blog4, blog5, blog6, blog7 } from '../assets/projects/blog';
import { car0 } from '../assets/projects/car';
import { algo0 } from '../assets/projects/algo';



import egyptian from '../assets/projects/egyptian.avif';
import blog from '../assets/projects/blog.avif';
import selfreg from '../assets/projects/selfreg.avif';

export const projects: Item[] = [
  {
    id: "1",
    title: "Tea Time",
    desc: "Dev Academy Bootcamp Final Project. Group work with four other amazing people to create a MVP in 1 week. Automated solution to pick your favourite recipes for the week and generate a shopping list to buy all the ingrediants",
    tech: ["React", "Redux", "Express", "Knex", "Postgres/Sqlite3", "Jest"],
    images: [teatime0, teatime1, teatime2, teatime3, teatime4],
    link: "",
    video: "https://www.youtube.com/watch?v=ejJew8nsYeY",
    tags: ["all", "group", "database"],
    color: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,200,200,1) 100%)"
  },
  {
    id: "2",
    title: "Developer.Blog",
    desc: "This is a personal project developed as part of my portfolio project to show potential employers",
    tech: ["Next.js", "Redux", "Prisma", "Postgres/Sqlite3", "Draft.js", "React-hook-form"],
    link: "https://blog-jamesprenticez.vercel.app/",
    video: "",
    images: [blog0, blog1, blog2, blog3, blog4, blog5, blog6, blog7],
    tags: ["all", "hobby", "blog", "authentication"],
    color: "radial-gradient(circle, rgba(255,0,255,1) 0%, rgba(171,0,255,1) 83%)"
  },
  {
    id: "4",
    title: "Self Driving Car",
    desc: "A fun project made in vanilla JS. I learned how machine learning and neaural networks can be utilised in a parctical situation",
    tech: ["Javascript", "Machine Learning"],
    link: "",
    video: "",
    images: [car0],
    tags: ["all", "machine learning", "javascript"],
    color: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
  },
  {
    id: "3",
    title: "Egyptian NFT's",
    desc: "Mint a hero and fight the boss in a turn based card game https://rinkeby.etherscan.io/address/0x4b8A189189f8c1d3B3E7bDE7E6B32004580D3889 https://testnets.opensea.io/assets/0x4b8A189189f8c1d3B3E7bDE7E6B32004580D3889/1",
    tech: ["Next.js", "Solidity", "Hardhat", "Open Zeppelin", "Ethers", "Rinkeby Testnet"],
    images: [ egyptian0, egyptian1, egyptian2, egyptian3, egyptian4 ],
    link: "",
    video: "",
    tags: ["all", "hobby", "crypto"],
    color: "radial-gradient(circle, rgba(220,38,38,1) 0%, rgba(251,191,36,1) 100%)"
  },

  {
    id: "5",
    title: "Sorting Algorithim Visualizer",
    desc: "Learning about sorting algorithims", 
    tech: ["javascript"],
    link: "",
    video: "",
    images: [algo0],
    tags: ["all", "javascript"],
    color: "radial-gradient(circle, rgba(37,99,235,1) 0%, rgba(56,189,248,1) 100%)",
  },
  {
    id: "6",
    title: "Ecommerce",
    desc: "Built as a template project this project is a fully equiped ecommerce platform with stripe payment gateway and redux and prisma to store user cart in cookies and also on a database",
    tech: ["NextJS", "Redux", "Prisma", "Stripe", "Google Maps API"],
    link: "",
    video: "",
    images: [ecom0, ecom1, ecom2, ecom3],
    tags: ["all", "NextJS"],
    color: "radial-gradient(circle, rgba(0,255,29,1) 0%, rgba(159,255,0,1) 100%)"
  },
]

// 

// {
//   id: "6",
//   title: "Keyword Data Extractor",
//   desc: "",
//   tech: ["Python", "Fast API", "Next.js", "XMLHTTPRequest", "Cloudinary"],
//   link: "",
//   video: "",
//   images: [],
//   tags: ["all", "Next.js"],
//   color: "radial-gradient(circle, rgba(37,99,235,1) 0%, rgba(56,189,248,1) 100%)"
// },

// {
//   id: "4",
//   title: "Habit Tracker",
//   desc: "Habit Tracking to do list with agregated data and statistics for the entire year",
//   tech: ["Next.js", "Redux", "Prisma", "Postgres/Sqlite3", "Moment"],
//   link: "https://selfregulator-jamesprenticez.vercel.app/",
//   video: "",
//   images: ["/projects/selfregulator0.webp"],
//   tags: ["all", "database", "authentication"],
//   color: "radial-gradient(circle, rgba(0,255,29,1) 0%, rgba(159,255,0,1) 100%)",
// },
