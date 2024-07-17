import React from 'react';
import BlockGrid from '../components/Atoms/Block/BlockGrid';
import Button from '../components/Atoms/Button/Button';
import HeaderOther from '../components/Molecules/Navbar/HeaderOther';
import Footer from '../components/Molecules/Footer/Footer';

const Minigames: React.FC = () => {
  const handleStartGame = () => {
    
  };

  return (
    <div className='w-full'>
        <HeaderOther />
    <div className="text-center flex flex-col items-center">
      
      <BlockGrid />
      <Button label="Start Game" onClick={handleStartGame} />
      <br></br>
      
    </div>
    <Footer />
    </div>
  );
};

export default Minigames;
