import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export const Slide = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [toggle, setToggle] = useState(true)

  const mainControls = useAnimation();

  useEffect(() => {
    console.log(isInView)
    if (toggle === true) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [toggle, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { 
            opacity: 0, 
            x: "100%",
          },
          visible: { 
            opacity: 1, 
            x: 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25,  ease: "easeIn"  }}
      >
        {children}
      </motion.div>

        {/* <button className="p-4 bg-red-500 text-white"
          onClick={() => setToggle((prev) => !prev)}
        >toggle - {JSON.stringify(toggle)}</button> */}
    </div>
  );
};

