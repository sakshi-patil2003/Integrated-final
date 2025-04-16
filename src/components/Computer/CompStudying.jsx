import React, { useEffect, memo } from 'react';
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
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyImage from '../../assets/images/infra.jpg';

const cardData = [
  { icon: <FaTools className="text-[#134C93] mr-4 text-4xl" />, text: '15+ YEARS OF IT EXCELLENCE' },
  { icon: <FaIndustry className="text-[#134C93] mr-4 text-4xl" />, text: '450+ INDUSTRY PARTNERS' },
  { icon: <FaCogs className="text-[#134C93] mr-4 text-4xl" />, text: 'INNOVATIVE R&D IN IT' },
  { icon: <FaLightbulb className="text-[#134C93] mr-4 text-4xl" />, text: 'EXPOSURE TO INDUSTRIAL GUEST LECTURES' },
  { icon: <FaHandsHelping className="text-[#134C93] mr-4 text-4xl" />, text: 'IT and Apple Labs' },
  { icon: <FaChartLine className="text-[#134C93] mr-4 text-4xl" />, text: 'EXCEPTIONAL GROWTH OPPORTUNITIES' },
];

function ItStudying() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="flex flex-col md:flex-row px-8 md:px-16 py-6 poppins-regular">
      {/* Left Content */}
      <div className="w-full md:w-[70%] md:pr-8" data-aos="fade-right">
        <h1 className="text-4xl font-semibold mb-4">Grow, Connect, Lead with ICEM!!</h1>
        <h2 className="text-2xl font-semibold text-[#134C93] mb-4">Computer Engineering</h2>
        <p className="text-md md:text-lg mb-2" data-aos="fade-up">
          Indira College of Engineering & Management offers a comprehensive Information Technology program that blends theoretical knowledge with hands-on experience. Nestled within a vast, vibrant, and lush green campus, the institute provides an inspiring learning environment. The state-of-the-art infrastructure creates the perfect setting for students to thrive academically and personally. Our students gain exposure to Advanced technologies, industrial practices and expert mentoring, preparing them for a successful career in the engineering field.
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-6 my-6">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#F7F0FC] p-4 shadow-lg shadow-[#134C93]/50 flex items-center rounded-lg"
              data-aos="zoom-in"
            >
              <span className="flex flex-col md:flex-row items-center">
                {card.icon}
                <span className="text-sm text-center">{card.text}</span>
              </span>
            </div>
          ))}
        </div>

        {/* Our Achievements Section */}
        <div className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-center text-[#134C93] mb-10">
          ICEM Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center mb-4">
                <FaChartLine className="text-[#134C93] text-5xl mb-4" />
                <h3 className="text-lg font-semibold text-center text-[#003b4d] mb-2">National Rankings</h3>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Ranked <span className="font-semibold text-[#134C93]">49th</span> in Top 100 Private Engineering Institutes and <span className="font-semibold text-[#134C93]">61st</span> in Top 140 Engineering Institutes by Times of India Engineering Colleges.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center mb-4">
                <FaLaptopCode className="text-[#134C93] text-5xl mb-4" />
                <h3 className="text-lg font-semibold text-center text-[#003b4d] mb-2">Smart India Hackathon</h3>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Winners of <span className="text-[#134C93]">Smart India Hackathon</span> for 3 consecutive years organized by <span className="text-[#134C93]">Ministry of HRD, AICTE</span> & <span className="font-semibold text-[#134C93]">NASSCOM</span>.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center mb-4">
                <FaGraduationCap className="text-[#134C93] text-5xl mb-4" />
                <h3 className="text-lg font-semibold text-center text-[#003b4d] mb-2">National Education Award</h3>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Received <span className="font-semibold text-[#134C93]">Outstanding Education Institute (West)</span> Award by National Education Awards <span className="font-semibold text-[#134C93]">2018</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[45%] mt-12 flex justify-center h-full">
        <img
          src={MyImage}
          alt="Indira Campus Infrastructure"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default memo(ItStudying);
