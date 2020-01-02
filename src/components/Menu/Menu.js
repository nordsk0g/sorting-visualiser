import React from "react";
import "./Menu.css";

const Menu = ({
  resetArray,
  bubbleSort,
  insertionSort,
  mergeSort,
  quickSort
}) => {
  return (
    <div className="menu">
      <button className="main-btn" onClick={() => resetArray()}>
        Generate New Array
      </button>
      <div className="container">
        <button className="main-btn" onClick={() => bubbleSort()}>
          Bubble Sort
        </button>
        <button className="main-btn" onClick={() => insertionSort()}>
          Insertion Sort
        </button>
        <button className="main-btn" onClick={() => mergeSort()}>
          Merge Sort
        </button>
        <button className="main-btn" onClick={() => quickSort()}>
          Quick Sort
        </button>
      </div>
    </div>
  );
};

export default Menu;
