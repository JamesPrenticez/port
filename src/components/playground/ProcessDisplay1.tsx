// // @ts-nocheck

// import { Button } from '@components/common/Button';
// import React, { useEffect, useRef } from 'react'

// const ProcessDisplay = () => {
//   const svgRef = useRef(null);

//   const addDots = (numDots) => {
//     const svg = svgRef.current;
//     const path = svg.querySelector('path');
//     const pathLength = path.getTotalLength();

//     const dotSpacing = pathLength / (numDots + 1); // Adjusted the spacing calculation

//     for (let i = 1; i <= numDots; i++) {
//       const point = path.getPointAtLength(i * dotSpacing);

//       const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
//       circle.setAttribute('cx', point.x);
//       circle.setAttribute('cy', point.y);
//       circle.setAttribute('r', 20); // Adjust the radius of the dots as needed
//       circle.setAttribute('fill', 'red'); // Change the color of the dots as needed
//       circle.setAttribute('class', 'dot'); // Add a class for styling purposes

//       svg.appendChild(circle);
//     }
//   };


//   return (

//     <div>
//     <Button onClick={() => { addDots(2);}}>2</Button>
//     <Button onClick={() => { addDots(3);}}>3</Button>
//     <Button onClick={() => { addDots(5);}}>5</Button>
//     <Button onClick={() => { addDots(8);}}>8</Button>

//     <div className='flex items-center justify-center w-full p-4'>
//     <svg width="1000px" height="200" className='border border-red-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" ref={svgRef}>
//       <path fill="none" stroke="#0529d6" strokeWidth="10" d="M0 0 Q500 200 1000 0" />
//     </svg>
//     </div>
//     </div>
//   )
// }

// export default ProcessDisplay


//===

    {/* <svg ref={svgRef} width="100%" viewBox="0 0 1060 182" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path fill="#0529d6" opacity="1.00" d=" M 0.00 16.73 C 85.43 69.01 178.80 108.26 275.81 133.16 C 469.38 182.89 677.59 174.41 866.26 108.28 C 933.84 84.69 998.94 53.95 1060.00 16.61 L 1060.00 18.79 C 922.47 102.69 764.65 153.01 603.92 164.22 C 517.14 170.55 429.56 165.72 343.97 150.04 C 222.61 127.75 105.32 83.19 0.00 18.88 L 0.00 16.73 Z" />
    </svg> */}

    {/* <svg width="100%" height="200" xmlns="http://www.w3.org/2000/svg" ref={svgRef}>
      <path fill="none" stroke="#0529d6" strokeWidth="2" d="M50 100 Q500 180 950 100" />
    </svg> */}

// 34mins