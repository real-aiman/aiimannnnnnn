import React from 'react';

const Cell = ({ bgColor }) => {
  return (
    <div 
      className="cell" 
      style={{ backgroundColor: bgColor !== 'white' ? bgColor : '' }}
    ></div>
  );
};

export default Cell;