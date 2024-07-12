import React, {Fragment, useEffect} from 'react'
import ProcessDisplay from "./process-display"; // Import the Test class from test.js
// import { animals } from '@data/animals';
import { data } from '@data/animals';
import './process-display.less'

const ProcessDisplayPage = () => {

  useEffect(() => {
    const containers = document.querySelectorAll('.process-display-container');
    const container = containers[0]
    new ProcessDisplay(container)
  }, []); 
  
  return (
    <div className="process-display-container" data-default-background-image="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoiZGF0YWNvbVwvZmlsZVwvUVI4cGc3eDIzWEUzcHk0RFN4NDYuYWkifQ:datacom:uYv_1JaBnm4RFUbdfn3Z8oFgpvDjpDqHhB5sCgdyias?width=2400">

    {/* Overlay */}
    <div className="process-display-container-overlay"></div>

    {/* Heading  */}
    <h1 className="process-display-heading">
      Dot Slider
    </h1>

   {/* Main Cicle / Loop/Map function */}
    <div className="process-display-circle">
      
      {data.map((item, index) => (
        <div key={`dots${index}`} className="process-display-dot-outter" tabIndex={0}>
          <div className="process-display-dot-inner">
            <div className="process-display-dot-center">
              {item.id}
            </div>
          </div>
        </div>
      ))}

      {data.map((item, index) => (
        <div 
          key={`card${item.id}`}
          className="process-display-card-container"
          data-process-point-background-image={item.img}
        >
          <div className="process-display-card-image-container">
            <img 
              className="process-display-card-image"
              src={item.icon}
              alt={`card-${item.id}`}
            />
          </div>
          <h1 className="process-display-card-heading">{item.title}</h1>
          <h2 className="process-display-card-subHeading">{item.subTitle}</h2>
          <p className="process-display-card-description">{item.desc}</p>
        </div> 
      ))}

      {data.map((item, index) => (
        <svg key={`triangles${item.id}`} className="process-display-card-triangle" viewBox="0 0 60.666 55.214" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M275.649,287.65,255.41,322.7a9.58,9.58,0,0,0,8.3,14.37h40.478a9.58,9.58,0,0,0,8.3-14.37L292.241,287.65A9.579,9.579,0,0,0,275.649,287.65Z"
            transform="translate(161 -380) rotate(60)"
          />
        </svg>
      ))}

    </div>

    {/* Chevrons Left/Right */}
    <button className="process-display-chevron process-display-chevron-left">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
        <path d="m9 18 6-6-6-6"/>
      </svg>
    </button>
    <button className='process-display-chevron process-display-chevron-right'>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
        <path d="m9 18 6-6-6-6"/>
      </svg>
    </button>

    {/* Sliders */}
    <div className="process-display-slider">
      <div className="process-display-slider-wrapper">
        <input className="process-display-slider-1 process-display-slider" type="range" min="0" max="360" value="50" step="0.1" readOnly />
        <span className="process-display-output-text">start</span>
        <p id="process-display-output-1" className="process-display-output process-display-output-1"></p>
      </div>
      
      <div className="process-display-slider-wrapper">
        <input className="process-display-slider-2 process-display-slider" type="range" min="0" max="360" value="50" step="0.1" readOnly />
        <span className="process-display-output-text">end</span>
        <p id="process-display-output-2" className="process-display-output process-display-output-2"></p>
      </div>
    </div>
  </div>
  )
}

export default ProcessDisplayPage;