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
import MyImage from '../../assets/images/Com-Images/ICEM - Landing Page Banner (Infra).jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AidsStudying() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row px-8 md:px-16 py-6 poppins-regular">
      {/* 70% Left Side */}
      <div className="w-full md:w-[70%] pr-0 md:pr-8" data-aos="fade-right">
        <h1 className="text-4xl font-semibold text-left mb-2">Grow, Connect, Lead with Indira!!</h1>
        <h1 className="text-2xl font-semibold text-[#117577]">AI-DS Engineering & Management</h1>
        <p className="text-left text-md md:text-lg mb-2" data-aos="fade-up">
          Indira College of Engineering & Management offers a comprehensive AI-DS Engineering program that
          blends theoretical knowledge with hands-on experience. Nestled within a vast, vibrant, and lush green campus, 
          the institute provides an inspiring learning environment. The state-of-the-art infrastructure create the perfect
          setting for students to thrive academically and personally. Our students gain exposure to Advanced technologies,
          industrial practices and expert mentoring, preparing them for a successful career in the engineering field.
        </p>

        {/* 2x3 Grid for Cards */}
        <div className="grid grid-cols-2 grid-rows-3 gap-2">
          {[
            { icon: <FaStar />, text: '2 DECADES OF ACADEMIC EXCELLENCE' },
            { icon: <FaUsers />, text: '450+ LEADING RECRUITERS' },
            { icon: <FaBuilding />, text: 'INDUSTRY GUEST LECTURE & MENTORSHIP' },
            { icon: <FaLaptop />, text: 'HIGHEST PACKAGE OFFERED' },
            { icon: <FaGraduationCap />, text: 'IT & APPLE LABS' },
            { icon: <FaChartLine />, text: 'EXCEPTIONAL GROWTH OPPORTUNITIES' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-lg shadow-blue-500/50 flex justify-between items-center rounded-lg"
              data-aos="zoom-in"
            >
              <span className="flex flex-col md:flex-row items-center">
                <span className="text-[#117577] mr-4 text-4xl">{item.icon}</span>
                <span className="text-sm text-center">{item.text}</span>
              </span>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
<div className="mt-16" data-aos="fade-up">
  <h2 className="text-3xl font-semibold text-center text-[#117577] mb-10">
    Our Achievements
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
    {/* Card 1 */}
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center mb-4">
        <FaChartLine className="text-[#117577] text-5xl mb-4" />
        <h3 className="text-lg font-semibold text-center text-[#003b4d] mb-2">National Rankings</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Ranked <span className=" fonttext-[#117577]">49th</span> in Top 100 Private Engineering Institutes and <span className="font-semibold text-[#117577]">61st</span> in Top 140 Engineering Institutes by Times of India Engineering Colleges.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center mb-4">
        <FaLaptopCode className="text-[#117577] text-5xl mb-4" />
        <h3 className="text-lg font-semibold text-center text-[#003b4d] mb-2">Smart India Hackathon</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Winners of <span className=" text-[#117577]">Smart India Hackathon</span> for 3 consecutive years organized by <span className=" text-[#117577]">Ministry of HRD, AICTE</span> & <span className="font-semibold text-[#117577]">NASSCOM</span>.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center mb-4">
        <FaGraduationCap className="text-[#117577] text-5xl mb-4" />
        <h3 className="text-lg font-semibold text-center text-[#003b4d] mb-2">National Education Award</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Received <span className="font-semibold text-[#117577]">Outstanding Education Institute (West)</span> Award by National Education Awards <span className="font-semibold text-[#117577]">2018</span>.
        </p>
      </div>
    </div>
  </div>
</div>
      </div>

      {/* 30% Right Side with Main Image */}
      <div className="w-full md:w-[45%] mt-12 flex flex-col justify-center h-full">
        <div className="flex-1">
          <img
            src={MyImage}
            alt="Indira College Image"
            className="w-full h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default AidsStudying;
