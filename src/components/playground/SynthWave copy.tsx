import React from 'react'

const SynthWave = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow:"hidden",
        color: "white",
        position: "relative",
        width: "100%",
        height: "100%",
        // background: 'repeating-linear-gradient(to top, rgba(255, 255, 255, 0.03) 0px 2px, transparent 2px 4px), linear-gradient(to bottom, #200933 75%, #3d0b43)',
        background: ' linear-gradient(to bottom, #200933 75%, #3d0b43)',
    }}>
      <div style={{
        // display: "flex",
        // alignItems: "center",
        // justifyContent:"center",
        // width: "250px",
        // height: "250px",
        // background: "goldenrod",
        // borderRadius: "9999px",
        // zIndex: "49",
      }}>
        SynthWave
      </div>
      <div />
      <div
    style={{
      height: "70%",
      width: "100%",
      // backgroundImage: 'linear-gradient(90deg, rgba(252,25,154,.1) 1px, rgba(0,0,0,0) 1px), linear-gradient(0deg, rgba(252,25,154,.1) 1px, rgba(0,0,0,0) 1px)',
      backgroundImage: 'linear-gradient(90deg, rgba(252,25,154,0.1) 1px, rgba(0,0,0,0) 1px), linear-gradient(0deg, rgba(252,25,154,0.1) 1px, rgba(0,0,0,0) 1px)',
      backgroundPosition: "bottom",
      backgroundRepeat: "repeat",
      backgroundSize: "20px 10px",
      left: "0",
      right: "0",
      position: "absolute",
      bottom: "0",
      transform: "perspective(200px) rotateX(60deg)",
      zIndex: "50",
      backfaceVisibility: "hidden",
      // border: "solid white 5px"
    }}
  >
          <div style={{
        width: "300%",
        marginLeft: "-100%",
        height: "10px",
        background: "rgba(252,25,154)",
        boxShadow: "0 -50px 1000px 100px rgba(252, 25, 154)" 
      }} />
  </div>
    </div>
  )
}

export default SynthWave;