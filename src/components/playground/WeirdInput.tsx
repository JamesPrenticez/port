import React, { useEffect, useState, type ReactElement } from 'react'
// https://codepen.io/ipacmanx/pen/NLeEwJ


// import React, { useState, useEffect } from 'react';

interface WeirdInputProps {
  name: string;
  id?: string;
  value: string;
  onInput: (value: string) => void;
}

const WeirdInputEffect: React.FC<WeirdInputProps> = ({ name, id, value, onInput }) => {
  const [animated, setAnimated] = useState(false);
  const [caret, setCaret] = useState(true);
  const [prevValue, setPrevValue] = useState(value);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes print {
        from{
          position:absolute;
          transform: scale(50);
        }
        99% {
          position:absolute;
        }
        to {
          position:relative;
        }
      }

      @keyframes impact {
        from,
        to {
        }
        50% {
          transform:scale(0.97);
        }
      }

      @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  console.log(animated)

  useEffect(() => {
    let timer1: NodeJS.Timeout;
    let timer2: NodeJS.Timeout;

    const handleAnimation = (after: string, before: string) => {
      if (after.length !== before.length) {
        if (after.slice(-1) === ' ') return;
        timer1 = setTimeout(() => {
          setAnimated(true);
          timer2 = setTimeout(() => {
            setAnimated(false);
            setCaret(true);
          }, 200);
        }, 300);
      }
    };

    handleAnimation(value, prevValue);

    // Update prevValue for the next render
    setPrevValue(value);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };

  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInput(e.target.value);
  };

  const inputId = id !== undefined ? id : `input-${name}`;
  const arr = value.split('');

  return (
    <div className="relative" 
      style={{
        animation: animated ? "impact 0.2s 1" : "",
        caretColor: !caret ? "transparent" : ""
      }}
    
    >
      <input 
        className="rounded-md p-2 shadow-sm focus:shadow-lg outline-none text-[2rem] font-bold text-transparent caret-yellow-600"
        type="text"
        id={inputId}
        name={name}
        autoComplete="off"
        value={value}
        onChange={handleChange}
        placeholder='Type something...'
      />
      <label 
        htmlFor={inputId}
        className='absolute top-[0.5rem] left-[0.5rem] text-[0px]' // top left to match padding
      >
        {arr.map((word, index) => (
          <span 
            key={index}
            className="text-[2rem] font-bold"
            style={{
              animation: "print .2s 1 ease-in-out"
            }}
          >
            {word}
          </span>
        ))}
      </label>
    </div>
  );
};

export function WeirdInput(): ReactElement {
  const [message, setMessage] = useState('');

  return (
    <div className="bg-yellow-400 flex items-center justify-center w-full overflow-hidden">
      <WeirdInputEffect name="weirdInput" value={message} onInput={setMessage} />
    </div>
  );
};