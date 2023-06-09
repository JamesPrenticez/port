import React from 'react'
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"

import { github } from '../assets'
import { projects } from "../constants"
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from './hoc'

interface Project {
  index: number;
  name: string;
  description: string;
  tags: {
      name: string;
      color: string;
  }[];
  image: string;
  source_code_link: string;
}



const ProjectCard = ({index, name, description, image, source_code_link, tags}:Project):React.ReactElement => {
  return (

      <motion.div
        variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
      >
        <Tilt 
          className='bg-tertiary p-5 rounded-2xl xs:w-[360px] w-full'
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          scale={1}
          transitionSpeed={450}
        >
      <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-3/4 h-3/4 object-contain'
              />
            </div>
            {/* Use this div to provide a link to the demo */}
            {/* <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-3/4 h-3/4 object-contain'
              />
            </div> */}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        </Tilt>
      </motion.div>
  )
}

const Work = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className='sectionSubText'>My Work</p>
        <h2 className='sectionHeadText'>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my skills and experience through real-world examples of my work. Each project os briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and deliver results.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>


    </>
  )
}

export default SectionWrapper(Work, "work")