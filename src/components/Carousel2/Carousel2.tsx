import React, { useEffect, useState } from 'react'

interface Props {
  images: string[];
}

function Carousel2({ images }: Props) {
  const [index, setIndex] = useState(0)
  const [isZoom, setIsZoom] = useState(false)
  const [isMouseEntered, setIsMouseEntered] = useState(false)
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [[x, y], setXY] = useState([0, 0]);

  //Reset index when image props change..
  useEffect(()=>{
    return () => {
      setIndex(0)
    }
  }, [images])


  const handleMouseEnter = (e) => {
    const ele = e.currentTarget;
    setIsMouseEntered(true)
    
    setTimeout(() => {
      const { width, height } = ele.getBoundingClientRect();
      setSize([width, height]);
    }, 500);  // 500ms delay
  }
  
  const handleMouseMove = (e) => {
    if(isMouseEntered){
      let ele = e.currentTarget
      let {top, left} = ele.getBoundingClientRect()
      let x = e.pageX - left - window.pageXOffset
      let y = e.pageY - top - window.pageYOffset
      setXY([x, y])
      setIsZoom(true)
    }
  }

  return (
    <div className="">
      <div className="flex justify-center overflow-hidden w-full">
        {/* Main Image */}
        <div
          className="relative aspect-[16/9] whitespace-nowrap transistion ease duration-1000 w-[1000px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => { setIsMouseEntered(false); setIsZoom(false) }}
          onMouseMove={handleMouseMove}
        >
          <img
            className='w-full h-full object-fill  border-gray-100 rounded-md'
            src={images[index]}
            alt={images[index]}
          />

          <MagnifyingGlass 
            x={x}
            y={y}
            isZoom={isZoom}
            image={images[index]}
            imgHeight={imgHeight}
            imgWidth={imgWidth}
          />
        </div>
      </div>

      {/* Small Images Below */}
      <div className="flex space-x-2 w-full my-2">
        {images?.map((image, index2) => (
          <div
            key={index2}
            onMouseEnter={() => setIndex(index2)}
            className={`w-[4rem] inline-block rounded-sm hover:cursor-pointer border-[0.01rem] ${
              index === index2 ? " border-red-500" : "border-gray-300"
            }`}
          >
          <img
            className='w-full h-full object-fill'
            src={image}
            alt={image}
            width={64}
            height={64}
          />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel2


function MagnifyingGlass({x, y, isZoom, image, imgHeight, imgWidth}){
  const zoomLevel = 2.5
  const magnifieWidth = 300 // imgWidth * zoomLevel
  const magnifierHeight = 200 // imgHeight * zoomLevel
  //console.log(x, y, isZoom, image, imgHeight, imgWidth)

  return(
    <div 
      className={`${isZoom ? "" : "hidden"} absolute pointer-events-none border`}
      style={{
        height: `${magnifierHeight}px`,
        width: `${magnifieWidth}px`,
        top: `${y - magnifierHeight / 2}px`,
        left: `${x - magnifieWidth / 2}px`,
        backgroundImage: `url('${image}')`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
        backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
      }}
    >
    </div>
  )
}

//Magnifyer from: https://dev.to/anxiny/create-an-image-magnifier-with-react-3fd7
//From: https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react