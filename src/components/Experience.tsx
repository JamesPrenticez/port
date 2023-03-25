import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css';

import { experiences } from '../constants'
import { SectionWrapper } from './hoc'
import { textVariant } from '../utils/motion'

interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}


const ExperienceCard = ({ title, company_name, icon, iconBg, date, points }: Experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff"
      }}
      contentArrowStyle={{
        borderRight: '7px solid #232631'
      }}
      date={date}
      iconStyle={{
        background: iconBg
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img 
            className='w-[60%] h-[60%] object-contain'
            src={icon}
            alt={company_name}
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{title}</h3>
        <p className='text-secondary text-[16px] font-semibold'>{company_name}</p>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {points.map((point, index) => (
            <li 
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}

        </ul>
      </div>
    </VerticalTimelineElement>
  )
}


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='sectionSubText'>What I've done so far</p>
        <h2 className='sectionHeadText'>Work Experience</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.title}
              {...experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")