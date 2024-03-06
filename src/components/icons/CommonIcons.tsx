import { type SVGProps, type ReactElement } from "react"

export const CrossIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export const ArrowBackIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
  )
}

// more spinners here: https://codepen.io/danvim/pen/XWxNGOx
export const Spinner = (props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <circle cx="50" cy="50" r="35" fill="none" stroke="#002bfe" stroke-width="7" stroke-dasharray="200" stroke-dashoffset="120" transform="rotate(-90 ) translate(-100 0)" stroke-linecap="round">
      <animateTransform 
        type="rotate"
        attributeName="transform"
        values="0 50 50; 360 50 50"
        repeatCount="indefinite"
        dur="1s"
        calcMode="spline"
        keyTimes="0;1"
        keySplines="0.9 0.5 0.6 0.5"
      />
      </circle>
    </svg>
  )
}