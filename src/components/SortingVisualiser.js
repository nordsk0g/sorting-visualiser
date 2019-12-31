import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import "../style/SortingVisualiser.css";

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const SortingVisualiser = () => {
  const [toSort, setToSort] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(randomIntFromInterval(1, 500));
    }
    setToSort(array);
  };

  return (
    <div>
      <Menu resetArray={resetArray} />
      <div className="array-container">
        {toSort.map((value, index) => (
          <div
            key={index}
            className="array-bar"
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SortingVisualiser;
