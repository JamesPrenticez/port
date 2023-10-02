import React, { type ReactNode} from 'react'
import { AzureIcon, CSSIcon, GitIcon, HTMLIcon, JSIcon, MySQLIcon, NodeIcon, PythonIcon, ReactIcon, TwindIcon } from './icons'
import { Reveal } from './FramerMotion/Reveal'
import { Slide } from './FramerMotion/Slide'
import Carousel from './HorizontalScroller'
import { type ISkills } from 'models'
import HorizontalScroller from './HorizontalScroller'
import Title from './common/Title'

const skills: ISkills[] = [
  {id: 1, name: "HTML", icon: <HTMLIcon />},
  {id: 2, name: "CSS", icon: <CSSIcon />},
  {id: 3, name: "Javascript", icon: <JSIcon />},
  {id: 4, name: "React", icon: <ReactIcon />},
  {id: 5, name: "Tailwind", icon: <TwindIcon />},
  {id: 6, name: "GIT", icon: <GitIcon />},
  // {id: 5, name: "Node", icon: <NodeIcon />},
  {id: 7, name: "Python", icon: <PythonIcon />},
  {id: 8, name: "MySQL", icon: <MySQLIcon />},
  {id: 9, name: "Azure", icon: <AzureIcon />},
]


const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

function Skills() {
  return (
    <div className='w-full'>

    {/* <Reveal>
      <h1 className='text-4xl text-center mb-6 font-medium text-gray-100'>
        Technologies I have experience with
      </h1>
    </Reveal>

    <Slide>
      <h1 className='text-4xl text-center mb-6 font-medium text-gray-100'>
        Technologies I have experience with
      </h1>
    </Slide> */}

    <Title text="Skills" />



    {/* <HorizontalScroller items={skills} direction="left" /> */}
    <HorizontalScroller items={skills} direction="right" />

    </div>
  )
}

export default Skills