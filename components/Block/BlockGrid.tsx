// components/BlocksGrid.tsx
import React, { useState } from 'react';
import Block from './Block';

const BlockGrid: React.FC = () => {
  const [activeBlocks, setActiveBlocks] = useState<number[]>([]);

  const handleBlockClick = (index: number) => {
    setActiveBlocks((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="mt-10 grid grid-cols-4 grid-rows-4 gap-2.5 mb-5">
      {Array.from({ length: 16 }, (_, index) => (
        <Block
          key={index}
          index={index}
          isActive={activeBlocks.includes(index)}
          onClick={handleBlockClick}
        />
      ))}
    </div>
  );
};

export default BlockGrid;
