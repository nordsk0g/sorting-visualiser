import React from "react";

const Menu = ({ resetArray }) => {
  return (
    <div className="menu">
      <button className="main-btn" onClick={() => resetArray()}>
        Generate New Array
      </button>
    </div>
  );
};

export default Menu;
