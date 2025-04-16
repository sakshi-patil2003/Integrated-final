import React, { useEffect } from 'react';
import {
  FaStar,
  FaBuilding,
  FaUsers,
  FaLaptop,
  FaGraduationCap,
  FaChartLine,
  FaLaptopCode,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyImage from '../../assets/images/infra.jpg';
import img from '../../assets/images/highlight.png';

function ItStudying() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  const cards = [
    { icon: <FaStar className="text-[#390161] mr-4 text-4xl" />, text: '15+ YEARS OF IT EXCELLENCE' },
    { icon: <FaUsers className="text-[#390161] mr-4 text-4xl" />, text: '450+ INDUSTRY PARTNERS' },
    { icon: <FaBuilding className="text-[#390161] mr-4 text-4xl" />, text: 'EXPOSURE TO INDUSTRIAL GUEST LECTURES' },
    { icon: <FaLaptop className="text-[#390161] mr-4 text-4xl" />, text: 'INNOVATIVE R&D IN IT' },
    { icon: <FaGraduationCap className="text-[#390161] mr-4 text-4xl" />, text: 'IT and Apple Labs' },
    { icon: <FaChartLine className="text-[#390161] mr-4 text-4xl" />, text: 'EXCEPTIONAL GROWTH OPPORTUNITIES' },
  ];

  return (
    <div className="flex flex-col md:flex-row px-8 md:px-16 py-6 poppins-regular">
      {/* Left Side */}
      <div className="w-full md:w-[70%] pr-0 md:pr-8" data-aos="fade-right">
        <h1 className="text-4xl font-semibold text-left mb-4">Grow, Connect, Lead with ICEM!!</h1>
        <h1 className="text-2xl font-semibold text-[#390161] mb-4">Information Technology</h1>
        <p className="text-left text-md md:text-lg mb-2" data-aos="fade-up">
          Indira College of Engineering & Management offers a comprehensive Information Technology programme that blends theoretical knowledge with hands-on experience. Nestled within a vast, vibrant, and lush green campus, the institute provides an inspiring learning environment. The state-of-the-art infrastructure creates the perfect setting for students to thrive academically and personally. Our students gain exposure to advanced technologies, industrial practices, and expert mentoring, preparing them for a successful career in the engineering field.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-2 grid-rows-3 gap-6 mb-4 mt-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-lg shadow-[#390161]/50 flex justify-between items-center rounded-lg"
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
          <h2 className="text-3xl font-semibold text-center text-[#390161] mb-10">
           ICEM Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {/* Achievement 1 */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center mb-4">
                <FaChartLine className="text-[#390161] text-5xl mb-4" />
                <h3 className="text-lg font-bold text-center text-[#390161] mb-2">National Rankings</h3>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Ranked <span className="font-semibold text-[#390161]">49th</span> in Top 100 Private Engineering Institutes and <span className="font-semibold text-[#390161]">61st</span> in Top 140 Engineering Institutes by Times of India Engineering Colleges.
                </p>
              </div>
            </div>

            {/* Achievement 2 */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center mb-4">
                <FaLaptopCode className="text-[#390161] text-5xl mb-4" />
                <h3 className="text-lg font-bold text-center text-[#390161] mb-2">Smart India Hackathon</h3>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Winners of <span className="text-[#390161]">Smart India Hackathon</span> for 3 consecutive years organized by <span className="text-[#390161]">Ministry of HRD, AICTE</span> & <span className="font-semibold text-[#390161]">NASSCOM</span>.
                </p>
              </div>
            </div>

            {/* Achievement 3 */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center mb-4">
                <FaGraduationCap className="text-[#390161] text-5xl mb-4" />
                <h3 className="text-lg font-bold text-center text-[#390161] mb-2">National Education Award</h3>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Received <span className="font-semibold text-[#390161]">Outstanding Education Institute (West)</span> Award by National Education Awards <span className="font-semibold text-[#390161]">2018</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-[45%] mt-12 flex flex-col justify-center h-full">
        <img
          src={MyImage}
          alt="Indira College"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default ItStudying;
