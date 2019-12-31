import React, { useState, useEffect } from "react";
import Menu from "../Menu/Menu";
import {
  getBubbleSortAnimations,
  getMergeSortAnimations
} from "./SortingAlgorithms";
import "./SortingVisualiser.css";

const PRIMARY_COLOR = "#00ffb8";

const SECONDARY_COLOR = "#001eff";

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const SortingVisualiser = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < 100; i++) {
      newArray.push(randomIntFromInterval(1, 500));
    }
    setArray(newArray);
  };

  const bubbleSort = () => {
    const animations = getBubbleSortAnimations(array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = animations[i].length !== 4;
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = animations[i][2] ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 1);
      } else {
        setTimeout(() => {
          const [
            barOneIndex,
            newOneHeight,
            barTwoIndex,
            newTwoHeight
          ] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          barOneStyle.height = `${newOneHeight}px`;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          barTwoStyle.height = `${newTwoHeight}px`;
        }, i * 1);
      }
    }
  };
  const insertionSort = () => {
    console.log("insertion sort");
  };
  const mergeSort = () => {
    const animations = getMergeSortAnimations(array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 5);
      } else {
        setTimeout(() => {
          const [barOneIndex, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 5);
      }
    }
  };
  const quickSort = () => {
    console.log("quick sort");
  };

  return (
    <div>
      <Menu
        resetArray={resetArray}
        bubbleSort={bubbleSort}
        insertionSort={insertionSort}
        mergeSort={mergeSort}
        quickSort={quickSort}
      />
      <div className="array-container">
        {array.map((value, index) => (
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
