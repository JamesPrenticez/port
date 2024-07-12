import React, { useEffect, useState, forwardRef, Ref } from 'react';

interface CubeProps {
  className?: string;
  width: string | number;
  height: string | number;
  autoPlay?: boolean;
}

const Cube = forwardRef<HTMLInputElement, CubeProps>(({ className, width, height, autoPlay }, ref: Ref<HTMLInputElement>) => {
  const colorList = ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 127, 255)'];
  const [colors, setColors] = useState<{ [key: string]: string }>({});

  const changeColor = (id: string) => {
    let nextColor = randomNumNotEqualToPrev(colorList.indexOf(colors[id]));
    setColors({ ...colors, [id]: colorList[nextColor] });
  };

  const randomNumNotEqualToPrev = (prev: number) => {
    let min = 0;
    let max = 3;

    let next = Math.floor(Math.random() * (max - min)) + min;

    if (next === prev) {
      next = randomNumNotEqualToPrev(prev); //recursive
    }

    return next;
  };

  if (autoPlay) {
    useEffect(() => {
      const sides = ['top', 'left', 'right'];
      let prev = 0;
      let myColors: { [key: string]: string } = {};
      const timer = (ms: number) => new Promise((res) => setTimeout(res, ms));
      const loop = async () => {
        for (let i = 0; i <= sides.length; i++) {
          for (let j = 1; j <= 4; j++) {
            let id = `${sides[i] + j}`;
            let nextColor = randomNumNotEqualToPrev(prev);
            prev = nextColor;
            //console.log(myColors)

            setColors(myColors);
            //setColors({ ...colors, [id]: colorList[nextColor] })
            myColors = { ...myColors, [id]: colorList[nextColor] };
            await timer(200);
          }
        }
      };

      loop();
    }, []);
  }

  return (
    <div ref={ref} className={className}>
      <svg width={width} height={height} viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
        <line id="1" stroke="currentColor" strokeWidth="6" y2="215" x2="174.56522" y1="100" x1="174.56522" />
        <line id="2" stroke="currentColor" strokeWidth="6" y2="239.3" x2="124.511" y1="124.60691" x1="124.511"/>
        <line id="3" stroke="currentColor" strokeWidth="6" y2="179.78261" x2="124.56522" y1="122.82609" x1="24.56522" />
        <line id="4" stroke="currentColor" strokeWidth="6" y2="179.81932" x2="124.91752" y1="130.14354" x1="225.27045"/>
        <line id="5" stroke="currentColor" strokeWidth="6" y2="124.89157" x2="124.37493" y1="66.19592" x1="24.80972"/>
        <line id="6" stroke="currentColor" strokeWidth="6" y2="74.97433" x2="225" y1="124.8946" x1="124.62029"/>
        <line id="7" stroke="currentColor" strokeWidth="6" y2="189.70972" x2="225" y1="74.70972" x1="225"/>
        <line id="8" stroke="currentColor" strokeWidth="6" y2="189.14257" x2="225.37088" y1="239.06285" x1="124.33866"/>
        <line id="9" stroke="currentColor" strokeWidth="6" y2="75.01382" x2="224.86393" y1="16.31817" x1="125.29871"/>
        <line id="10" stroke="currentColor" strokeWidth="6" y2="100.19719" x2="174.25268" y1="41.50154" x1="74.68747"/>
        <line id="11" stroke="currentColor" strokeWidth="6" y2="96.0556" x2="76.45317" y1="46.37982" x1="176.80611"/>
        <line id="12" stroke="currentColor" strokeWidth="6" y2="65.73775" x2="24.86393" y1="16.06197" x1="125.21687"/>
        <line id="13" stroke="currentColor" strokeWidth="6" y2="211.82152" x2="76.27671" y1="96.82152" x1="76.27671"/>
        <line id="14" stroke="currentColor" strokeWidth="6" y2="181.01467" x2="24.44297" y1="66.01467" x1="24.44297"/>
        <line id="15" stroke="currentColor" strokeWidth="6" y2="239.09945" x2="124.69198" y1="180.4038" x1="25.12676"/>

        <path id="top1" onClick={(e) => changeColor(e.currentTarget.id)} fill={colors.top1 ? colors.top1 : "transparent"} d="m124.43131,124.05661l48.39889,-23.82487l-47.16754,-27.96759l-47.92681,23.92131l46.69547,27.87115z"/>
        <path id="top2" onClick={(e) => changeColor(e.currentTarget.id)} fill={colors.top2 ? colors.top2 : "transparent"} d="m174.30278,99.63502l49.1701,-24.33901l-47.16754,-27.96759l-49.384,24.28561l47.42407,28.0533l-0.04262,-0.03231z"  />
        <path id="top3" onClick={(e) => changeColor(e.currentTarget.id)} fill={colors.top3 ? colors.top3 : "transparent"} d="m126.06429,70.63773l49.1701,-24.06801l-50.14857,-29.86461l-49.384,24.55661l47.69507,28.0533l2.66741,1.3227z"/>
        <path id="top4" onClick={(e) => changeColor(e.currentTarget.id)} fill={colors.top4 ? colors.top4 : "transparent"} d="m76.00115,95.55275l48.41739,-24.2744l-49.91547,-29.39841l-47.9854,24.09041l47.46197,28.2864l2.02151,1.296z"/>

        <path id="right1" onClick={(e) => changeColor(e.currentTarget.id)} fill={colors.right1 ? colors.right1 : "transparent"} d="m125.48716,125.56404l-0.24328,52.97251l48.29268,-23.97831l0,-53.09484l-48.0494,24.10064z"/>
        <path id="right2" onClick={(e) => changeColor(e.currentTarget.id)} fill={colors.right2 ? colors.right2 : "transparent"} d="m125.48716,180.46262l-0.24328,57.20436l49.57803,-24.42449l-0.77121,-56.81877l-48.56354,24.03889z" />
        <path id="right3" onClick={(e) => changeColor(e.currentTarget.id)} fill={colors.right3 ? colors.right3 : "transparent"} d="m175.35166,155.53037l0.02772,57.20436l49.03602,-24.15349l-0.2292,-56.81877l-48.83454,23.76789z"/>
        <path id="right4" onClick={(e) => changeColor(e.currentTarget.id)} fill={colors.right4 ? colors.right4 : "transparent"} d="m175.35166,100.53612l0.26082,52.75806l49.03602,-23.20852l-0.2292,-53.80103l-49.06764,24.25149z"/>

        <path id="left1" onClick={(e) => changeColor(e.currentTarget.id)} fill={colors.left1 ? colors.left1 : "transparent"} d="m76.88679,97.83019l46.50943,27.45283l0.18868,52.83019l-46.60377,-26.22642l-0.09434,-54.0566z"/>
        <path id="left2" onClick={(e) => changeColor(e.currentTarget.id)} fill={colors.left2 ? colors.left2 : "transparent"} d="m24.95877,67.23893l50.60904,29.76645l0.45925,54.62968l-50.71013,-29.31125l-0.35816,-55.08488z"/>
        <path id="left3" onClick={(e) => changeColor(e.currentTarget.id)} fill={colors.left3 ? colors.left3 : "transparent"} d="m24.95877,123.6075l50.60904,28.95345l0.45925,57.0687l-50.98113,-29.85326l-0.08716,-56.16889z"/>
        <path id="left4" onClick={(e) => changeColor(e.currentTarget.id)} fill={colors.left4 ? colors.left4 : "transparent"} d="m76.87694,153.03244l47.23204,27.44178l-0.11444,57.3397l-46.9221,-27.41423l-0.1955,-57.36725z" />
      </svg>
    </div>
  )
})

export default Cube;