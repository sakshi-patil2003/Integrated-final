import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function IntegratedBbaMbaBrochure() {
  const handleDownloadClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to top
  };

  return (
    <div className="flex justify-between items-center bg-[#f7f3ef] h-48 px-8 md:px-16 poppins-regular">
      <div className="w-full bg-[#FCFAEE] p-6 rounded-3xl flex flex-col md:flex-row justify-between items-center border-1 border-[#f37021]">
        <div className="max-w-full md:max-w-2/3 mb-4 md:mb-0">
          <h2 className="text-2xl text-[#f37021] font-bold mb-4">Syllabus</h2>
          <p className="text-lg text-[#555555] hidden sm:block">
          Build a strong foundation in management with specialization-ready skills in marketing, finance, HR, analytics, and entrepreneurship – all in one integrated path.
          </p>
        </div>
        <div>
          <a
            // href="/path/to/your/dummy/brochure.pdf"
            // download="Brochure.pdf"
            onClick={handleDownloadClick}
            className="bg-[#FCFAEE] border-2 border-[#f37021] text-[#f37021] px-6 py-3 rounded-3xl hover:bg-[#555555] hover:text-[#F7F0FC] hover:border-[#555555] transition duration-300 flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faDownload} />
            <span>Download Brochure</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default IntegratedBbaMbaBrochure;
