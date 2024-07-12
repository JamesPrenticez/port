import React, { useEffect } from "react";

interface LogoProps {
  text: string;
  size?: number;
}

const BouncyText: React.FC<LogoProps> = ({ text, size = 0.5 }) => {
  const letters = text.split("");

  const letterStyles = {
    color: "#ffffff",
    // backgroundColor: "rgb(139 92 246)",
    fontFamily: "Verdana",
    fontWeight: 600,
    fontSize: `${8 * size}rem`, // use size prop to calculate new font size
    padding: `${1 * size}rem`,
    marginRight: `${1 * size}rem`,
    width: `${10 * size}rem`,
    borderRadius: `${3 * size}rem`,
    display: "flex",
    justifyContent: "center",
  };

  // We need to inject the keyframes css so that we can dynamically set the size
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .bounce {
        animation-name: bounce;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: 1;
      }
      @keyframes bounce {
        16.65% {
          transform: translateY(${8 * size}rem);
        }
        33.3% {
          transform: translateY(-${6 * size}rem);
        }
        49.95% {
          transform: translateY(${4 * size}rem);
        }
        66.6% {
          transform: translateY(-${2 * size}rem);
        }
        83.25% {
          transform: translateY(${1 * size}rem);
        }
        100% {
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [size]);

  return (
    <div className="flex w-full h-[100vh] items-center justify-center">
      {letters.map((letter, i) => {
        const shouldMoveUp = i % 2 === 1; // true for even-indexed letters or change to false for odd-indexed letters
        const moveAmount = 30 * size; // map a-z to 0-25 and multiply by 10
        const moveDirection = shouldMoveUp ? -1 : 1; // move up or down depending on index
        const translateY = moveAmount * moveDirection;

        return (
          <div key={i} style={{ transform: `translateY(${translateY}px)` }} className="">
            <div
              style={{
                backgroundColor: letter === " " ? "transparent" : "rgb(139 92 246)",
                ...letterStyles
              }}
              onMouseEnter={(e) => {
                e.currentTarget.classList.add("bounce");
              }}
              onAnimationEnd={(e) => {
                e.currentTarget.classList.remove("bounce");
              }}
            >
              {letter}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BouncyText;

// https://dev.azure.com/mertle/mertle/_git/mertle-fe?path=/src/components/layout/Logo.tsx

// Translate Y
// Here, we wrap each letter in a container element with the class letterContainer and apply the translateY transformation to the container element.
// We then position the letter element within the container using absolute positioning.
// This way, the letter is always positioned at the same location relative to the container, regardless of the translateY transformation applied to the container.
// We can apply the bounce animation to the inner letter element, which will not be affected by the translateY transformation and therefore won't cause the jittering issue.

// Size prop
// The size prop can take a value in any valid CSS length unit, such as pixels (px), ems (em), or rems (rem).
// If you don't specify a unit, it will default to pixels.
// For example, you can use size="24px" or size="1.5em" or simply size={24} to set the font size to 24 pixels.

// You could randomize the offset but its tricky
// const shouldMoveUp = i % 2 === 1; // true for even-indexed letters or change to false for odd-indexed letters
// const moveAmount = (letter.charCodeAt(0) - 97) * size; // map a-z to 0-25 and multiply by 10
// const moveDirection = shouldMoveUp ? -1 : 1; // move up or down depending on index
// const translateY = (totalMoveAmount + moveAmount) * moveDirection;
// totalMoveAmount += moveAmount;