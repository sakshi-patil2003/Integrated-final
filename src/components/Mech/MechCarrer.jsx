import React from 'react';

const MechCarreer = () => {
  return (
    <div className="relative px-8 py-1 md:py-8 sm:px-12 shadow-lg transform transition-all duration-700 ease-in-out mt-4">
      {/* Container with background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/src/assets/images/gear-a.avif')", // Your image path
        }}
      >
        {/* Overlay on the background image */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Title Section */}
        <h2 className="text-2xl sm:text-4xl font-bold md:mb-2 text-[#ff5d12]">
          Career Prospects & Placements
        </h2>

        {/* Description Section */}
        <p className="text-sm sm:text-xl font-bold text-white">
          Our students have been placed with highest packages (11-27 LPA) in top companies like Force Motors, Juspay, Data Axle, Philips, Nutanix, Mastercard and Sas.
        </p>
      </div>
    </div>
  );
};

export default MechCarreer;
