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

function ItStudying() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  const cards = [
    { icon: <FaStar className="text-[#390161] mr-4 text-4xl" />, text: '2 Decades OF MECHANICAL EXCELLENCE' },
    { icon: <FaUsers className="text-[#390161] mr-4 text-4xl" />, text: '450+ INDUSTRY PARTNERS' },
    { icon: <FaBuilding className="text-[#390161] mr-4 text-4xl" />, text: 'EXPOSURE TO INDUSTRIAL GUEST LECTURES' },
    { icon: <FaLaptop className="text-[#390161] mr-4 text-4xl" />, text: 'INNOVATIVE R&D IN IT' },
    { icon: <FaGraduationCap className="text-[#390161] mr-4 text-4xl" />, text: 'IT and Apple Labs' },
    { icon: <FaChartLine className="text-[#390161] mr-4 text-4xl" />, text: 'EXCEPTIONAL GROWTH OPPORTUNITIES' },
  ];

  return (
    <>
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row px-6 md:px-12 py-8 gap-10 poppins-regular">
        {/* Left Side */}
        <div className="w-full lg:w-3/5" data-aos="fade-right">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Grow, Connect, Lead with ICEM!!</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-[#390161] mb-4">Information Technology</h2>
          <p className="text-md md:text-lg mb-4" data-aos="fade-up">
            Indira College of Engineering & Management offers a comprehensive Information Technology programme that blends theoretical knowledge with hands-on experience. Nestled within a vast, vibrant, and lush green campus, the institute provides an inspiring learning environment. The state-of-the-art infrastructure creates the perfect setting for students to thrive academically and personally. Our students gain exposure to advanced technologies, industrial practices, and expert mentoring, preparing them for a successful career in the engineering field.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow-lg shadow-[#390161]/30 flex items-start rounded-lg"
                data-aos="zoom-in"
              >
                <div className="flex items-center">
                  {card.icon}
                  <span className="text-sm md:text-base text-left">{card.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-2/5 flex justify-center items-center mb-8 md:mb-0" data-aos="fade-left">
          <div className="w-full h-full max-h-[600px]">
            <img
              src={MyImage}
              alt="Indira College"
              className="w-full h-full object-cover object-bottom "
            />
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <section className="px-6 py-6 " data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#390161] mb-6 md:mb-8">
          ICEM Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Highlight 1 */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full">
            <FaChartLine className="text-[#390161] text-5xl mb-4" />
            <h3 className="text-lg font-bold text-[#390161] mb-2">National Rankings</h3>
            <p className="text-gray-700 text-base">
              Ranked <span className="font-semibold text-[#390161]">49th</span> in Top 100 Private Engineering Institutes and <span className="font-semibold text-[#390161]">61st</span> in Top 140 Engineering Institutes by Times of India Engineering Colleges.
            </p>
          </div>

          {/* Highlight 2 */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full">
            <FaLaptopCode className="text-[#390161] text-5xl mb-4" />
            <h3 className="text-lg font-bold text-[#390161] mb-2">Smart India Hackathon</h3>
            <p className="text-gray-700 text-base">
              Winners of <span className="text-[#390161]">Smart India Hackathon</span> for 3 consecutive years organized by <span className="text-[#390161]">Ministry of HRD, AICTE</span> & <span className="font-semibold text-[#390161]">NASSCOM</span>.
            </p>
          </div>

          {/* Highlight 3 */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full">
            <FaGraduationCap className="text-[#390161] text-5xl mb-4" />
            <h3 className="text-lg font-bold text-[#390161] mb-2">National Education Award</h3>
            <p className="text-gray-700 text-base">
              Received <span className="font-semibold text-[#390161]">Outstanding Education Institute (West)</span> Award by National Education Awards <span className="font-semibold text-[#390161]">2018</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ItStudying;
