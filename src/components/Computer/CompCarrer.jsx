import React from 'react';

// Import the images
import googleLogo from '/src/assets/images/Com-Images/Google.png';
import tcsLogo from '/src/assets/images/Com-Images/Tcs.avif';
import infosysLogo from '/src/assets/images/Com-Images/Infosys.avif';
import microsoftLogo from '/src/assets/images/Com-Images/Microsoft.avif';

const CompCarrer = () => {
  return (
    <div className="bg-gradient-to-r from-[#161e3a] via-[#2241ac] to-[#3473cd] text-[#F7F0FC] py-16 px-8 sm:px-12 shadow-lg transform transition-all duration-700 ease-in-out">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title Section */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#F7F0FC]">
          Career Prospects & Placements
        </h2>

        {/* Description Section */}
        <p className="text-lg sm:text-xl mb-8 leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
          With software development, AI, cybersecurity, and cloud computing booming, ICEM’s Computer Engineering graduates are in high demand. Our placement cell connects students with top recruiters like Google, Microsoft, Infosys, TCS, and Amazon, ensuring you step into the tech industry with confidence!
        </p>

        {/* Logos Section */}
        <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8">
          <div className="flex justify-center items-center md:p-4 hover:scale-110 transition-transform duration-300 ease-in-out">
            <img
              src={googleLogo} // Use the imported image
              alt="Google"
              className="max-w-full h-auto object-contain rounded-md"
            />
          </div>
          <div className="flex justify-center items-center md:p-4 hover:scale-110 transition-transform duration-300 ease-in-out">
            <img
              src={tcsLogo} // Use the imported image
              alt="TCS"
              className="max-w-full h-auto object-contain rounded-md"
            />
          </div>
          <div className="flex justify-center items-center md:p-4 hover:scale-110 transition-transform duration-300 ease-in-out">
            <img
              src={infosysLogo} // Use the imported image
              alt="Infosys"
              className="max-w-full h-auto object-contain rounded-md"
            />
          </div>
          <div className="flex justify-center items-center md:p-4 hover:scale-110 transition-transform duration-300 ease-in-out">
            <img
              src={microsoftLogo} // Use the imported image
              alt="Microsoft"
              className="max-w-full h-auto object-contain rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompCarrer;
