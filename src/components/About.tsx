import React from 'react'
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"

import { services } from "../constants"
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from './hoc'

interface Service {
  title: string;
  icon: string; 
}

interface ServiceCardProps {
  index: number;
  service: Service
}

const ServiceCard = ({index, service}:ServiceCardProps):React.ReactElement => {
  return (
    <Tilt 
      className='xs:w-[250px] w-full'
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      scale={1}
      transitionSpeed={450}
    >
      <motion.div
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col'
        >
          <img src={service.icon} alt={service.title} />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {service.title}
          </h3>
        </div> 
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className='sectionSubText'>Introduction</p>
        <h2 className='sectionHeadText'>Overview</h2>
      </motion.div>
      <motion.p
        className='mt-4 text-secondary text-[17px] max-w-3xl leading=[30px]'
        variants={fadeIn("", "", 0.1, 1)}
      >
        I'm a skilled software developer with experience in JavaScript, TypeScript and Python with expertise in frames such as React and Flask. I'm a passionate developer with and eye for detail and a love of data.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} service={service} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")