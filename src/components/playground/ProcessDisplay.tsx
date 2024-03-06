// @ts-nocheck

import { Button } from '@components/common/Button';
import React, { useEffect, useRef } from 'react';

const data = [
  {id: "1", icon: "", title: "Launch1", subTitle: "30 minute launch call", description: "The offical launch of the series, with a  theme announcement, ecent foals and forma, and a focux on acquiring participants."},
  {id: "2", icon: "", title: "Launch2", subTitle: "30 minute launch call", description: "The offical launch of the series, with a  theme announcement, ecent foals and forma, and a focux on acquiring participants."},
  {id: "3", icon: "", title: "Launch3", subTitle: "30 minute launch call", description: "The offical launch of the series, with a  theme announcement, ecent foals and forma, and a focux on acquiring participants."},
  {id: "4", icon: "", title: "Launch4", subTitle: "30 minute launch call", description: "The offical launch of the series, with a  theme announcement, ecent foals and forma, and a focux on acquiring participants."},
  {id: "5", icon: "", title: "Launch5", subTitle: "30 minute launch call", description: "The offical launch of the series, with a  theme announcement, ecent foals and forma, and a focux on acquiring participants."},
  {id: "6", icon: "", title: "Launch6", subTitle: "30 minute launch call", description: "The offical launch of the series, with a  theme announcement, ecent foals and forma, and a focux on acquiring participants."},
  {id: "7", icon: "", title: "Launch7", subTitle: "30 minute launch call", description: "The offical launch of the series, with a  theme announcement, ecent foals and forma, and a focux on acquiring participants."},
  {id: "8", icon: "", title: "Launch8", subTitle: "30 minute launch call", description: "The offical launch of the series, with a  theme announcement, ecent foals and forma, and a focux on acquiring participants."}
]


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

    .dot:focus-visible {
      border: solid cyan 5px;
      outline: none;
    }

    .dotCard {
      height: 300px;
      width: 300px;
      background: gray;
      color: white;
      position: absolute;
      display: none;
      border-radius: 8px;
    }

    .dotCard-triangle {
      position: absolute;
      fill: hotpink;
    }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  const addDots = (data) => {
    const svg = svgRef.current;
    const path = svg.querySelector('path');
    const pathLength = path.getTotalLength();
  
    const dotSpacing = pathLength / (data.length + 1);
  
    data.forEach((dotData, index) => {
      const position = path.getPointAtLength((index + 1) * dotSpacing);

      const dot = createDot({
        index: index,
        dotData: dotData,
        position: position, 
        onMouseEnter: () => handleDotEnter(dotData, position),
        onMouseLeave: () => handleDotLeave(dotData),
        onFocus: () => handleDotEnter(dotData, position),
        onBlur: () => handleDotLeave(dotData),
      });
  
      svg.parentNode.appendChild(dot);
    });
  };

  function createDot({ dotData, position, onMouseEnter, onMouseLeave, onFocus, onBlur }) {
    const dot = document.createElement('div');
    dot.style.position = 'absolute';
    dot.style.left = `${position.x - 20}px`;
    dot.style.top = `${position.y + 30}px`;
    dot.style.width = '40px';
    dot.style.height = '40px';
    dot.style.backgroundColor = 'red';
    dot.style.borderRadius = '9999px';
    
    dot.style.color = "white"
    dot.style.textAlign = "center"

    dot.setAttribute('tabIndex', '0');
    dot.setAttribute('id', dotData.id);
    
    dot.innerText = dotData.id;
    dot.classList.add('dot');
  
    dot.addEventListener('mouseenter', () => onMouseEnter(dotData, position));
    dot.addEventListener('mouseleave', () => onMouseLeave(dotData));
    dot.addEventListener('focus', () => onFocus(dotData, position));
    dot.addEventListener('blur', () => onBlur());
  
    return dot;
  }

  const handleDotEnter = (dotData, dotPosition) => {
    const card = document.getElementsByClassName('dotCard')[0];

    card.style.display = "block";
    card.innerHTML = `${dotData.title  }`;
  
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
  
    // Calculate the maximum allowable positions
    // const divRect = svgRef.current.parentNode.getBoundingClientRect(); // alternative way to get wrapping div width
    const maxX = svgRef.current.parentNode.offsetWidth;

        // Calculate the adjusted positions
    let adjustedLeft = dotPosition.x - cardWidth / 2;
    let adjustedTop = dotPosition.y - cardHeight - 20;
    
    // Ensure the card stays within the boundaries
    adjustedLeft = Math.min(Math.max(adjustedLeft, 0), maxX);

    if(adjustedLeft + (cardWidth) >= maxX){
      adjustedLeft = maxX - cardWidth
    } 
  
    card.style.top = `${adjustedTop}px`;
    card.style.left = `${adjustedLeft}px`;

    // ===
    const cardTriangle = document.getElementsByClassName('dotCard-triangle')[0];
    cardTriangle.style.display = "block";
    const triangleWidth = cardTriangle.offsetWidth;
    const triangleHeight = card.offsetHeight;
    let adjustedTriangleTop = dotPosition.y;
    let adjustedTriangleLeft = dotPosition.x;
    cardTriangle.style.top = `${adjustedTriangleTop - 22}px`;
    cardTriangle.style.left = `${adjustedTriangleLeft - 12}px`;

    //==
    card.innerHTML = `${dotData.title}\nmaxX: ${maxX}\nadjustedLeft: ${adjustedLeft + (cardWidth)}`;

  };
  

  const handleDotLeave = (dotData) => {
    // You can perform additional actions when leaving a dot, if needed
    const dot = document.getElementById(dotData.id)
    dot.blur()

    const card = document.getElementsByClassName('dotCard')[0]
    card.style.display = "none"
    
    const cardTriangle = document.getElementsByClassName('dotCard-triangle')[0];
    cardTriangle.style.display = "none"
  };


  return (
    <div>
      <Button onClick={() => { addDots(data); }}>add </Button>
      {/* <Button onClick={() => { addDots(3); }}>3</Button>
      <Button onClick={() => { addDots(5); }}>5</Button>
      <Button onClick={() => { addDots(8); }}>8</Button> */}

      <div className='flex items-center justify-center w-full p-4'>
        <div className="border-[0px] border-green-600 " style={{ position: 'relative' }}>



          <svg width="1000px" height="200" className='border border-red-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" ref={svgRef}>
            <path fill="none" stroke="#0529d6" strokeWidth="10" d="M0 0 Q500 200 1000 0" />
          </svg>

          <div className='dotCard'>
          </div>
          <svg className="dotCard-triangle" width="24px" height="24px" viewBox="0 0 60.666 55.214" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M275.649,287.65,255.41,322.7a9.58,9.58,0,0,0,8.3,14.37h40.478a9.58,9.58,0,0,0,8.3-14.37L292.241,287.65A9.579,9.579,0,0,0,275.649,287.65Z"
              transform="translate(161 -380) rotate(60)" // dont ask
            />
          </svg>
          {/* <div className='absolute top-0 left-[1000px] h-32 w-32 bg-red-500' /> */}
        </div>
      </div>
    </div>
  );
}

export default ProcessDisplay;

