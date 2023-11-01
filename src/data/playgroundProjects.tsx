import React, { type ReactNode } from 'react'
import { type IPlaygroundProjects } from "@models";
import { skills } from '@components/Skills';

import {
  Bard,
  Cogs,
  HungryCaterpiller,
  BouncyText,
  MtCook,
  Handwriting,
  WeirdInput,
  Squircle,
  HorizontalScroller
} from "@components/playground"


export const data: IPlaygroundProjects[] = [
  {
    id: "1",
    title: "Bard",
    slug: "bard",
    desc: "",
    component: <Bard />,
    image: ""
  },
  {
    id: "2",
    title: "Hungry Caterpiller",
    slug: "hungry-caterpiller",
    desc: "",
    component: <HungryCaterpiller />,
    image: ""
  },
  {
    id: "3",
    title: "Cogs",
    slug: "cogs",
    desc: "",
    component: <Cogs />,
    image: ""
  },
  {
    id: "4",
    title: "Bouncy Text",
    slug: "bouncy-text",
    desc: "",
    component: <BouncyText text="Hover Me!" />,
    image: ""
  },
  {
    id: "5",
    title: "Mt Cook",
    slug: "mt-cook",
    desc: "",
    component: <MtCook />,
    image: ""
  },
  {
    id: "6",
    title: "Handwriting",
    slug: "handwriting",
    desc: "",
    component: <Handwriting />,
    image: ""
  },
  {
    id: "7",
    title: "Weird Input",
    slug: "weird-input",
    desc: "",
    component: <WeirdInput />,
    image: ""
  },
  {
    id: "8",
    title: "Squircle",
    slug: "squircle",
    desc: "",
    component: 
      <Wrapper>
        <div className='flex space-x-4 font-bold justify-center items-center'>
          <Squircle width={50} roundness={0.1} bgcolor="#ff5800">0.1</Squircle>
          <Squircle width={75} roundness={0.3} bgcolor="#ffe600">0.3</Squircle>
          <Squircle width={100} roundness={0.6} bgcolor="#c6ff00">0.6</Squircle>
          <Squircle width={150} roundness={1} bgcolor="#00fa9a">1</Squircle>
          <Squircle width={100} roundness={1.2} bgcolor="#00e2ff">1.2</Squircle>
          <Squircle width={75} roundness={1.6} bgcolor="#877df9">1.6</Squircle>
          <Squircle width={50} roundness={1.8} bgcolor="#d48af7">1.8</Squircle>
        </div>
      </Wrapper>,
    image: ""
  },
  {
    id: "9",
    title: "Horizontal Scroller",
    slug: "horizontal-scroller",
    desc: "",
    component: 
    <div className="w-[1000px] flex flex-col grow bg-purple-500 overflow-hidden">
      <div>
        <HorizontalScroller items={skills} direction="right" />
      </div>

      <div className='flex flex-col h-full text-bold text-7xl text-white items-center justify-center'>
        Horizontal Scroller
      </div>

      <div className="mt-auto">
        <HorizontalScroller items={skills} direction="left" />
      </div>
     </div>,
    image: ""
  },
  // {
  //   id: "",
  //   title: "",
  //   slug: "",
  //   desc: "",
  //   component: 
  //    <Wrapper> 
  //    </Wrapper>,
  //   image: ""
  // },
]


function Wrapper({ children }: { children: ReactNode}){
  return (
    <div className="bg-gray-50 flex w-full items-center justify-center">
      {children}
    </div>
  );
}

