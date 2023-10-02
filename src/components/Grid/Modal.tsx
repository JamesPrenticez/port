import React, {useRef, useState, type Dispatch, type SetStateAction, useEffect} from "react";
import { CrossIcon } from "@components/icons";
import { AnimatePresence, motion } from "framer-motion";
import { type Item } from "./Grid";
import defaultImage from '../../assets/projects/default.avif';
import useClickAwayListener from "@hooks/events/useClickAwayListener";
import { useRefContext } from "@components/providers/refProvider";
import Carousel2 from "@components/Carousel2/Carousel2";

interface Props {
  selectedId: string | null;
  item: Item;
  setSelectedId: Dispatch<SetStateAction<string | null>>;
  parentRef?: any;
}

function Modal({
  selectedId,
  setSelectedId,
  item
}: Props){
  const modalRef = useRef(null)
  const isClickAway = useClickAwayListener(modalRef)
  const { projectsRef } = useRefContext();

  useEffect(() => {
    if(isClickAway) setSelectedId(null)
  }, [isClickAway])

  useEffect(() => {
    if (projectsRef.current && selectedId !== null) {
      const scrollbarWidth = "5px";
      document.body.style.overflow = 'hidden';
      projectsRef.current.style.paddingRight = scrollbarWidth;
    } else if (projectsRef.current) {
      document.body.style.overflow = 'auto';
      projectsRef.current.style.paddingRight = '';
    }
  
    // Cleanup function to reset the styles incase the component unmounts
    return () => {
      if (projectsRef.current) {
        document.body.style.overflow = '';
        projectsRef.current.style.paddingRight = '';
      }
    };
  }, [selectedId]);

  return (
    <motion.div
      key="modal"
      className="fixed top-0 left-0 right-0 bottom-0 bg-gray-500/80 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} 
    >
        
      <motion.div 
        ref={modalRef}
        layoutId={selectedId}
        className="bg-blue-600 rounded-md fixed z-50 top-[5%] left-[5%] w-[90%] h-[90%] p-6 border border-white"
        transition={{ duration: 0.5 }} 
      >

        {/* Title */}
        <div className="flex">
          <h2 className="text-white text-3xl font-semibold">{item.title}</h2>
          <CrossIcon className="h-12 w-12 text-white ml-auto cursor-pointer" onClick={() => { setSelectedId(null) }}/>
        </div>

        <div className="flex space-between gap-x-4">
          <Carousel2
            images={item.images}
          />
          <div className="text-white">
            <h1 className="text-2xl border-b-2 mb-2">Description</h1>
            <p>{item.desc}</p>
          </div>
        </div>

        <div className="flex space-x-1">
          {item.tech.map((tech, index) => (
            <div 
              key={index}
              className="bg-sky-400 text-white rounded-full px-2"
              style={{
                backgroundColor: 
                  tech === "React" ? "blue" 
                  : tech === "Redux" ? "red"
                  : ""
              }}
            >
              {tech}
            </div>
          ))}
        </div>

      </motion.div>
    </motion.div> 
  )
}

export default Modal





{/* <AnimatePresence>
    
<motion.div 
  key="modal"
  className="fixed top-0 left-0 right-0 bottom-0 bg-black z-50"
  initial={{opacity: 0}}
  animate={{ opacity: 1}}
  exit={{opacity: 0}}
  transition={{ duration: 0.5 }}
>
  asdf
</motion.div>
</AnimatePresence> */}
    {/* <motion.div 
      ref={modalRef}
      onAnimationComplete={() => console.log("done")}
      layoutId={selectedId}
      className="bg-blue-600 rounded-md fixed z-50 top-[5%] left-[5%] w-[90%] h-[90%] p-6 border border-white"
      transition={{ duration: 0.5 }} 
    >
      <motion.div onClick={() => { setSelectedId(null) }} className="flex">
        <motion.h2>{item.title}</motion.h2>
        <CrossIcon className="h-12 w-12 text-white ml-auto cursor-pointer"/>
      </motion.div>
      <img
        className="h-1/2 w-1/2"
        src={item.img || defaultImage}
        alt=''
      />
    </motion.div> */}