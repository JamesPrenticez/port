import React, { useState, useEffect } from "react";

// Slider component
const Slider: React.FC<{ label: string, min: number, max: number, value: number, onChange: (val: number) => void }> = ({ label, min, max, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="range" min={min} max={max} value={value} onChange={e => onChange(Number(e.target.value))} />
      <span>{value}</span>
    </div>
  );
};

// Toggle component
const Toggle: React.FC<{ label: string, value: boolean, onChange: (val: boolean) => void }> = ({ label, value, onChange }) => {
  return (
    <div onClick={() => onChange(!value)}>
      <label>{label}</label>
      <div>{value ? "ON" : "OFF"}</div>
    </div>
  );
};

// WaveApp component
const WaveApp: React.FC = () => {
  const [frequency, setFrequency] = useState<number>(0.25);
  const [amplitude, setAmplitude] = useState<number>(1);
  const [shadow, setShadow] = useState<boolean>(true);
  const [framerate, setFramerate] = useState<number>(60);
  const [increment, setIncrement] = useState<number>(5);
  const [play, setPlay] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);


  const [data1, setData1] = useState<string>("");
  const [data2, setData2] = useState<string>("");

  const createGraph = () => {
    let pathData1 = "M0,150 ";
    let pathData2 = "M0,150 ";

    for (let x = 0; x < 300; x++) {
      const y1 = 150 - ((Math.sin(Math.sqrt(x * frequency) - offset)) * x * (0.1 * amplitude));
      const y2 = 150 + ((Math.sin(Math.sqrt(x * frequency) - offset)) * x * (0.1 * amplitude)); // Inverted
      pathData1 += `L${x},${y1} `;
      pathData2 += `L${x},${y2} `;
    }

    setData1(pathData1);
    setData2(pathData2);
  };
  useEffect(() => {
    createGraph();

    const timer = setTimeout(() => {
      if (play) {
        setOffset(prevOffset => prevOffset + increment / framerate);
      }
    }, 1000 / framerate);
    return () => clearTimeout(timer);
  }, [offset, play, increment, framerate]);

  return (
    <div>


      <div style={{background: "red"}}>

      <Slider label="Frequency" min={0} max={1} value={frequency} onChange={val => setFrequency(val)} />
      <Slider label="Amplitude" min={0} max={10} value={amplitude} onChange={val => setAmplitude(val)} />
      <Slider label="Framerate" min={1} max={120} value={framerate} onChange={val => setFramerate(val)} />
      <Slider label="Increment" min={0} max={10} value={increment} onChange={val => setIncrement(val)} />
      <Toggle label="Play" value={play} onChange={val => setPlay(val)} />
      <Toggle label="Shadow" value={shadow} onChange={val => setShadow(val)} />
      <button onClick={() => { setOffset(prevOffset => prevOffset + 0.5) }}>Step Forward</button>
      <button onClick={() => { setOffset(prevOffset => prevOffset - 0.5) }}>Step Back</button>
      </div>

      <div style={{position: "relative"}}>

<svg height="300" width="300" style={{position: "absolute"}}>
  <path d={data1} stroke="blue" strokeWidth="2" fill="none" />
</svg>
<svg height="300" width="300" style={{position: "absolute"}} >
  <path d={data2} stroke="red" strokeWidth="2" fill="none" />
</svg>
</div>
    </div>
  );
};

export default WaveApp;