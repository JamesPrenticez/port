import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Bard = () => {
  const outputRange = [
    [
      'M 1266 0 L 1266 43 L 1266 86 L 1336 86 L 1336 43 L 1336 0 Z',
      'M 1336 0 L 1336 43 L 1336 86 L 1406 86 L 1406 43 L 1406 0 Z',
      'M 1406 0 L 1406 43 L 1406 86 L 1474 86 L 1474 43 L 1474 0 Z',
      'M 1474 0 L 1474 43 L 1474 86 L 1543 86 L 1543 43 L 1543 0 Z',
    ],
    [
      'M 1266 0 L 1267 681 L 1267 681 L 1335 680 L 1335 680 L 1336 0 Z',
      'M 1336 0 L 1335 680 L 1335 680 L 1405 680 L 1405 680 L 1406 0 Z',
      'M 1406 0 L 1405 680 L 1405 680 L 1475 681 L 1475 681 L 1474 0 Z',
      'M 1474 0 L 1475 681 L 1475 681 L 1543 681 L 1543 681 L 1543 0 Z',
    ],
    [
      'M 1266 0 L 1267 681 L 142 1094 L 560 1093 L 1336 679 L 1336 0 Z',
      'M 1336 0 L 1336 679 L 560 1093 L 976 1092 L 1406 679 L 1406 0 Z',
      'M 1406 0 L 1406 679 L 976 1092 L 1392 1093 L 1474 682 L 1474 0 Z',
      'M 1474 0 L 1474 682 L 1392 1094 L 1808 1093 L 1543 679 L 1543 0 Z',
    ],
  ];

//  const [variant, setVariant] = useState('two');
   const [variant, setVariant] = useState(["two", "two", "two", "two"])
  const colors = ['#438fff', '#ff5247', '#38a852', '#ffbc03']

  return (
    <div
    style={{
      position: "relative",
      display: "flex",
      height: "100vh",
      width: "100%"
    }}
  >
      <motion.svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1980 1080"
        // preserveAspectRatio="xMidYMid meet"  // This property forces uniform scaling
        preserveAspectRatio="xMidYMid slice"  // This property forces the SVG to stretch and cover the entire container
        style={
          {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // backgroundColor: "rgb(249 250 251)"
          }
        }
      >
          {outputRange[0].map((path, index) => {

            const clip_path_variants = {
              one: {
                d: outputRange[0][index],
                transition: { ease: 'easeInOut', duration: 2}
              },
              two: {
                d: outputRange[1][index],
                transition: { ease: 'easeInOut', duration: 2, onComplete: () => {
                  setVariant(prevState => {
                    const newState = [...prevState];
                    newState[index] = 'three';
                    return newState;
                  });
                }},
              },
              three: {
                d: outputRange[2][index],
                transition: { ease: 'easeInOut', duration: 2}
              },
            };

            return (
              <motion.path
                key={index}
                initial="one"
                animate={variant[index]}
                d={path}
                fill={colors[index]}
                variants={clip_path_variants}
                style={{ transform: 'scaleX(1.15)' }}
              />
            )
          })}
      </motion.svg>
    </div>
  );
};

export default Bard;

// SVG Path Editor https://yqnn.github.io/svg-path-editor/

