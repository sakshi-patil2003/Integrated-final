import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import brochureBg from '../../assets/images/Entc-Images/entc-syllabus_bg.avif'; // Import the gear image
 
function EntcBrochure() {
  return (
    <div
      className="flex justify-center items-center bg-[#F1F5F9] text-white shadow-lg h-auto px-4 md:px-16 py-1 md:py-6 poppins-regular relative"
      style={{
        backgroundImage: `url(${brochureBg}), url(${brochureBg})`,
        backgroundPosition: 'left bottom, right top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      <div className="w-auto bg-[#026670] p-3 rounded-3xl flex flex-col md:flex-row justify-between items-center">
        {/* Left Part (Title and Description) */}
        <div className=" md:mb-0 text-center md:text-left">
          <h2 className="text-md md:text-2xl font-bold mb-2 md:mb-4 text-white">Syllabus</h2>
          <p className="text-lg hidden sm:block text-white">
          Explore the latest in Electronics and Telecommunication, including VLSI design, embedded systems, signal processing, and IoT-based communication.
          </p>
        </div>
 
        {/* Download Button */}
        <div className="text-center md:text-right">
          <button className="bg-[#9FEDD7] border-2 border-[#026670] text-[#026670] px-2 py-1 rounded-3xl hover:bg-[#A2F5E1] transition duration-300 flex justify-center md:justify-start items-center space-x-2 text-sm">
            <FontAwesomeIcon icon={faDownload} />
            <span>Download Brochure</span>
          </button>
        </div>
      </div>
    </div>
  );
}
 
export default EntcBrochure;