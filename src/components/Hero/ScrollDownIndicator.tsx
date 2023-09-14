import React, { type SVGProps, type ReactElement } from 'react'

function ScrollDownIndicator(props: SVGProps<SVGAElement>): ReactElement {
  return (
    <div className='flex items-center justify-center h-16 w-16 border-2 border-gray-400 rounded-full'>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="white"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className={`w-8 h-8 text-gray-300 animate-bouncer ${props.className}`}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path 
          d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" 
        />
      </svg>
    </div>
  )
}

export default ScrollDownIndicator
