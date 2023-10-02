import React from 'react'

interface Props {
  text: string;
  color1?: string;
  color2?: string;
}

function TextEffect2({
  text = "Hello World",
}: Props) {
  return (
    <div 
      className="text-7xl font-extrabold whitespace-nowrap"
      style={{
        color: '#fcedd8',
        textShadow: `
        1px 3px 0px #eb452b, 
        5px 4px 0px #efa032, 
        10px 5px 0px #46b59b, 
        15px 6px 0px #017e7f, 
        20px 7px 0px #052939, 
        25px 8px 0px #c11a2b
        `
      }}
    >
      {text}
    </div>
  )
}

export default TextEffect2
