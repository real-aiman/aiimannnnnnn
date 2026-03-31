import React from 'react';

const Path = ({ orientation, color, gridArea }) => {
  const cells = Array.from({ length: 18 });

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: orientation === 'vertical' ? 'repeat(3, 1fr)' : 'repeat(6, 1fr)',
    gridTemplateRows: orientation === 'vertical' ? 'repeat(6, 1fr)' : 'repeat(3, 1fr)',
    gridArea: gridArea,
    width: '100%',
    height: '100%',
  };

  const getColor = (index) => {
    if (orientation === 'vertical') {
      const col = index % 3;
      if (col === 1) return `var(--${color})`;
    }
    if (orientation === 'horizontal') {
      const row = Math.floor(index / 6);
      if (row === 1) return `var(--${color})`;
    }
    return 'white';
  };

  const safeIndexes = {
    yellow: 4,
    red: 13,
    green: 7,
    blue: 10,
  };

  return (
    <div style={containerStyle}>
      {cells.map((_, index) => {
        const bg = getColor(index);
        const isSafe = safeIndexes[color] === index;
        return (
          <div
            key={index}
            style={{
              backgroundColor: bg,
              border: '0.5px solid #ccc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
            }}
          >
            {isSafe ? '★' : ''}
          </div>
        );
      })}
    </div>
  );
};

export default Path;