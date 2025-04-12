import React from 'react';

const ItBanner = () => {
  return (
    <div className=" py-8 px-8 sm:px-12 rounded-lg shadow-lg transform transition-all duration-700 ease-in-out">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title Section */}
        <h1 className="text-3xl sm:text-3xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Searching for the Best IT Engineering College in Pune?
        </h1>
        
        {/* Subheading */}
        <p className="text-lg sm:text-2xl font-semibold mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Your search ends at ICEM!
        </p>
        
        {/* Call-to-Action Button */}
        <div className="flex justify-center">
          <button className="bg-[#F7F0FC] text-[#39061] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#9002F5] hover:text-[#F7F0FC] transition-all duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItBanner;
