import React from 'react';

// Import images
import logo from '../../src/assets/images/logos/ICEM Final LOGO.png';
import autonomousLogo from '../../src/assets/images/ICEM-Autonomous-logo.png';
function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-lg w-full relative z-50" style={{ fontFamily: "'Brygada 1918', serif" }}>
      <div className="mx-auto flex items-center justify-between px-3 sm:px-6 md:px-16 whitespace-nowrap">

        {/* Left Logo and Text (Side by Side Always) */}
        <div className="flex items-center flex-shrink-0 z-30">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="h-auto w-[90px] sm:w-[60px] md:w-[100px]"
            />
          </a>
          <div className="text-white leading-tight ml-2 font-medium">
            <p className="text-[10px] sm:text-[10px] md:text-xs lg:text-sm">
              INDIRA COLLEGE OF <br />
              ENGINEERING & MANAGEMENT
            </p>
            <p className="text-[7px] sm:text-[9px] md:text-[11px] lg:text-xxs mt-[2px]">
              AN AUTONOMOUS INSTITUTE <br />
              AFFILIATED TO SAVITRIBAI PHULE UNIVERSITY (SPPU)
            </p>
          </div>
        </div>

        {/* Right Logo */}
        <div className="flex items-center flex-shrink-0 z-30 ml-2">
          <a href="/">
            <img
              src={autonomousLogo}
              alt="Autonomous Logo"
              className="h-auto w-[70px] sm:w-[60px] md:w-[100px]"
            />
          </a>
        </div>
      </div>

      {/* Color Layer */}
      <div className="absolute inset-0 bg-gray-900 z-10"></div>
    </nav>
  );
}
export default Navbar;
