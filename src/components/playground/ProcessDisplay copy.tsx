// @ts-nocheck

import { Button } from '@components/common/Button';
import React, { useEffect, useRef } from 'react';

const ProcessDisplay = () => {
  const svgRef = useRef(null);

  // We need to inject the css like this to keep eveything in one file
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
    .dot {
      background: green !important;
    }
    
    .dot:hover {
      cursor: pointer;
      border: solid red 5px;
    }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  

  const addDots = (numDots) => {
    const svg = svgRef.current;
    const path = svg.querySelector('path');
    const pathLength = path.getTotalLength();

    const dotSpacing = pathLength / (numDots + 1); // Adjusted the spacing calculation

    for (let i = 1; i <= numDots; i++) {
      const point = path.getPointAtLength(i * dotSpacing);

      const dot = document.createElement('div');
      dot.style.position = 'absolute';
      dot.style.left = `${point.x - 20}px`; // Adjusted the left position to center the dot
      dot.style.top = `${point.y + 30}px`; // Adjusted the top position to center the dot
      dot.style.width = '40px'; // Adjust the width of the dots as needed
      dot.style.height = '40px'; // Adjust the height of the dots as needed
      dot.style.backgroundColor = 'red'; // Change the background color of the dots as needed
      dot.style.borderRadius = '9999px';
      dot.classList.add('dot'); // Add a class for styling purposes

      svg.parentNode.appendChild(dot);
    }
  };

  function createDot({ number, position, onMouseEnter, onMouseLeave }) {
    const dot = document.createElement('div');
    dot.style.position = 'absolute';
    dot.style.left = `${position.x - 20}px`;
    dot.style.top = `${position.y + 30}px`;
    dot.style.width = '40px';
    dot.style.height = '40px';
    dot.style.backgroundColor = 'red';
    dot.style.borderRadius = '9999px';
    dot.innerText = number;
    dot.classList.add('dot');
  
    dot.addEventListener('mouseenter', () => onMouseEnter(number));
    dot.addEventListener('mouseleave', onMouseLeave);
  
    return dot;
  }

  const handleDotEnter = (number) => {
    console.log(`Hovered on dot ${number}`);
    // You can perform additional actions when hovering over a dot, if needed
  };

  const handleDotLeave = () => {
    // You can perform additional actions when leaving a dot, if needed
  };


  return (
    <div>
      <Button onClick={() => { addDots(2); }}>2</Button>
      <Button onClick={() => { addDots(3); }}>3</Button>
      <Button onClick={() => { addDots(5); }}>5</Button>
      <Button onClick={() => { addDots(8); }}>8</Button>

      <div className='flex items-center justify-center w-full p-4'>
        <div style={{ position: 'relative' }}>
          <svg width="1000px" height="200" className='border border-red-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" ref={svgRef}>
            <path fill="none" stroke="#0529d6" strokeWidth="10" d="M0 0 Q500 200 1000 0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ProcessDisplay;

