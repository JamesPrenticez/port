import React from 'react'
import { Link } from 'react-router-dom'
import { GithubIcon, LinkedInIcon, ReactIcon } from '../icons'
import TextEffect from '../common/TextEffect'
import ScrollDownIndicator from './ScrollDownIndicator'
import { BlobsForever } from './BlobsForever'

export default function Hero(){

   function getRandomColor() {
    return "#" + Math.random().toString(16).substr(-6);
  }
  
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateShapeProps() {
    return {
      size: 250,
      growth: 5, // getRandomInt(5, 9),
      edges: 6, //getRandomInt(3, 20)
      seed: 7,
    };
  }

  return (
    <div className="flex flex-col h-full  md:flex-row max-w-7xl mx-auto mt-6 md:mt-12 pt-[5rem]">

      {/* <div className=' w-full hidden md:block'>
        <TextEffect text={"James Prentice"}/>
      </div> */}

      {/* Blob with Image*/}
      <div className="w-[300px] h-[300px] relative mx-auto">
        <BlobsForever
          variant="image"
          image="./me.webp"
          colors={["rgba(248, 117, 55, 1)", "rgba(251, 168, 31, 1)"]}
          />
      </div>


      {/* Bio */}
      <div className='md:w-5/6 text-gray-100 py-5 px-6 md:mt-3 text-sm sm:text-xl md:text-xl'>
        <p>
          Hello! I&apos;m James a
          <span className="before:block before:absolute before:-inset-y-[0.1rem] before:-inset-x-[.25rem] before:-skew-y-[0.8deg] mx-3 before:bg-white relative inline-block">
            <span className='font-bold italic relative text-blue-700 '>frontend web developer</span>
          </span>
          with over 2 years of industry experience.

        </p>
        <br/>
        <p>
          I have some serious creative and technical skills, and like to work places that I can make a meaningful impact.
          {/* I specialize in crafting beautiful and engaging user interfaces with modern web frameworks. */}
          {/* There&apos;s nothing I love more than seeing users <i>react</i> positively with my creations. */}
        </p>

        <div className='flex mt-8 md:mt-12 space-x-4'>
            <a href="https://www.linkedin.com/in/jamesprenticez/?originalSubdomain=nz" target='_blank'>
              <GithubIcon className='h-8 w-8 md:h-12 md:w-12 cursor-pointer'/>
            </a>

            <a href="https://www.linkedin.com/in/jamesprenticez/?originalSubdomain=nz" target='_blank'>
              <LinkedInIcon className='h-8 w-8 md:h-12 md:w-12 cursor-pointer'/>
            </a>

            {/* <a href="https://www.linkedin.com/in/jamesprenticez/?originalSubdomain=nz" target='_blank'>
            </a> */}
        </div>

      </div>


      



      <div className="flex mt-auto justify-center">
        <ScrollDownIndicator />
      </div>
      {/* </div> */}
    </div>
  );
}



      