import React, { 
  forwardRef,
  type ReactNode,
  type HTMLProps 
} from 'react'

interface SectionProps extends HTMLProps<HTMLElement> {
  children: ReactNode;
} 

const Section = forwardRef(({ 
  className,
  children,
}: SectionProps, ref: any) => {
  return (
    <section 
      ref={ref} 
      className={`min-h-screen flex flex-col relative md:snap-center ${className}`}
      // style={{ 
      //   scrollSnapAlign: "center"
      // }}
    >
      {children}
    </section>
  );
});

export default Section;