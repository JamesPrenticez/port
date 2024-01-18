import React, { useState } from 'react';

const DotSlider = () => {
  const [circles, setCircles] = useState(Array.from({ length: 24 }, () => ({ highlighted: false })));
  const [startIndex, setStartIndex] = useState(null);
  const [endIndex, setEndIndex] = useState(null);

  const handleCircleClick = (index: any) => {
    if (startIndex === null) {
      setCircles((prevCircles) => {
        const updatedCircles = [...prevCircles];
        updatedCircles[index].highlighted = true;
        return updatedCircles;
      });
      setStartIndex(index);
      setEndIndex(null);
    } else if (endIndex === null) {
      const min = Math.min(startIndex, index);
      const max = Math.max(startIndex, index);

      setCircles((prevCircles) => {
        const updatedCircles = [...prevCircles];
        for (let i = min; i <= max; i++) {
          updatedCircles[i].highlighted = true;
        }
        return updatedCircles;
      });
      setEndIndex(index);
    } else {
      // Reset all circles
      setCircles((prevCircles) => {
        const updatedCircles = prevCircles.map((circle) => ({ ...circle, highlighted: false }));
        updatedCircles[index].highlighted = true;
        return updatedCircles;
      });
      setStartIndex(index);
      setEndIndex(null);
    }
  };

  const handleCircleHover = (index: any) => {
    if (startIndex !== null && endIndex === null) {
      const min = Math.min(startIndex, index);
      const max = Math.max(startIndex, index);

      setCircles((prevCircles) => {
        const updatedCircles = [...prevCircles];
        for (let i = min; i <= max; i++) {
          updatedCircles[i].highlighted = true;
        }
        return updatedCircles;
      });
    }
  };

  const selectedCount = circles.filter((circle) => circle.highlighted).length;

  const renderCircles = circles.map((circle, index) => (
    <div
      key={index}
      className={`w-8 h-8 rounded-full mx-1 border-2 border-gray-400 cursor-pointer ${
        circle.highlighted ? 'bg-blue-500' : ''
      }`}
      onClick={() => handleCircleClick(index)}
      onMouseEnter={() => handleCircleHover(index)}
    ></div>
  ));

  return (
    <div className="flex flex-wrap">
      {renderCircles}
      <div className="flex items-center ml-4">
        <p className="text-xl">Selected: {selectedCount}</p>
      </div>
    </div>
  );
};


export default DotSlider;
