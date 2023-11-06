import useMediaQuery from '@hooks/useMediaQuery';
import React from 'react'

interface Props {
  text: string;
  color1?: string;
  color2?: string;
  fontSize?: string // Default size if not provided
}

function TextEffect({
  text = "Hello World",
  color1 = "#6b7280",
  color2 = "#f3f4f6",
  fontSize
}: Props) {

  const { isSm, isMd, isLg, isXl } = useMediaQuery();

  return (
    <div 
      className="relative text-4xl md:text-7xl font-extrabold whitespace-nowrap"
      style={{
        fontSize: isSm ? 46 : isMd ? 50 : isLg ? 24 : 24
      }}
    >
      <h1 
        className="absolute top-0 left-0 font-bold ml-[0.25rem] md:ml-[0.4rem]"
        style={{color: color1}}
      >
        {text}
      </h1>
      <h1 
        className="absolute font-bold" 
        style={{color: color2}}
      >
        {text}
      </h1>

      {/* Placeholder to achieve height */}
      <h1 className="invisible font-bold">
        {text}
      </h1>
    </div>
  )
}

export default TextEffect