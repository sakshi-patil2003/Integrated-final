import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faRobot } from '@fortawesome/free-solid-svg-icons'; // Icons
import gearImage from '../../assets/images/tech-dots.avif'; // Background image
 
function AidsBrochure() {
  // **Desktop View (unchanged)**
  const renderDesktopView = () => (
    <div className="w-full bg-[#0c3249] p-8 rounded-3xl flex justify-between items-center mt-4  ">
      <div className="max-w-2/3 ">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faRobot} className="text-3xl text-[#41b9d0]" />
          <h2 className="text-2xl font-bold">Syllabus</h2>
        </div>
 
        <p className="text-lg text-gray-200 mt-4">
          Explore cutting-edge developments in AI and Data Science, including machine learning, deep learning, and data-driven decision-making.
        </p>
      </div>
 
     
      <div>
        {/* Anchor tag to trigger file download */}
        <a
          // href="#"
          // download="Brochure.pdf"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="border border-[#41b9d0] px-6 py-3 font-semibold rounded-3xl hover:bg-white hover:text-blue-800 hover:font-semibold transition duration-300 flex items-center space-x-2"
        >
          <FontAwesomeIcon icon={faDownload}  />
          <span>Download Brochure</span>
        </a>
      </div>
    </div>
  );
 
  // **Mobile View (modified to only show title and download button)**
  const renderMobileView = () => (
    <div className="w-full bg-[#0c3249] p-2 md:p-6 rounded-xl flex flex-col items-center mb-4 mt-4 space-y-4 ">
      <h2 className="text-2xl font-bold text-center">Syllabus</h2>
      <a
        href="/brochures/aids-brochure.pdf"
        download="AIDS-Brochure.pdf"
        className="bg-[#41b9d0] border-2 border-[#0c3249] text-white px-3 py-2 rounded-3xl hover:bg-[#1e5f76] transition duration-300 flex items-center justify-center space-x-2"
      >
        <FontAwesomeIcon icon={faDownload} />
        <span>Download Brochure</span>
      </a>
    </div>
  );
  
 
  return (
    <div
      className="bg-gradient-to-r from-[#0c3249] to-[#41b9d0] text-white shadow-lg h-auto md:h-48 px-8 md:px-16 poppins-regular relative"
      style={{
        backgroundImage: `url(${gearImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {/* Display different views based on screen size */}
      <div className="hidden md:block">{renderDesktopView()}</div> {/* Desktop View */}
      <div className="block md:hidden">{renderMobileView()}</div> {/* Mobile View */}
    </div>
  );
}
 
export default AidsBrochure;