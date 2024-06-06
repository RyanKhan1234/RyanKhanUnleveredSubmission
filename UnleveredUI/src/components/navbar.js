
// import logo from './logo.jpg';

// import React from 'react';

// const Unleverednav = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div>
//           <img src= {logo} alt="Logo" width={82} height={75} />
//           <span className='text-white'>
//             Unlevered
//           </span>
//         </div>
//         <div>
//           <a href="/login" className="text-white text-lg">Login</a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Unleverednav;
import logo from './logo.jpg';
import React from 'react';
import './Navbar.css'

const Unleverednav = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" width={82} height={30} />
          <span className="text-white">Unlevered</span>
        </div>
        <div className='mr-3 custom-navHover'>
          <a href="/login" className="text-white text-lg">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Unleverednav;
