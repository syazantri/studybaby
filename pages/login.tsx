// import React from 'react';
// import Input from '../components/Input/Input';

// const LoginPage = () => {

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="bg-white rounded-lg shadow-md p-6 w-80">
//         <h2 className="text-center text-2xl font-semibold text-text mb-6">Login</h2>
//         <form id="login-form">
//           <Input id="username" name="username" type="text" label="Username" required />
//           <Input id="password" name="password" type="password" label="Password" required />
//           <button
//             id="login-btn"
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React from 'react';
import BlockGrid from '../components/Block/BlockGrid';
import Button from '../components/Button/Button';
import HeaderOther from '../components/Navbar/HeaderOther';
import Footer from '../components/Footer/Footer';

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
