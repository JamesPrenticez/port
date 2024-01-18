import React, { HTMLProps, type ReactNode } from 'react'
import { type IPlaygroundProjects } from "@models";
import { skills } from '@components/Skills';
import { dog } from '../assets/playgroundProjects';

import {
  FormValidation,
  Bard,
  Cogs,
  HungryCaterpiller,
  BouncyText,
  Handwriting,
  WeirdInput,
  Squircle,
  HorizontalScroller,
  Waves,
  StripeNavbar,
  TransparentTextEffect,
  // NextLevelIcons,
  Cube
} from "@components/playground"
import ParticleImage from '@components/playground/ParticleImage';
import TextEffect from '@components/common/TextEffect';
import TextEffect2 from '@components/common/TextEffect2';


export const data: IPlaygroundProjects[] = [

  {
    id: "0",
    title: "Form Validation",
    slug: "form-validation",
    desc: "",
    component: 
    <Wrapper>
        <FormValidation /> 
    </Wrapper>,
    image: ""
  },
  {
    id: "16",
    title: "Cube",
    slug: "cube",
    desc: "",
    component: 
    <Wrapper>
      <Cube className={"flex justify-center"} width={150} height={150} autoPlay={true} />
    </Wrapper>,
    image: ""
  },
  {
    id: "1",
    title: "Particles",
    slug: "particles",
    desc: "",
    component: 
    <Wrapper>
        <ParticleImage 
          img={dog}
          height={500}
          width={500}
          bgcolor='transparent'
        /> 
    </Wrapper>,
    image: ""
  },
  {
    id: "2",
    title: "Bouncy Text",
    slug: "bouncy-text",
    desc: "",
    component: <BouncyText text="Hover Me!" />,
    image: ""
  },
  {
    id: "3",
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
    id: "4",
    title: "Bard",
    slug: "bard",
    desc: "",
    component: <Bard />,
    image: ""
  },
  {
    id: "5",
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
    title: "Waves",
    slug: "waves",
    desc: "",
    component: <Waves />,
    image: ""
  },
  {
    id: "9",
    title: "Hungry Caterpiller",
    slug: "hungry-caterpiller",
    desc: "",
    component: <HungryCaterpiller />,
    image: ""
  },
  {
    id: "10",
    title: "Cogs",
    slug: "cogs",
    desc: "",
    component: <Cogs />,
    image: ""
  },
  {
    id: "11",
    title: "Text Effect 1",
    slug: "text-effect-1",
    desc: "",
    component: 
    <Wrapper className="bg-violet-700 flex-col gap-4">
      <TextEffect color1="#5c8ba1" color2="#8ec8e3" text='The' />
      <TextEffect color1="#cbb76e" color2="#fee99b" text='quick' />
      <TextEffect color1="#b5666f" color2="#f79196" text='brown' />
      <TextEffect color1="#648f7d" color2="#96dab4" text='fox!' />
    </Wrapper>,
    image: ""
  },
  {
    id: "12",
    title: "Text Effect 2",
    slug: "text-effect-2",
    desc: "",
    component: 
    <Wrapper className="bg-gray-100 flex-col gap-4">
      <TextEffect2 color1="#1d4ed8" color2="#2563eb" color3="#3b82f6" color4="#60a5fa" color5="#93c5fd" color6="#bfdbfe" color7="#dbeafe" text='The' />
      <TextEffect2 color1="#4338ca " color2="#4f46e5 " color3="#6366f1 " color4="#818cf8 " color5="#a5b4fc " color6="#c7d2fe " color7="#e0e7ff" text='quick' />
      <TextEffect2 color1="#7e22ce" color2="#9333ea" color3="#a855f7" color4="#c084fc" color5="#d8b4fe" color6="#e9d5ff" color7="#e9d5ff" text='brown' />
      <TextEffect2 color1="#a21caf " color2="#c026d3 " color3="#d946ef " color4="#e879f9 " color5="#f0abfc " color6="#fae8ff " color7="#fae8ff " text='fox!' />
    </Wrapper>,
    image: ""
  },
  {
    id: "13",
    title: "Stripe Navbar",
    slug: "stripe-navbar",
    desc: "",
    component: 
     <Wrapper style={{
        background: "url(https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS6lVlC0W5dY4GfoGvqJ86XbRFn3duerPndM79mko3-eC6MHBhBa2jVMGETn1_7xQUt) center center no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        overflow: "hidden"
     }}>
        <StripeNavbar /> 
     </Wrapper>,
    image: ""
  },
  {
    id: "14",
    title: "Transparent Text Effect",
    slug: "transparent-text-effect",
    desc: "",
    component: 
     <Wrapper className='bg-gradient-to-r from-[#d946ef] via-[#f43f5e] to-[#facc15]'>
        <TransparentTextEffect text="transparent" /> 
     </Wrapper>,
    image: ""
  },
  // {
  //   id: "15",
  //   title: "Next Level Icons",
  //   slug: "next-level-icons",
  //   desc: "",
  //   component: 
  //    <Wrapper className='!bg-black'> 
  //     <NextLevelIcons />
  //    </Wrapper>,
  //   image: ""
  // },
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

interface WrapperProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

function Wrapper({ children, className }: WrapperProps){
  return (
    <div className={`bg-gray-50 flex w-full items-center justify-center ${className}`}>
      {children}
    </div>
  );
}

