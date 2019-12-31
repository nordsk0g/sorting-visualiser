import React, { useState, useEffect } from "react";
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
      array.push(randomIntFromInterval(1, 1000));
    }
    setToSort(array);
  };

  return (
    <div className="array-container">
      {toSort.map((value, index) => (
        <div
          key={index}
          className="array-bar"
          style={{ height: `${value}px` }}
        ></div>
      ))}
    </div>
  );
};

export default SortingVisualiser;
