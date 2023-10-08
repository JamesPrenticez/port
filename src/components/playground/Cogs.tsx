import React, { useEffect, type ReactElement } from "react";

interface LoadingProps {
  fullScreen?: boolean;
  transparent?: boolean;
}
const Cogs = ({ fullScreen = true, transparent = false }: LoadingProps): ReactElement => {

  // We need to inject the keyframes css
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes spinFowards {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      @keyframes spinBackwards {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(-360deg); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className="flex items-center justify-center"
      style={{
        // position: fullScreen ? "fixed" : "static",
        // top: fullScreen ? "0" : "",
        // right: fullScreen ? "0" : "",
        // bottom: fullScreen ? "0" : "",
        // left: fullScreen ? "0" : "",
        height: fullScreen ? "100vh" : "100%",
        width: "100%"
      }}
    >
      <div className="relative flex justify-end h-[150px] w-[150px]">

        {/* Fowards */}
        <svg 
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="rgb(14 165 233)"
          stroke=""
          width={200}
          height={200}
          style={{
            position: "absolute",
            top: "calc(50% - 200px)",
            left: "calc(65% - 200px)",
            transform: "rotate(0)",
            animation: "spinFowards infinite 3s linear"
          }}
        >
          <path d="M6.6,1.051a1.464,1.464,0,0,1,2.809,0l.1.338a1.463,1.463,0,0,0,1.815.993,1.448,1.448,0,0,0,.29-.122l.311-.169a1.465,1.465,0,0,1,1.988,1.987l-.171.311a1.464,1.464,0,0,0,.585,1.984,1.507,1.507,0,0,0,.288.119l.341.1a1.465,1.465,0,0,1,0,2.81l-.343.1a1.465,1.465,0,0,0-.869,2.105l.169.311a1.466,1.466,0,0,1-1.988,1.989l-.311-.171a1.462,1.462,0,0,0-2.1.873l-.1.341a1.465,1.465,0,0,1-2.809,0l-.1-.343a1.461,1.461,0,0,0-1.818-.988,1.507,1.507,0,0,0-.288.119l-.31.169a1.467,1.467,0,0,1-1.989-1.989l.171-.311a1.463,1.463,0,0,0-.585-1.984,1.58,1.58,0,0,0-.288-.117l-.338-.1a1.465,1.465,0,0,1,0-2.81l.338-.1a1.456,1.456,0,0,0,.873-2.106L2.093,4.08A1.466,1.466,0,0,1,4.08,2.091l.31.172a1.465,1.465,0,0,0,1.985-.586,1.4,1.4,0,0,0,.118-.288ZM11.428,8A3.429,3.429,0,1,0,8,11.43,3.43,3.43,0,0,0,11.428,8Z" />
        </svg>

        {/* Backwards */}
        <svg 
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="rgb(14 165 233)"
          stroke=""
          width={200}
          height={200}
          style={{
            position: "absolute",
            top: "calc(35% - 70px)",
            left: "calc(30% + 10px)",
            transform: "rotate(0)",
            animation: "spinBackwards infinite 3s linear"
          }}
        >
          <path d="M6.6,1.051a1.464,1.464,0,0,1,2.809,0l.1.338a1.463,1.463,0,0,0,1.815.993,1.448,1.448,0,0,0,.29-.122l.311-.169a1.465,1.465,0,0,1,1.988,1.987l-.171.311a1.464,1.464,0,0,0,.585,1.984,1.507,1.507,0,0,0,.288.119l.341.1a1.465,1.465,0,0,1,0,2.81l-.343.1a1.465,1.465,0,0,0-.869,2.105l.169.311a1.466,1.466,0,0,1-1.988,1.989l-.311-.171a1.462,1.462,0,0,0-2.1.873l-.1.341a1.465,1.465,0,0,1-2.809,0l-.1-.343a1.461,1.461,0,0,0-1.818-.988,1.507,1.507,0,0,0-.288.119l-.31.169a1.467,1.467,0,0,1-1.989-1.989l.171-.311a1.463,1.463,0,0,0-.585-1.984,1.58,1.58,0,0,0-.288-.117l-.338-.1a1.465,1.465,0,0,1,0-2.81l.338-.1a1.456,1.456,0,0,0,.873-2.106L2.093,4.08A1.466,1.466,0,0,1,4.08,2.091l.31.172a1.465,1.465,0,0,0,1.985-.586,1.4,1.4,0,0,0,.118-.288ZM11.428,8A3.429,3.429,0,1,0,8,11.43,3.43,3.43,0,0,0,11.428,8Z" />
        </svg>

        {/* <div className="flex align-baseline justify-center flex-grow">
          <h6 className="bold mr-[0.5rem] text-sky-500">
            Loading
          </h6>
        </div> */}
      </div>
    </div>
  );
};

export default Cogs;

//https://dev.azure.com/GroupDataOperations/WebEDW_Workbench/_git/workbench-fe?path=/src/components/common/Loading1.tsx