// components/Block.tsx
import React from 'react';

interface BlockProps {
  index: number;
  isActive: boolean;
  onClick: (index: number) => void;
}

const Block: React.FC<BlockProps> = ({ index, isActive, onClick }) => {
  return (
    <div
      className={`w-24 h-24 border-4 border-text bg-gray-300 rounded transition duration-300 ${isActive ? 'bg-secondary' : ''}`}
      data-index={index}
      onClick={() => onClick(index)}
    ></div>
  );
};

export default Block;
