import React, { 
  forwardRef,
  type ReactNode,
  type HTMLProps 
} from "react"

import { twMerge } from "tailwind-merge"



interface SectionProps extends HTMLProps<HTMLElement> {
  height?: string;
  snapScroll?: boolean;
  children: ReactNode;
} 

const Section = forwardRef(({ 
  height,
  className,
  children,
}: SectionProps, ref: any) => {
  return (
    <section 
      ref={ref} 
      className={twMerge(`
        flex flex-col relative md:snap-center`,
        height ? height : "min-h-screen",
        className
      )}
      // style={{ 
      //   scrollSnapAlign: "center"
      // }}
    >
      {children}
    </section>
  );
});

export default Section;