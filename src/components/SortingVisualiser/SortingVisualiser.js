import React, { useState, useEffect } from "react";
import Menu from "../Menu/Menu";
import {
  getBubbleSortAnimations,
  getMergeSortAnimations,
  getInsertionSortAnimations,
  getQuickSortAnimations
} from "./SortingAlgorithms";
import "./SortingVisualiser.css";

const PRIMARY_COLOR = "#00ffb8";

const SECONDARY_COLOR = "#001eff";

const TIMER = 5;

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
    for (let i = 0; i < 150; i++) {
      newArray.push(randomIntFromInterval(1, 500));
    }
    setArray(newArray);
  };

  const animationHelper = (animations, speed) => {
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = animations[i].length < 4;
      if (isColorChange) {
        const [colorSwitch, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = colorSwitch ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * speed);
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
        }, i * speed);
      }
    }
  };

  const bubbleSort = () => {
    const animations = getBubbleSortAnimations(array);
    animationHelper(animations, 1);
  };

  const insertionSort = () => {
    const animations = getInsertionSortAnimations(array);
    animationHelper(animations, 1);
  };

  const mergeSort = () => {
    const animations = getMergeSortAnimations(array);
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
        }, i * TIMER);
      } else {
        setTimeout(() => {
          const [barOneIndex, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * TIMER);
      }
    }
  };

  const quickSort = () => {
    const animations = getQuickSortAnimations(array);
    animationHelper(animations, TIMER);
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
