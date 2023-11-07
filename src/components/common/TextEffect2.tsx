import React from 'react'

interface Props {
  text: string;
  color1?: string;
  color2?: string;
  color3?: string;
  color4?: string;
  color5?: string;
  color6?: string;
  color7?: string;
}

function TextEffect2({
  text = "Hello World",
  color1 = '#fcedd8',
  color2 = '#eb452b',
  color3 = '#efa032',
  color4 = '#46b59b',
  color5 = '#017e7f',
  color6 = '#052939',
  color7 = '#c11a2b'
}: Props) {
  return (
    <div 
      className="text-7xl font-extrabold whitespace-nowrap"
      style={{
        color: color1,
        textShadow: `
        1px 3px 0px ${color2}, 
        5px 4px 0px ${color3}, 
        10px 5px 0px ${color4}, 
        15px 6px 0px ${color5}, 
        20px 7px 0px ${color6}, 
        25px 8px 0px ${color7}
        `
      }}
    >
      {text}
    </div>
  )
}

export default TextEffect2
