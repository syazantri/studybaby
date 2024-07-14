import React from 'react';
import BlockGrid from '../components/Block/BlockGrid';
import Button from '../components/Button/Button';
import HeaderOther from '../components/Navbar/HeaderOther';
import Footer from '../components/Footer/Footer';

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
