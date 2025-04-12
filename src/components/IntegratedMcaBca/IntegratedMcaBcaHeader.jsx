import React from 'react';
import logo from '../../src/assets/images/logos/ICEM Final LOGO.png';

function Header() {
  return (
    <header className="bg-gray-900 w-full text-white">
      <div className="flex items-center gap-4 px-4 sm:px-6 md:px-16 py-3">
        {/* Left Logo (Small Size) */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="ICEM Logo"
            className="h-auto max-w-[80px] sm:max-w-[100px] md:max-w-[120px]"
          />
        </div>

        {/* Heading */}
        <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-tight">
          Shree Chanakya Education Society's <br />
          <span className="text-primary-500">
            Indira College of Engineering and Management
          </span>
        </h1>
      </div>
    </header>
  );
}

export default Header;
