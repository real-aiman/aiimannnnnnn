import React from 'react';

const House = ({ color }) => {
  return (
    <div className={`house ${color}`}>
      <div className="box">
        {[...Array(4)].map((_, i) => (
          <div key={i} className={`token ${color}-token`}></div>
        ))}
      </div>
    </div>
  );
};

export default House;