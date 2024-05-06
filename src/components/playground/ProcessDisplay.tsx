// @ts-nocheck
import React, { useEffect } from 'react'
import { rocket, processBg } from '../../assets/playgroundProjects';
import { Button } from '@components/common/Button';

const data = [
  {id: "1", img: rocket, heading: "Launch1", subHeading: "30 minute launch call", description: "The offical launch of the series,  announcement, ecent foals and forma, and a focux on acquiring participants."},
  {id: "2", img: rocket, heading: "Launch2", subHeading: "30 minute launch call", description: "The offical launch of the series,  announcement, ecent foals and forma, and a focux on acquiring participants."},
  {id: "3", img: rocket, heading: "Launch3", subHeading: "30 minute launch call", description: "The offical launch of the series,  announcement, ecent foals and forma, and a focux on acquiring participants."},
  {id: "4", img: rocket, heading: "Launch4", subHeading: "30 minute launch call", description: "The offical launch of the series,  announcement, ecent foals and forma, and a focux on acquiring participants."},
  {id: "5", img: rocket, heading: "Launch5", subHeading: "30 minute launch call", description: "The offical launch of the series,  announcement, ecent foals and forma, and a focux on acquiring participants."},
  {id: "6", img: rocket, heading: "Launch6", subHeading: "30 minute launch call", description: "The offical launch of the series,  announcement, ecent foals and forma, and a focux on acquiring participants."},
  {id: "7", img: rocket, heading: "Launch7", subHeading: "30 minute launch call", description: "The offical launch of the series,  announcement, ecent foals and forma, and a focux on acquiring participants."},
  {id: "8", img: rocket, heading: "Launch8", subHeading: "30 minute launch call", description: "The offical launch of the series,  announcement, ecent foals and forma, and a focux on acquiring participants."}
]

const ProcessDisplay = () => {

  const sizes = {
    desktop: [
      { dataLength: 8, circleSize: 3600, circleOffset: { top: "-120%", left: "50%" }, angle: { start: 0.60, end: 0.20 }},
      { dataLength: 7, circleSize: 3600, circleOffset: { top: "-120%", left: "50%" }, angle: { start: 0.57, end: 0.14 }},
      { dataLength: 6, circleSize: 3600, circleOffset: { top: "-120%", left: "50%" }, angle: { start: 0.57, end: 0.14 }},
      { dataLength: 5, circleSize: 3600, circleOffset: { top: "-120%", left: "50%" }, angle: { start: 0.57, end: 0.14 }},
      { dataLength: 4, circleSize: 3600, circleOffset: { top: "-120%", left: "50%" }, angle: { start: 0.55, end: 0.10 }},
      { dataLength: 3, circleSize: 3600, circleOffset: { top: "-120%", left: "50%" }, angle: { start: 0.55, end: 0.10 }},
      { dataLength: 2, circleSize: 3600, circleOffset: { top: "-120%", left: "50%" }, angle: { start: 0.55, end: 0.10 }},
    ]
  }

  const dataLength = data.length
  // probably need a function to return "desktop" | "tablet" | "mobile"
  const chosenValues = sizes["desktop"].find(item => item.dataLength === dataLength)

  const circleSize = chosenValues.circleSize
  const circleOffset = chosenValues.circleOffset 
  const angleStart = chosenValues.angle.start
  const angleEnd = chosenValues.angle.end

  const cardSize = {w: 300, h: 300}
  const triangleSize = { w: 30, h: 30 }

  let activeId = null
  let originalPositions = new Map();

  useEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `

    .process-display-container{
      height: 720px;
      position: relative;
      background: linear-gradient(97.57deg, #000A14 0%, #00167F 100%);
      min-height: 100vh;
      overflow: hidden;
      // background-image: url(${processBg});
      // background-size: cover;
    }

    .process-display-circle{
      position: absolute;
      top: calc(${circleOffset.top} - ${circleSize / 2}px);
      left: calc(${circleOffset.left} - ${circleSize / 2}px);
      width: ${circleSize}px;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      border: 2px solid #002BFE;
      transition: left .5s ease-in-out;
    }

    .dotOutter{
      position: absolute;
      width: 50px;
      height: 50px;
      margin-left: -25px;
      margin-top: -25px;
      top: 50%;
      left: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(330.01deg, #002BFE 10.78%, #4ADEFF 72.04%, #FFFFFF 89.22%);
      padding: 2px;
      border-radius: 50%;
      cursor: pointer;
    }

    .dotOutter:focus-visible {
      box-shadow: 0px 0px 8px 4px rgba(255,255,255,0.75);
      outline: none;
    }

    .dotInner {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(180deg, #01DBE5 3.24%, #002BFE 69.6%);
      border-radius: 100%;
      pointer-events: none;
    }

    .dotCenter {
      width: 50%;
      height: 50%;
      background: #fff;
      color: #002BFE;
      border-radius: 100%;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
      pointer-events: none;
      transition: width .5s ease-in-out, height .5s ease-in-out;
    }

    .active {
      background: #fff;
      width: 95%;
      height: 95%;
    }

    .process-display-card-container{
      opacity: 0;
      top: 50%;
      left: 50%;
      width: ${cardSize.w}px;
      height: ${cardSize.h}px;
      padding: 32px;
      background: white;
      position: absolute;
      border-radius: 8px;
      flex-direction: column;
      gap: 4px;
      // transition: opacity .5s ease-in-out;
      z-index: 50;
    }

    .process-display-card-image{
      width: 120px;
    }

    .process-display-card-heading{
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: -0.5px;
      text-align: left;
    }

    .process-display-card-subHeading{
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: -0.20000000298023224px;
      text-align: left;
    }

    .process-display-card-description{
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: -0.20000000298023224px;
      text-align: left;
    }

    .process-display-card-triangle{
      display: block;
      top: 50%;
      left: 50%;
      position: absolute;
      fill: white;
      opacity: 0;
      // transition: opacity 0.5s ease-in-out;
    }

    .process-display-heading{
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 48px;
      font-weight: 400;
      line-height: 64px;
      letter-spacing: -0.5px;
      text-align: center;
    }

    .chevron {
      unset: all; // remove default button css
      background: transparent;
      padding: 16px 4px;
      border-radius: 4px 0 0 4px;
      cursor: pointer;
      transition: background .1s ease-in-out;
      z-index: 51;
    }

    .chevron:hover{
      background: #FFFFFF4D;
    }

    .chevron-right {
      position: absolute;
      top: 50%;
      right: 0;
    }
    
    .chevron-left {
      position: absolute;
      top: 50%;
      left: 0;
      transform: rotate(180deg);
    }

    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  function createDots() {
    const circle = document.body.querySelector('.process-display-circle');
    const items = data;
    const bb = circle.getBoundingClientRect();
    const radius = bb.width / 2;

    const angleStep = Math.PI / (dataLength - 1) * angleEnd;
    const startAngle = angleStart * Math.PI;

    items.forEach((item, index) => {
      const angleItem = angleStep * index;

      const position = {
        x: radius * Math.cos(startAngle - angleItem),
        y: radius * Math.sin(startAngle - angleItem)
      }

      originalPositions.set(item.id, position);
      console.log(position)

      const dot = createDot({
        item,
        onMouseEnter: () => setActiveId(item.id),
        onMouseLeave: () => setActiveId(null),
        onFocus: () => setActiveId(item.id),
        onBlur: () => setActiveId(null)
      })

      const card = createCard(item)
      const triangle = createTriangle(item.id)

      circle.appendChild(dot);
      circle.appendChild(card);
      circle.appendChild(triangle);

    });
  };

  useEffect(() => {
    createDots();
    handleSwipe(
      document.body.querySelector('.process-display-circle'),
      onSwipeLeft,
      onSwipeRight
    );
  }, [])
 
  return (
      <div className="process-display-container">

        <button 
          className='chevron chevron-left'
          onClick={() => { 
            decrementActiveId();
            moveIntoView(activeId);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
        <button 
          className='chevron chevron-right'
          onClick={() => { 
            incrementActiveId();
            moveIntoView(activeId);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>

        <h1 className="process-display-heading">Process Display</h1>
        <div className="process-display-circle" />

      </div>
  )

  function setActiveId(dotId){
    activeId = dotId
    updateActiveItem();
    repositionCard(dotId);
  }

  function incrementActiveId() {
    activeId = activeId >= dataLength ? 1 : activeId + 1;
    updateActiveItem();
  }
  
  function decrementActiveId() {
    activeId = activeId <= 1 ? dataLength : activeId - 1;
    updateActiveItem();
  }

  function updateActiveItem() {

    // Remove from everything
    for (let i = 1; i <= dataLength; i++) {
      document.getElementById(`card-${i}`).style.opacity = 0;
      document.getElementById(`triangle-${i}`).style.opacity = 0;
      document.getElementById(`item-${i}`).querySelector('.dotCenter').classList.remove('active');
    }

    if(activeId === null) return;
    
    // Show active id
    document.getElementById(`card-${activeId}`).style.opacity = 1;
    document.getElementById(`triangle-${activeId}`).style.opacity = 1;
    document.getElementById(`item-${activeId}`).querySelector('.dotCenter').classList.add('active');
    
  }

  function createDot({ item, onMouseEnter, onMouseLeave, onFocus, onBlur}){
    const dotOutter = document.createElement('div');
    const dotInner = document.createElement('div');
    const dotCenter = document.createElement('div');
  
    dotOutter.appendChild(dotInner)
    dotOutter.appendChild(dotInner)
    dotInner.appendChild(dotCenter)
    
    dotOutter.setAttribute('id', `item-${item.id}`);
    dotOutter.setAttribute('tabIndex', '0');
    dotOutter.className = "dotOutter"
    dotInner.className = "dotInner"
    dotCenter.className = "dotCenter"
    
    const originalPosition = originalPositions.get(`${item.id}`);
    dotOutter.style.transform = `translate(${originalPosition.x}px, ${originalPosition.y}px)`;

    dotCenter.textContent = item.id
  
    dotOutter.addEventListener('mouseenter', () => onMouseEnter(item));
    dotOutter.addEventListener('mouseleave', () => onMouseLeave(item));
    dotOutter.addEventListener('focus', () => onFocus(item));
    dotOutter.addEventListener('blur', () => onBlur(item));
    
    return dotOutter;
  }
  
  function createCard(item){
    const cardContainer = document.createElement('div');
    const cardImage = document.createElement('img');
    const cardHeading = document.createElement('h1');
    const cardSubHeading = document.createElement('h2');
    const cardDescription = document.createElement('p');
  
    cardContainer.appendChild(cardImage)
    cardContainer.appendChild(cardHeading)
    cardContainer.appendChild(cardSubHeading)
    cardContainer.appendChild(cardDescription)
    
    cardContainer.setAttribute('id', `card-${item.id}`);
  
    cardContainer.className = 'process-display-card-container';
    cardImage.className = 'process-display-card-image';
    cardHeading.className = 'process-display-card-heading';
    cardSubHeading.className = 'process-display-card-subHeading';
    cardDescription.className = 'process-display-card-description';
  
    cardImage.setAttribute('src', item.img);
    cardHeading.textContent = `${item.heading}`
    cardHeading.textContent = `${item.subHeading}`
    cardDescription.textContent = `${item.description}`

    // Offset Card Position
    const originalPosition = originalPositions.get(`${item.id}`);
    let adjustedLeft = originalPosition.x - cardSize.w / 2;
    let adjustedTop = originalPosition.y -  cardSize.h + -60;

    // Finally place the card in the correct location
    cardContainer.style.transform = `translate(${adjustedLeft}px, ${adjustedTop}px)`;
  
    return cardContainer;
  }

  function createTriangle(cardId){

    // Programatically create this tirangle SVG
    // <svg className="process-display-card-triangle" width="24px" height="24px" viewBox="0 0 60.666 55.214" xmlns="http://www.w3.org/2000/svg">
    //   <path 
    //     d="M275.649,287.65,255.41,322.7a9.58,9.58,0,0,0,8.3,14.37h40.478a9.58,9.58,0,0,0,8.3-14.37L292.241,287.65A9.579,9.579,0,0,0,275.649,287.65Z"
    //     transform="translate(161 -380) rotate(60)"
    //   />
    // </svg>

    const triangle = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    triangle.setAttribute("class", "process-display-card-triangle");
    triangle.setAttribute("width", `${triangleSize.w}`);
    triangle.setAttribute("height", `${triangleSize.h}`);
    triangle.setAttribute("viewBox", "0 0 60.666 55.214");
  
    // Create a path element and set its attributes
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M275.649,287.65,255.41,322.7a9.58,9.58,0,0,0,8.3,14.37h40.478a9.58,9.58,0,0,0,8.3-14.37L292.241,287.65A9.579,9.579,0,0,0,275.649,287.65Z");
    path.setAttribute("transform", "translate(161 -380) rotate(60)");

    triangle.appendChild(path);
    triangle.setAttribute('id', `triangle-${cardId}`);

    const originalPosition = originalPositions.get(`${cardId}`);
    let adjustedLeft = originalPosition.x - triangleSize.w / 2;
    let adjustedTop = originalPosition.y - triangleSize.h + (-70 + triangleSize.h) ;

    // Finally place the card in the correct location
    triangle.style.transform = `translate(${adjustedLeft}px, ${adjustedTop}px)`;

    return triangle;
  }

  function repositionCard(activeId){
    if(activeId === null) return;

    const originalPosition = originalPositions.get(`${activeId}`);    
    const adjustedLeft = originalPosition.x - cardSize.w / 2;
    const adjustedTop = originalPosition.y -  cardSize.h + -60;
    
    const leftValue = document.getElementById(`card-${activeId}`).getBoundingClientRect().left
    const centerPointOfViewPort = getCenterPointOfViewPort();

    // Calculate the difference between leftValue and centerPoint
    const diffX = -centerPointOfViewPort.x + leftValue;

    const circle = document.querySelector('.process-display-circle');
    const cardContainer = document.getElementById(`card-${activeId}`)
    const orgionalCircleOffet = circleSize / 2 // always half circleSize 1800
    const currentCircleOffset = parseFloat(window.getComputedStyle(circle).left) || 0;
    const circleOffsetDiff = -orgionalCircleOffet - currentCircleOffset
    const magicValue = -centerPointOfViewPort.x + -circleOffsetDiff

    // Left edge
    if(diffX <= -centerPointOfViewPort.x){
      cardContainer.style.transform = `translate(${-centerPointOfViewPort.x + -magicValue}px, ${adjustedTop}px)`;
      return;
    } 
    
    // Right
    if (diffX + cardSize.w >= centerPointOfViewPort.x) {
      cardContainer.style.transform = `translate(${centerPointOfViewPort.x - magicValue - cardSize.w}px, ${adjustedTop}px)`;
      return;
    }

    // Check if repositioning the card will put it outside the viewport... if so ... do nothing. (bug fix - only happens on the left)
    if(diffX - cardSize.w <= -centerPointOfViewPort.x) return;
    
    // Reposition card in orgional location
    cardContainer.style.transform = `translate(${adjustedLeft}px, ${adjustedTop}px)`;
  }
  
  function moveIntoView(activeDotId){
    const activeDot = document.getElementById(`item-${activeDotId}`);
    const activeCard = document.getElementById(`card-${activeDotId}`);
    const circle = document.querySelector('.process-display-circle');
  
    const centerPointOfViewPort = getCenterPointOfViewPort();
    const activeDotLocation = getDotLocation(activeDot);
    
    // Calculate the difference between activeDot and centerPoint
    const diffX = centerPointOfViewPort.x - activeDotLocation.left;
  
    // Get the current circleOffset
    const currentCircleOffset = parseFloat(window.getComputedStyle(circle).left) || 0;
  
    // Update circle.left to align the X axis of the centerPoint and the activeDot
    circle.style.left = `${currentCircleOffset + diffX}px`;

    // Ensure card is centered
    const originalPosition = originalPositions.get(`${activeDotId}`);
    let adjustedLeft = originalPosition.x - cardSize.w / 2;
    let adjustedTop = originalPosition.y -  cardSize.h + -60;
    activeCard.style.transform = `translate(${adjustedLeft}px, ${adjustedTop}px)`;
  }
  
  function getDotLocation(dotElement){
    const dotRect = dotElement.getBoundingClientRect();
    return { top: dotRect.top, left: dotRect.left };
  };
  
  function getCenterPointOfViewPort(){
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  
    const centerX = screenWidth / 2;
    const centerY = screenHeight / 2;
  
    return { x: centerX, y: centerY };
  };

  function handleSwipe(element, onSwipeLeft, onSwipeRight, threshold = 50) {
    let startX;

    element.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
    });

    element.addEventListener('touchmove', function (e) {
        if (!startX) return;

        let currentX = e.touches[0].clientX;
        let deltaX = currentX - startX;

        if (Math.abs(deltaX) > threshold) {
            if (deltaX > 0) {
                if (onSwipeRight) onSwipeRight();
            } else {
                if (onSwipeLeft) onSwipeLeft();
            }

            // Optional: Reset startX to prevent continuous firing of events
            startX = null;
        }
    });
  }

  function onSwipeLeft(){
    incrementActiveId();
    moveIntoView(activeId);
  }
  
  function onSwipeRight(){
    decrementActiveId();
    moveIntoView(activeId);
  }
}

export default ProcessDisplay;
