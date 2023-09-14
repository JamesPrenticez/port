import React, { type SVGProps, type ReactElement } from 'react'

function Blob(props: SVGProps<SVGAElement>): ReactElement {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" className={props.className}>
      <defs> 
        <linearGradient id="myGradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
          <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path 
          fill="url(#myGradient)"
          transform="translate(50 50)"
          strokeWidth={0}
          style={{
            transition: "all 0.3s ease 0s"
          }}
          // d="M25.4,-27.6C33.3,-23.7,40.2,-16,42.2,-7.1C44.1,1.8,41.1,11.9,34.9,17.9C28.7,23.9,19.4,25.9,10.4,29.4C1.5,33,-7.2,38.3,-14.7,37C-22.1,35.7,-28.5,27.9,-33.4,19.3C-38.3,10.7,-41.9,1.3,-40.6,-7.3C-39.2,-15.9,-32.9,-23.8,-25.3,-27.8C-17.7,-31.8,-8.9,-32,0,-31.9C8.8,-31.9,17.5,-31.6,25.4,-27.6Z" 
          d="M32.2,-22.9C39.6,-16.3,42.3,-3,38.4,6.7C34.6,16.5,24.3,22.7,14,26.8C3.7,30.8,-6.5,32.7,-16.2,29.6C-26,26.5,-35.4,18.3,-39.1,7.4C-42.8,-3.5,-40.8,-17.2,-33.3,-23.8C-25.8,-30.4,-12.9,-30,-0.3,-29.8C12.3,-29.5,24.7,-29.5,32.2,-22.9Z"

        />
    </svg>
  )
}

export default Blob
