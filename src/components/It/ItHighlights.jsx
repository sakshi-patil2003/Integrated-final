import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faAward, faMedal, faCertificate } from '@fortawesome/free-solid-svg-icons';

// Import the image
import bgImage from '../../assets/images/highbg.avif';

const ItHighlights = () => {
  return (
    <div
      className="poppins-regular"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="px-8 md:px-16 py-6">
        <h1 className="text-4xl font-bold text-center mb-8 poppins-bold text-[#390161]">
          ICEM Highlights
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#F7F0FC] p-6 shadow-lg text-left overflow-hidden rounded-lg">
            <div className="w-12 h-12 bg-[#390161] text-white rounded-full flex items-center justify-center mb-4 mx-auto">
              <FontAwesomeIcon icon={faTrophy} className="text-2xl" />
            </div>
            <p className="text-[#390161] poppins-regular">
              Ranked 49th in Top 100 Private Engineering Institutes and Ranked 61st in Top 140 Engineering Institutes conducted by Times of India Engineering Colleges.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F7F0FC] p-6 shadow-lg text-left overflow-hidden rounded-lg">
            <div className="w-12 h-12 bg-[#390161] text-white rounded-full flex items-center justify-center mb-4 mx-auto">
              <FontAwesomeIcon icon={faAward} className="text-2xl" />
            </div>
            <p className="text-[#390161] poppins-regular">
              Ranking Survey - 2019 Winners of SmartIndia Hackathon for consecutive three years organized by Ministry of HRD, AICTE in association with NASSCOM.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F7F0FC] p-6 shadow-lg text-left overflow-hidden rounded-lg">
            <div className="w-12 h-12 bg-[#390161] text-white rounded-full flex items-center justify-center mb-4 mx-auto">
              <FontAwesomeIcon icon={faMedal} className="text-2xl" />
            </div>
            <p className="text-[#390161] poppins-regular">
              Received Outstanding Education Institute (West) Award by National Education Awards 2018.
            </p>
          </div>

          {/* Card 4 */}
          {/* <div className="bg-[#F7F0FC] p-6 shadow-lg text-left overflow-hidden rounded-lg">
            <div className="w-12 h-12 bg-[#390161] text-white rounded-full flex items-center justify-center mb-4 mx-auto">
              <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
            </div>
            <p className="text-[#390161] poppins-regular">
              ICEM has been accredited with ‘B++’ grade by National Accreditation and Assessment Council (NAAC).
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default memo(ItHighlights);
