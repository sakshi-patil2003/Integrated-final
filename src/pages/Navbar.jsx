import React from 'react';

// Import images
import logo from '../../src/assets/images/logos/ICEM Final LOGO.png';
import autonomousLogo from '../../src/assets/images/ICEM-Autonomous-logo.png';

function Navbar() {
  return (
    <nav
      className="bg-gray-900 shadow-lg w-full relative z-50"
      style={{ fontFamily: "'Brygada 1918', serif" }}
    >
      {/* Center Title and Sub-title */}
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center z-20 px-2 sm:px-4 md:px-4">
        <h1 className="text-white text-[8px] md:text-xl lg:text-3xl font-bold animate-glow tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">
          INDIRA COLLEGE OF ENGINEERING & MANAGEMENT
        </h1>
        <p className="text-gray-300 text-[5px] md:text-xs lg:text-sm mt-[2px] font-medium whitespace-nowrap overflow-hidden text-ellipsis">
          AN AUTONOMOUS INSTITUTE AFFILIATED TO SAVITRIBAI PHULE PUNE UNIVERSITY (SPPU)
        </p>
      </div>

      {/* Logos Container */}
      <div className="mx-auto flex items-center justify-between px-2 sm:px-4 md:px-16 relative z-30">
        {/* Left Logo */}
        <div className="flex items-center flex-shrink-0">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="h-auto w-[60px] sm:w-[60px] md:w-[100px]"
            />
          </a>
        </div>

        {/* Right Logo */}
        <div className="flex items-center flex-shrink-0 ml-2">
          <a href="/">
            <img
              src={autonomousLogo}
              alt="Autonomous Logo"
              className="h-auto w-[55px] sm:w-[60px] md:w-[100px]"
            />
          </a>
        </div>
      </div>

      {/* Background Layer */}
      <div className="absolute inset-0 bg-gray-900 z-10"></div>

      {/* Glowing Text Animation */}
      <style>
        {`
          @keyframes glow {
            0%, 100% {
              text-shadow: 0 0 5px #fff, 0 0 5px #117577, 0 0 5px #117577;
            }
            50% {
              text-shadow: 0 0 10px #fff, 0 0 5px #117577, 0 0 5px #117577;
            }
          }
          .animate-glow {
            animation: glow 2s ease-in-out infinite;
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
