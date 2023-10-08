import React, { useEffect, type ReactElement } from 'react';
import { type ISkills } from 'models';

interface CarouselProps {
  items: ISkills[];
  direction: 'left' | 'right';
}

//https://www.youtube.com/watch?v=nAjR0Oj0J8E

function HorizontalScroller ({ items, direction }): ReactElement {

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes slideRight {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(0);
        }
      }
      @keyframes slideLeft {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-100%);
        }
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);


  const LogoSlide = ({ items, direction }) => (
    <div
      className="inline-block"
      style={{
        animation: direction === 'left' ?  "slideLeft 30s linear infinite" : "slideRight 30s linear infinite"
      }}
    
    >
      {items.map((skill) => (
        <div 
          key={skill.id}
          className='inline-block h-24 w-24 p-2 mx-8 //bg-blue-50 //border-2'
        >
          {skill.icon}
        </div>
      ))} 
    </div>
  );

  const firstSlide = <LogoSlide items={items} direction={direction} />;
  const secondSlide = React.cloneElement(firstSlide);


  return (
    <div id="logos"
      className="
        relative
        overflow-x-hidden
        bg-gray-50/80 
        py-2
        whitespace-nowrap
        //[&>div]:hover:pause-animation
        before:absolute
        before:top-0
        before:left-0
        before:w-[100px]
        before:h-[100%]
        before:z-20
        before:bg-gradient-to-r bg-gray-50/80 to-[rgba(249, 250, 251, 0)] 
        before:content-['']
        after:absolute
        after:top-0
        after:right-0
        after:w-[100px]
        after:h-[100%]
        after:z-20
        after:bg-gradient-to-l from-white to-[rgba(255, 255, 255, 0)] 
        after:content-['']
      ">

      {firstSlide}
      {secondSlide}
    </div>
  );
};

export default HorizontalScroller;
