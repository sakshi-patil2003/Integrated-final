import React, { useEffect } from 'react';
import {
  FaTools,
  FaIndustry,
  FaCogs,
  FaLightbulb,
  FaHandsHelping,
  FaChartLine,
  FaLaptopCode,
  FaGraduationCap,
} from 'react-icons/fa';
import indira from '../../assets/images/infra.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MechStudying() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row px-8 md:px-16 py-6 poppins-regular">
      {/* Left Section */}
      <div className="w-full md:w-[70%] pr-0 md:pr-8" data-aos="fade-right">
        <h1 className="text-4xl font-semibold text-left mb-4 text-[#01224F]">
          Invent. Integrate. Impact.
        </h1>
        <h1 className="text-2xl font-semibold text-[#FFC80F] mb-4">
          Mechanical Engineering
        </h1>
        <p
          className="text-left text-md md:text-lg mb-2 text-[#01224F]"
          data-aos="fade-up"
        >
          Indira College of Engineering & Management offers a comprehensive mechanical engineering program that blends theoretical knowledge with hands-on experience. Nestled within a vast, vibrant, and lush green campus, the institute provides an inspiring learning environment where innovation meets excellence. The fresh, open spaces and state-of-the-art infrastructure create the perfect setting for students to thrive academically and personally. Our students gain exposure to cutting-edge technologies, industrial practices, and expert mentoring, preparing them for a successful career in the engineering field.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 grid-rows-3 gap-6 mb-4">
          <div className="bg-white p-4 shadow-sm shadow-[#FFC80F] flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaTools className="text-[#01224F] mr-4 text-4xl" />
              <span className="text-sm text-center text-[#FFC80F]">2 Decades OF MECHANICAL EXCELLENCE</span>
            </span>
          </div>
          <div className="bg-white p-4 shadow-sm shadow-[#FFC80F] flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaIndustry className="text-[#01224F] mr-4 text-4xl" />
              <span className="text-sm text-center text-[#FFC80F]">450+ INDUSTRY PARTNERS</span>
            </span>
          </div>
          <div className="bg-white p-4 shadow-sm shadow-[#FFC80F] flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaCogs className="text-[#01224F] mr-4 text-4xl" />
              <span className="text-sm text-center text-[#FFC80F]">INNOVATIVE RESEARCH & DEVELOPMENT</span>
            </span>
          </div>
          <div className="bg-white p-4 shadow-sm shadow-[#FFC80F] flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaLightbulb className="text-[#01224F] mr-4 text-4xl" />
              <span className="text-sm text-center text-[#FFC80F]">EXPOSURE TO INDUSTRIAL GUEST LECTURES</span>
            </span>
          </div>
          <div className="bg-white p-4 shadow-sm shadow-[#FFC80F] flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaHandsHelping className="text-[#01224F] mr-4 text-4xl" />
              <span className="text-sm text-center text-[#FFC80F]">HANDS-ON TRAINING IN WORKSHOPS</span>
            </span>
          </div>
          <div className="bg-white p-4 shadow-sm shadow-[#FFC80F] flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaChartLine className="text-[#01224F] mr-4 text-4xl" />
              <span className="text-sm text-center text-[#FFC80F]">EXCEPTIONAL GROWTH OPPORTUNITIES</span>
            </span>
          </div>
        </div>

        {/* Our Achievements Section */}
        <div className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-center text-[#01224F] mb-10">
            ICEM Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {/* Achievement 1 */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center mb-4">
                <FaChartLine className="text-[#01224F] text-5xl mb-4" />
                <h3 className="text-lg font-semibold text-center text-[#FFC80F] mb-2">National Rankings</h3>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Ranked <span className="font-semibold text-[#01224F]">49th</span> in Top 100 Private Engineering Institutes and <span className="font-semibold text-[#01224F]">61st</span> in Top 140 Engineering Institutes by Times of India Engineering Colleges.
                </p>
              </div>
            </div>

            {/* Achievement 2 */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center mb-4">
                <FaLaptopCode className="text-[#01224F] text-5xl mb-4" />
                <h3 className="text-lg font-semibold text-center text-[#FFC80F] mb-2">Smart India Hackathon</h3>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Winners of <span className="text-[#01224F]">Smart India Hackathon</span> for 3 consecutive years organized by <span className="text-[#01224F]">Ministry of HRD, AICTE</span> & <span className="font-semibold text-[#01224F]">NASSCOM</span>.
                </p>
              </div>
            </div>

            {/* Achievement 3 */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center mb-4">
                <FaGraduationCap className="text-[#01224F] text-5xl mb-4" />
                <h3 className="text-lg font-semibold text-center text-[#FFC80F] mb-2">National Education Award</h3>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Received <span className="font-semibold text-[#01224F]">Outstanding Education Institute (West)</span> Award by National Education Awards <span className="font-semibold text-[#01224F]">2018</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[45%] mt-12 flex flex-col justify-center h-full">
        <div className="flex-1">
          <img src={indira} alt="Indira College" className="w-full h-full object-cover rounded-lg shadow-sm" />
        </div>
      </div>
    </div>
  );
}

export default MechStudying;
