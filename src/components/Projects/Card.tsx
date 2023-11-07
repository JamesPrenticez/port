import React, { useEffect, useState } from "react";
import defaultImage from '../../assets/default.webp';
import { motion, useAnimation } from "framer-motion";
import { Item } from "./ProjectsGrid";

interface Props {
  selectedId: string;
  item: Item;
  handleClick: (id: string) => void;
}

function Card({ selectedId, item, handleClick }: Props){
  const { id, title, images } = item
  const [activeZIndex, setActiveZIndex] = useState("1");

  useEffect(() => {
    if (selectedId !== id && selectedId !== null){
      setActiveZIndex("1");
    }
    if (id === selectedId) {
      setActiveZIndex("30");
    } else {
      const timeoutId = setTimeout(() => setActiveZIndex("1"), 500);  // 1000ms delay
      return () => clearTimeout(timeoutId);
    }
  }, [id, selectedId]);

  return (
    <motion.li 
      key={id}
      className="relative rounded-md bg-blue-600 cursor-pointer w-[90%] mx-auto"
      style={{
        zIndex: activeZIndex,
      }}
      onClick={() => { handleClick(id) }}
      tabIndex={0}
      layoutId={id}
      // animate={{ opacity: 1 }}
      // onAnimationComplete={definition => {
      //   console.log('Completed animating', definition)
      // }}
      // onAnimationComplete={() => { setActiveZIndex("1"); console.log("done")}}
      transition={{ duration: 0.5 }} 
    >
      <img
        className="h-full w-full rounded-md p-5 shadow-lg"
        // src={img.src || "/default-image.jpg"}
        src={images[0] || defaultImage}
        alt=''
      />
      <div className="flex items-center justify-center h-full w-full rounded-md absolute top-0 left-0 right-0 bottom-0 bg-blue-600 text-white text-2xl font-semibold transition-opacity duration-1000 ease-out opacity-0 hover:opacity-90">
        <h4>{title}</h4>
      </div>
    </motion.li>
  )
}

export default Card