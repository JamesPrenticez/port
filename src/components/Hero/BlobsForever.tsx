import React, { useState, useEffect, useMemo, forwardRef, useRef } from 'react';
import { blobGenerator } from "../../utils/blobGenerator";
import { type SvgBlobProps } from 'models';

// https://github.com/nghiepdev/react-svg-blob
// https://codesandbox.io/s/react-svg-blob-kuzpc?file=/src/App.tsx:599-785 
// https://github.com/lokesh-coder/blobshape/blob/master/index.js


interface BaseProps
  extends Omit<
    React.SVGAttributes<SVGSVGElement>,
    'viewBox' | 'xmlns' | 'xmlnsXlink'
  > {
  variant?: unknown;
}

interface Props extends BaseProps {
  variant?: 'image';
  image: string;
  colors: [string, string];
}

export const BlobsForever = ({ 
  variant = "image",
  colors= ["rgba(248, 117, 55, 1)", "rgba(251, 168, 31, 1)"],
  image,
  ...props
}: Props) => {

  const size = 1000;
  const growth = 8;
  const edges = 10;
  const initialSeed = 1;

  const [currentSeed, setCurrentSeed] = useState(initialSeed);

  const pathRef = useRef(null);
  const clipPathRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSeed((prevSeed) => prevSeed + 1);
    }, 3000); // Change seed every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const newPath = blobGenerator({
      size,
      growth,
      edges,
      seed: currentSeed,
    }).path;

    if (pathRef.current && clipPathRef.current) {
      pathRef.current.setAttribute('d', newPath);
      clipPathRef.current.setAttribute('d', newPath);
    }
  }, [currentSeed]);

  const pathProps = {
    fill: 'url(#gradient)',
    style: { transition: "d 3s ease-in-out" }
  };

  return (
    <svg
      {...props}
      viewBox={`0 0 ${size} ${size}`}
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'>

      {variant === 'image' && (
        <>
          <defs>
            <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop offset='0%' style={{stopColor: colors[0]}} />
              <stop offset='100%' style={{stopColor: colors[1]}} />
            </linearGradient>
            <clipPath id='shape'>
              <path ref={clipPathRef}{...pathProps} />
            </clipPath>
          </defs>
          <path 
            ref={pathRef}
            {...pathProps}

          />
          <image
            x='0'
            y='0'
            width='100%'
            height='100%'
            clipPath='url(#shape)'
            xlinkHref={image}
            preserveAspectRatio='none'
          />
        </>
      )}
    </svg>
  );
};