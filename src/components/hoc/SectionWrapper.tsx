import React, {type ComponentType} from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '../../utils/motion'

const SectionWrapper = (Component: ComponentType, idName: string) => {
  const HOC = () => {
    return (
      <motion.div
        className="relative padding max-w-7xl mx-auto z-0"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25}}
      >
        <span className='hash-span' id={idName}>&nbsp;</span>
        <Component />
      </motion.div>
    )
  }
  return HOC
}

export default SectionWrapper