import React from 'react';
import BlockGrid from '../components/Atoms/Block/BlockGrid';
import Button from '../components/Atoms/Button/Button';
import HeaderOther from '../components/Molecules/Navbar/HeaderOther';
import Footer from '../components/Molecules/Footer/Footer';

const Minigames: React.FC = () => {

  return (
    <div className='w-full bg-tertiary'>
        <HeaderOther />
    <div className="text-center font-bold text-3xl h-56 justify-center flex text-secondary2 mt-56">
      
      Coming Soon
      
    </div>
    <Footer />
    </div>
  );
};

export default Minigames;
