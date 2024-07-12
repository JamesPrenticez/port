import React, { type ReactElement } from "react"
import { GithubIcon, LinkedInIcon, ReactIcon } from "../icons"
import ScrollDownIndicator from "./ScrollDownIndicator"
import { BlobsForever } from "./BlobsForever"
// import { Reveal } from "@components/FramerMotion/Reveal";
import { Slide } from "@components/FramerMotion/Slide";

// NOTE: This is a little bit funky bcuz of col-reverse we align to the bottom which is really the top 

function Hero(): ReactElement{
  return (
    <div className="flex-grow flex flex-col">
    <div className="flex-grow flex flex-col-reverse justify-end md:flex-row pt-[5rem] md:pt-[5rem] max-w-[95rem] mx-auto">
      <div className="text-gray-100 py-5 px-6 text-sm sm:text-xl md:text-3xl font-medium">
          <div className="leading-[1.5rem] md:leading-[3.25rem]">
            <span className="text-orange-400 text-2xl md:text-4xl font-bold">Hello!</span>
            
            {/* <Reveal>
              <span className="block text-5xl leading-[4rem] md:text-[8rem] md:leading-[9rem] font-bold">I&apos;m James</span>
            </Reveal> */}

            <Slide>
              <span className="block text-5xl leading-[4rem] md:text-[8rem] md:leading-[9rem] font-bold">I&apos;m James</span>
            </Slide> 

            A highly passionate and seriously creative
            <span className="before:block before:absolute before:-inset-y-[0rem] before:-inset-x-[0.25rem] md:before:-inset-x-[0.5rem] before:-skew-x-[12deg] before:-skew-y-[0deg] mx-3 md:mr-6 before:bg-[#fba81f] relative inline-block md:leading-[3rem]">
              <span className="font-bold italic relative text-blue-700">fullstack web developer</span>
              {/* before:bg-gradient-to-r from-[#f87537] to-[#fba81f] */}
            </span>
            with over 2 years of industry experience.
          </div>
          <br/>
          <p className="leading-[1.5rem] md:leading-[3.25rem]">I specialize in crafting beautiful and engaging user experiences with modern web frameworks.</p>

          <div className="flex mt-8 md:mt-12 space-x-4">
              <a href="https://www.linkedin.com/in/jamesprenticez/?originalSubdomain=nz" target="_blank">
                <GithubIcon className="h-8 w-8 md:h-12 md:w-12 cursor-pointer"/>
              </a>

              <a href="https://www.linkedin.com/in/jamesprenticez/?originalSubdomain=nz" target="_blank">
                <LinkedInIcon className="h-8 w-8 md:h-12 md:w-12 cursor-pointer"/>
              </a>
          </div>
      </div>

      <div className="w-full h-full">
        {/* Blob with Image*/}
        <div className="w-[330px] md:w-[400px] xl:w-[600px] relative mx-auto">
          <BlobsForever
            variant="image"
            image="./me.webp"
            colors={["#f87537", "#fba81f"]}
            />
        </div> 
      </div>
    </div>
      
    </div>
  );
}

export default Hero
      