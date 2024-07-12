import React, { useEffect } from 'react';
import Tile from "./tile";
import { animals } from '@data/animals';
import './tile.less'

const data = animals.splice(0,4)

const TilePage: React.FC = () => {

  useEffect(() => {
    const containers = document.querySelectorAll('.tile-component-container');
    console.log(containers)
    containers.forEach(container => new Tile(container).initComponent());
  }, []); 

  return (
    <div 
      className="tile-component-container"
      data-column-count="4"
    >
      {data.map((item) => (
        <a 
          key={item.id}
          className="tile-component-card"
          href={item.url}
          target="_blank" // "_self"
          tabIndex={0}
          data-bg-img={item.img}
        >
          <div className="__bg-img"></div>
          <img className="__sudo-img" src="/" alt="" />
          <div className="__overlay"></div>
          <div className="__inner">
            <h1 className="__heading">{item.title}</h1>
            <p className="__description">{item.desc}</p>
            <p className="__link">
              Find out more
              <span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_3218_459)">
                  <path d="M6.76451 0.110828L6.54354 0.331766C6.3971 0.478204 6.3971 0.715641 6.54354 0.86211L12.1215 6.44005H0.375C0.167906 6.44005 0 6.60796 0 6.81505V7.12756C0 7.33465 0.167906 7.50256 0.375 7.50256H12.1215L6.54354 13.0805C6.3971 13.2269 6.3971 13.4644 6.54354 13.6108L6.76451 13.8318C6.91095 13.9782 7.14838 13.9782 7.29482 13.8318L13.8902 7.23646C14.0366 7.09002 14.0366 6.85259 13.8902 6.70612L7.29482 0.110828C7.14838 -0.0356407 6.91095 -0.0356407 6.76451 0.110828Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_3218_459">
                  <rect width="14" height="14" fill="white" transform="translate(0 0.000976562)"/>
                  </clipPath>
                  </defs>
                </svg>
              </span>
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default TilePage;