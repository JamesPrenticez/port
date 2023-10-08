import React, { useRef } from 'react'

import one from "../../assets/playgroundProjects/mtcook/01.svg"
import two from "../../assets/playgroundProjects/mtcook/02.svg"
import three from "../../assets/playgroundProjects/mtcook/03.svg"
import four from "../../assets/playgroundProjects/mtcook/04.svg"
import five from "../../assets/playgroundProjects/mtcook/05.svg"

import { Parallax, ParallaxLayer } from '@react-spring/parallax' 
import TextEffect from '../common/TextEffect'

const ParallaxMtCook = () => {
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  const containerRef = useRef(null)

  return (
    <div className='flex h-[100vh] w-full overflow-y-scroll relative'>


      <Parallax 
        pages={2}
        ref={containerRef}
        id="container"
        className='bg-sky-500'
        style={{
          top: 0,
          left: 0,
        }}
      > 

        <ParallaxLayer offset={0.2} speed={-2}>
          <div className="w-full max-w-full h-screen flex justify-end items-end" >
            {/* <img src={five} className='w-full h-auto mb-[593px]'/> */}
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={0.1} speed={-1}>
          <div className="w-full max-w-full h-screen flex justify-end items-end" >
            <img src={four} className='w-full h-auto mb-[380px] '/>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={-0.8} speed={-1.8}>
          <div className="w-full max-w-full h-screen flex justify-end items-end" >
            <img src={three} className='w-full h-auto mb-[230px] '/>
          </div>
        </ParallaxLayer> 

        <ParallaxLayer offset={-1} speed={-0.8}>
          <div className="w-full max-w-full h-screen flex justify-end items-end" >
            <img src={two} className='w-full h-auto '/>
          </div>
        </ParallaxLayer> 

        <ParallaxLayer offset={-0.2} speed={0}>
          <div className="w-full max-w-full h-screen flex justify-end items-end" >
            <img src={one} className='w-full h-auto '/>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.80} factor={1.2} speed={0}>
          <section id="skillsSection" ref={skillsRef} className="w-full h-full min-h-screen bg-[#113352] ">
            <div className='flex flex-col max-w-7xl w-full mx-auto pt-8'>
              <h1 className="text-3xl md:text-4xl lg:text-7xl text-gray-50">
                Mt Cook Parallax
              </h1>
              <h2 className="text-gray-400 font-lg">Scroll down</h2>
            </div>
          </section>
        </ParallaxLayer>   



      </Parallax>
    </div>

  )
}

export default ParallaxMtCook

// https://indisrupt.indmoney.com/scroll-animation-using-css-scroll-snap-and-react-spring-7663d3925f7a
// https://www.youtube.com/watch?v=UgIwjLg4ONk
// https://www.youtube.com/watch?v=mxHoPYFsTuk
// https://alistairshepherd.uk/writing/parallax-svg-landscape-1/
// https://codepen.io/isladjan/pen/abdyPBw
// https://www.youtube.com/watch?v=FJ44qmE5odc