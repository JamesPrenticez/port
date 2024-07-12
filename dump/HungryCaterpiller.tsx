import React, {
  useState,
  useEffect,
  type Dispatch,
  type SetStateAction,
  type ReactElement,
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
} from "react";

const BGCOLOR1 = "#003FBC";
const BGCOLOR2 = "#00ADBB";

const ARMCOlOR = "#fde047";
const EYEINNERCOlOR = "#1da174";
const EYEOUTTERCOlOR = "#fde047";

const BODY1COLOR = "#c83329";
const BODY2COLOR = "#1da174";
const BODY3COLOR = "#326e3a";
const BODY4COLOR = "#2a9152";
const BODY5COLOR = "#205a32";
const BODY6COLOR = "#0493b5";

const SplashScreen = (): ReactElement => {
  const [animation, setAnimation] = useState('typing');
  const [armPathL, setArmPathL] = useState<string>("");
  const [armPathR, setArmPathR] = useState<string>("");

  const [frequency, setFrequency] = useState<number>(3);
  const [amplitude, setAmplitude] = useState<number>(0.1);
  const framerate = 144;
  const [speed, setSpeed] = useState<number>(5);
  const [offset, setOffset] = useState<number>(0);

  const xstart = 207;
  const ystart = 171;
  const length = 110;

  const createCurve = (x: number, inverted: boolean = false): number => {
    const phase = inverted ? Math.sqrt(x * frequency) - offset : Math.sqrt(x * frequency) + offset;
    return ystart - Math.sin(phase) * (x - xstart) * amplitude;
  };

  const updateArms = (): void => {
    let x = xstart;
    let dataL = `M ${xstart} ${ystart}`;
    let dataR = `M ${xstart} ${ystart}`;

    while (x < xstart + length) {
      const newYL = createCurve(x, false);
      const newYR = createCurve(x, true);
      dataL = `${dataL} L ${x} ${newYL}`;
      dataR = `${dataR} L ${x} ${newYR}`;
      x += 1;
    }

    setArmPathL(dataL);
    setArmPathR(dataR);
  };

  useEffect(() => {
    updateArms();

    const timer = setTimeout(() => {
      if (animation === "typing" || animation === "stressed") {
        setOffset((prevOffset) => prevOffset + speed / framerate);
      }
    }, 1000 / framerate);

    return () => clearTimeout(timer);
  }, [animation, offset, speed, framerate]);

  // We need to inject the keyframes css
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes vibrate {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(-10deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
      
      @keyframes vibrate-crazy {
        0% {
          transform: translate(0);
        }
        10% {
          transform: translate(-2px, -2px);
        }
        20% {
          transform: translate(2px, -2px);
        }
        30% {
          transform: translate(-2px, 2px);
        }
        40% {
          transform: translate(2px, 2px);
        }
        50% {
          transform: translate(-2px, -2px);
        }
        60% {
          transform: translate(2px, -2px);
        }
        70% {
          transform: translate(-2px, 2px);
        }
        80% {
          transform: translate(-2px, -2px);
        }
        90% {
          transform: translate(2px, -2px);
        }
        100% {
          transform: translate(0);
        }
      }
      
      @-webkit-keyframes scratch-chin {
        0% {
          transform: rotate(-40deg);
        }
        5% {
          transform: rotate(-3deg);
        }
        40% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(-3deg);
        }
        60% {
          transform: rotate(0deg);
        }
        80% {
          transform: rotate(-40deg);
        }
        100% {
          transform: rotate(-40deg);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      style={{
        // position: "fixed", 
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0, // Cover the entire viewport
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column",
        flexGrow: 1,
        background: `radial-gradient(circle at center, ${BGCOLOR2} 10%, ${BGCOLOR1} 100%)`, // Changed to circle at center
      }}
    >
      <div
        style={{
          position: "relative",
          height: "400px",
          width: "300px",
        }}
      >
        <div
          style={{
            color: "white",
            position: "absolute",
            top: "-100px",
          }}
        >
          <h1
            style={{
              display: "flex",
              width: "200%",
              marginLeft: "-100px",
              fontWeight: 600,
              fontSize: "4rem",
            }}
          >
            Hungry Caterpiller
          </h1>
          {/* <h2
              style={{
                fontWeight: 400,
                fontSize: "1.5rem",
                textAlign:"center",
              }}
            >
              {words}
            </h2> */}
        </div>

        <ArmLeft animation={animation} armPathL={armPathL} />
        <Character animation={animation} />
        <ArmRight animation={animation} armPathR={armPathR} />
        <Table />
        <Computer animation={animation} />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "0",
          right: "0",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <Button
          onClick={() => {
            setAnimation("passive");
          }}
        >
          PASSIVE
        </Button>
        <Button
          onClick={() => {
            setAnimation("waiting");
          }}
        >
          WAITING
        </Button>
        <Button
          onClick={() => {
            setAnimation("thinking");
          }}
        >
          THINKING
        </Button>
        <Button
          onClick={() => {
            setAnimation("typing");
            setSpeed(10);
          }}
        >
          TYPING
        </Button>
        <Button
          onClick={() => {
            setAnimation("stressed");
            setSpeed(50);
          }}
        >
          NAILING IT
        </Button>
      </div>
      {animation === "stressed" && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            right: 0,
            top: "80%",
            width: "100%",
          }}
        >
          <Input
            type="range"
            step="0.01"
            name="frequency"
            value={frequency}
            onChange={(e) => setFrequency(parseFloat(e.target.value))}
            min="0"
            max="10"
          />
          <Input
            type="range"
            step="0.01"
            name="amplitude"
            value={amplitude}
            onChange={(e) => setAmplitude(parseFloat(e.target.value))}
            min="0.05"
            max="1"
          />
        </div>
      )}
    </div>
  );
};

const Button = ({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>): ReactElement => {
  return (
    <button
      style={{
        display: "inline-block",
        padding: "4px 8px",
        margin: "2px",
        fontWeight: 700,
        background: "transparent",
        borderRadius: "255px 15px 225px 15px/15px 235px 5px 275px",
        border: "5px solid #DADADA",
        cursor: "pointer",
        color: "#F0F0F0",
      }}
      {...props}
    >
      {children}
    </button>
  );
};

const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>): ReactElement => {
  return (
    <input
      type="range"
      style={{
        background: "#ebf6ff",
        borderRadius: "2rem",
        margin: "10px",
      }}
      {...props}
    />
  );
};

const Character = ({ animation }: { animation: string }): ReactElement => {
  const getCharacterStyle = (
    bodyPart: "leftEye" | "leftEyeExtra" | "rightEye" | "body1" | "body2" | "body3"
  ): object => {
    const eyeTransforms: Record<
      string,
      {
        leftEye?: object;
        leftEyeExtra?: object;
        rightEye?: object;
        body1?: object;
        body2?: object;
        body3?: object;
      }
    > = {
      // sleeping: {
      //   leftEye: {
      //     transform: "translate(10px, 15px)"
      //   },
      //   rightEye: {
      //     transform:"translate(18px, 12px)"
      //   }
      // },
      passive: {
        leftEye: {
          transform: "translate(40px, -10px)",
        },
        leftEyeExtra: {
          transform: "translate(40px, -10px)",
        },
        rightEye: {
          transform: "translate(40px, -10px)",
        },
        body1: {
          transform: "translate(30px, -10px)",
        },
        body2: {
          transform: "translate(23px, 3px)",
        },
        body3: {
          transform: "translate(10px, 3px)",
        },
      },
      waiting: {
        leftEye: {
          transform: "translate(52px, -8px)",
        },
        leftEyeExtra: {
          transform: "translate(42px, -7px)",
        },
        rightEye: {
          transform: "translate(42px, -7px)",
        },
        body1: {
          transform: "translate(12px, 0px)",
        },
        body2: {
          transform: "translate(10px, 1px)",
        },
        body3: {
          transform: "translate(10px, 1px)",
        },
      },
      thinking: {
        leftEye: {
          transform: "translate(1px, 10px)",
        },
        leftEyeExtra: {
          transform: "translate(-1.5px, 10px)",
        },
        rightEye: {
          transform: "translate(-1.5px, 10px)",
        },
        body1: {
          transform: "translate(-9px, 5px)",
        },
        body2: {
          transform: "translate(-5px, 2.5px)",
        },
      },
      typing: {
        leftEye: {
          transform: "translate(2px, 21px)",
        },
        leftEyeExtra: {
          visibility: "hidden",
          transform: "translate(-3px, 20px)",
        },
        rightEye: {
          transform: "translate(-3px, 20px)",
        },
        body1: {
          transform: "translate(-18px, 10px)",
        },
        body2: {
          transform: "translate(-10px, 5px)",
        },
        body3: {
          transform: "translate(-4px, 2px)",
        },
      },
      stressed: {
        leftEye: {
          transform: "translate(2px, 41px)",
        },
        leftEyeExtra: {
          visibility: "hidden",
          transform: "translate(-3px, 40px)",
        },
        rightEye: {
          transform: "translate(-3px, 40px)",
        },
        body1: {
          transform: "translate(-17px, 20px)",
        },
        body2: {
          transform: "translate(-8px, 10px)",
        },
        body3: {
          transform: "translate(-2px, 4px)",
        },
      },
    };

    // console.log(animation);
    // console.log(bodyPart);

    return eyeTransforms[animation][bodyPart] ?? {};
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400" style={{ position: "relative" }}>
      {/* Right Eye */}
      <circle
        cx="87.59"
        cy="134.46"
        r="9"
        fill={EYEINNERCOlOR}
        stroke={EYEOUTTERCOlOR}
        strokeWidth={3}
        style={{
          transition: "transform 0.3s ease",
          ...getCharacterStyle("rightEye"),
        }}
      />

      {/* Body */}
      <g id="body" style={{ position: "relative" }}>
        <circle id="body6" fill={BODY6COLOR} cx="205.98" cy="258.94" r="42.88" />
        <circle id="body5" fill={BODY5COLOR} cx="206.62" cy="216.06" r="42.88" />
        <circle id="body4" fill={BODY4COLOR} cx="197.02" cy="335.1" r="42.88" />
        <circle
          id="body3"
          fill={BODY3COLOR}
          cx="191.26"
          cy="173.82"
          r="42.88"
          style={{ transition: "transform 0.3s ease", ...getCharacterStyle("body3") }}
        />
        <circle
          id="body2"
          fill={BODY2COLOR}
          cx="166.95"
          cy="141.82"
          r="42.88"
          style={{ transition: "transform 0.3s ease", ...getCharacterStyle("body2") }}
        />
        <circle
          id="body1"
          fill={BODY1COLOR}
          cx="140.71"
          cy="122.62"
          r="42.88"
          style={{
            fill: BODY1COLOR,
            transition: "transform 0.3s ease",
            ...getCharacterStyle("body1"),
          }}
        />
      </g>

      {/* Left Eye Extra */}
      <circle
        cx="87.59"
        cy="134.46"
        r="9"
        fill={EYEINNERCOlOR}
        stroke={EYEOUTTERCOlOR}
        strokeWidth={3}
        style={{
          transition: "transform 0.3s ease",
          ...getCharacterStyle("leftEyeExtra"),
        }}
      />

      {/* Left Eye */}
      <circle
        cx="115.11"
        cy="134.46"
        r="9"
        fill={EYEINNERCOlOR}
        stroke={EYEOUTTERCOlOR}
        strokeWidth={3}
        style={{
          transition: "transform 0.3s ease",
          ...getCharacterStyle("leftEye"),
        }}
      />
    </svg>
  );
};

const Table = (): ReactElement => (
  <svg
    style={{
      position: "absolute",
      top: "58%",
      left: "-60%",
      fill: "#003FBC",
      width: "200%",
    }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 530 160.1"
  >
    <polygon points="530,65.8 197.7,0 0,10.6 274.9,160.1 " />
  </svg>
);

const Computer = ({ animation }: { animation: string }): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 82 55"
      style={{
        position: "absolute",
        width: "30%",
        top: "49%",
        left: "12%",
        animation:
          animation === "typing"
            ? "vibrate 0.6s linear infinite both"
            : animation === "stressed"
            ? "vibrate-crazy 0.6s linear infinite both"
            : "",
      }}
    >
      <polygon id="keyboard-top" fill="#D6E5E3" points="29,42.5 81,51.5 45,55.5 30,49.5 " />
      <path
        id="keyboard-side"
        fill="#D6E5E3"
        d="M80.3,55.5H45.7c-0.9,0-1.7-0.7-1.7-1.7v-0.7c0-0.9,0.7-1.7,1.7-1.7h34.7c0.9,0,1.7,0.7,1.7,1.7v0.7
        C82,54.8,81.2,55.5,80.3,55.5z"
      />
      <path
        id="screen"
        fill="#D6E5E3"
        d="M38.9,55.4l-27.3-6.3c-1.6-0.4-2.8-1.6-3.1-3.2l-8.4-41C-0.5,2.2,1.7-0.2,4.5,0l27.4,2.5
        c1.8,0.2,3.3,1.5,3.7,3.3l8.3,44.8C44.4,53.6,41.8,56.1,38.9,55.4z"
      />
    </svg>
  );
};

const ArmLeft = ({
  animation,
  armPathL,
}: {
  animation: string;
  armPathL: string;
}): ReactElement => {
  const getArmRightStyle = (): object => {
    const armStyles: Record<string, object> = {
      typing: {
        transformOrigin: "190px 160px",
        transform: "rotate(143deg)",
      },
      stressed: {
        transformOrigin: "190px 160px",
        transform: "rotate(143deg)",
      },
    };

    return armStyles[animation] ?? {};
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 400"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        transition: "transform 0.3s ease", // do need?
      }}
    >
      <path
        style={{
          fill: "none",
          stroke: ARMCOlOR,
          strokeWidth: 12,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
          ...getArmRightStyle(),
        }}
        d={
          animation === "typing"
            ? armPathL
            : animation === "stressed"
            ? armPathL
            : animation === "waiting"
            ? "M175.27,152.06s55.19,87.24-65.77,74.44"
            : animation === "thinking"
            ? "M175.93,152.78s-10.18,82-36.43,103.72"
            : animation === "passive"
            ? "M175.93,152.78s-10.18,82-36.43,103.72"
            : animation === "sleeping"
            ? "M175.93,152.78s-10.18,82-36.43,103.72"
            : ""
        }
      />
    </svg>
  );
};

const ArmRight = ({
  animation,
  armPathR,
}: {
  animation: string;
  armPathR: string;
}): ReactElement => {
  const getArmRightStyle = (): object => {
    const armStyles: Record<string, object> = {
      thinking: {
        transformOrigin: "200px 168px",
        animation: "scratch-chin 10s ease 0s infinite normal",
      },
      typing: {
        transformOrigin: "200px 168px",
        transform: "rotate(140deg)",
      },
      stressed: {
        transformOrigin: "200px 168px",
        transform: "rotate(140deg)",
      },
    };

    return armStyles[animation] ?? {};
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 400"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        transition: "transform 0.3s ease", // do need?
      }}
    >
      <path
        style={{
          fill: "none",
          stroke: ARMCOlOR,
          strokeWidth: 12,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
          ...getArmRightStyle(),
        }}
        d={
          animation === "typing"
            ? armPathR
            : animation === "stressed"
            ? armPathR
            : animation === "waiting"
            ? "M207.26,171.26s45.19,85-75.76,72.24"
            : animation === "thinking"
            ? "M207.48,172.34s-76,114.16-93-9.84"
            : animation === "passive"
            ? "M207.93,172c.57-.48,11.3,86.45-23.43,112.52"
            : animation === "sleeping"
            ? "M207.93,172c.57-.48,11.3,86.45-23.43,112.52"
            : ""
        }
      />
    </svg>
  );
};

export default SplashScreen;

// sauce: https://codepen.io/bnhovde/details/WMgbEa

