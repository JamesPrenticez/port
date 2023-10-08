import React, { type ReactNode} from 'react'
import { AzureIcon, CSSIcon, GitIcon, HTMLIcon, JSIcon, MySQLIcon, NodeIcon, PythonIcon, ReactIcon, TwindIcon } from './icons'
import { Reveal } from './FramerMotion/Reveal'
import { Slide } from './FramerMotion/Slide'
import Carousel from './HorizontalScroller'
import { type ISkills } from 'models'
import HorizontalScroller from './HorizontalScroller'
import Title from './common/Title'
import { HandwritingEffect } from './playground/Handwriting'

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
    <div className='w-full '>
    <HorizontalScroller items={skills} direction="right" />

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


    <div className='flex items-center justify-center pt-12'>
    {/* <Title text="Skills" /> */}
      <HandwritingEffect />
    </div>

<div className='flex space-x-12 items-center justify-center w-full mt-6'>

    <div className='rounded  text-white w-[250px] h-[400px]'>

      <h1 className='text-3xl text-center'>Frontend</h1>
      <p className='text-justify'>
        With strong fundementals in HTML, CSS, and JavaScript, I specialize in developing vibrant and interactive user interfaces. My expertise lies in utilizing React for its dynamic, component-based architecture and employing Redux for effective and predictable state management, ensuring a seamless user experience.
      </p>
    </div>
    <div className='rounded   text-white w-[250px] h-[400px]'>

      <h1 className='text-3xl text-center'>Backend</h1>
      <p className='text-justify'>
      Focusing on robust and scalable server-side solutions, I leverage the capabilities of Flask and Express to develop fast and preformate APIs for consumption. I love having the power and utility of python on the backend particularly when working with numbers and data. Express also offers a great ecosystem with the added benifit of similifying the stack with one multipurpose language.
      </p>
    </div>
    <div className='rounded  text-white w-[250px] h-[400px]'>
      <h1 className='text-3xl text-center'>Devops</h1>
      <p className='text-justify'>
        In the realm of DevOps, I often turn towards serverless architectures as most appropriate for my use case. Microsoft Azure as my goto cloud provider for deploying resources and am proficent in setting up CI/CD pipelines to ensure streamlined development operations and processes.
      </p>
    </div>


</div>


    <HorizontalScroller items={skills} direction="left" />

    </div>
  )
}

export default Skills