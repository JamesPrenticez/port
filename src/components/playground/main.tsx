import { type IPlaygroundProjects } from "@models";
import { skills } from '@components/Skills';
import { dog } from '../../assets/playgroundProjects';

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
  StripeNavbar,
  TransparentTextEffect,
  SynthWave,
  Cube,
  ProcessDisplay,
  TilePage,
  Minecraft,
  ParticleImage
} from "@components/playground"

import TextEffect from '@components/common/TextEffect';
import ProcessDisplayPage from '@components/playground/Components/ProcessDisplay/ProcessDisplayPage';
import Wrapper from './Wrapper';


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
  {
    id: "16",
    title: "SynthWave",
    slug: "synthwave",
    desc: "",
    component: 
     <Wrapper> 
      <SynthWave />
     </Wrapper>,
    image: ""
  },
  {
    id: "17",
    title: "Process Display",
    slug: "process-display",
    desc: "",
    component: 
     <Wrapper className='!block'> 
      <ProcessDisplayPage />
     </Wrapper>,
    image: ""
  },
  {
    id: "18",
    title: "Tile",
    slug: "tile",
    desc: "",
    component: 
     <Wrapper className='!block'> 
      <TilePage />
     </Wrapper>,
    image: ""
  },
  {
    id: "20",
    title: "Minecraft",
    slug: "minecraft",
    desc: "",
    component: 
     <Wrapper className='!block'> 
      <Minecraft />
     </Wrapper>,
    image: ""
  },

]



