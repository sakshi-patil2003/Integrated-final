import React, { useEffect } from 'react';
import {
  FaStar,
  FaBuilding,
  FaUsers,
  FaLaptop,
  FaGraduationCap,
  FaChartLine,
  FaTrophy,
  FaMedal,
  FaAward,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyImage from '../../assets/images/Com-Images/Indira-BCA.avif';

const highlights = [
  {
    icon: <FaMedal className="text-4xl text-[#f37021]" />,
    text: (
      <>
        Ranked <b>49th</b> in <b>Top 100</b> Private Engineering Institutes and Ranked <b>61st</b> in <b>Top 140 Engineering</b> Institutes conducted by <b>Times of India Engineering Colleges</b>.
      </>
    ),
  },
  {
    icon: <FaAward className="text-4xl text-[#f37021]" />,
    text: (
      <>
        Ranking Survey – <b>2019</b><br />
        Winners of <b>SmartIndia Hackathon</b> for consecutive three years organized by Ministry of <b>HRD, AICTE</b> in association with <b>NASSCOM</b>.
      </>
    ),
  },
  {
    icon: <FaTrophy className="text-4xl text-[#f37021]" />,
    text: (
      <>
        Received <b>Outstanding Education Institute (West)</b> Award by National Education <b>Awards 2018</b>.
      </>
    ),
  },
];

const IntegratedBcaMcaStuddying = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="w-full bg-[#FCFAEE] py-10 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left Content */}
        <div className="w-full md:w-[60%]" data-aos="fade-right">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#555555] mb-2">
            Invent, Integrate, Impact.
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#f37021] mb-4">
            Integrated BCA + MCA
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 text-[#555555]">
            Indira College of Engineering & Management offers a future-focused <b>5-year Integrated BCA-MCA course after 12th,</b>
            blending tech education with hands-on experience. The campus features <b>advanced computer labs</b>, modern <b>libraries</b>,
            digital <b>laboratories</b>, spacious <b>hostels</b>, reliable <b>transportation</b>, a hygienic <b>canteen</b>, and top-notch <b>sports</b> facilities.
            With top tech <b>events</b>, expert mentorship, and an industry-aligned curriculum, it's one of the <b>best colleges for
            integrated BCA MCA.</b>
          </p>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { icon: <FaStar />, label: '2 DECADES OF ACADEMIC EXCELLENCE' },
              { icon: <FaUsers />, label: '450+ LEADING RECRUITERS' },
              { icon: <FaBuilding />, label: 'INDUSTRY MENTORSHIP' },
              { icon: <FaLaptop />, label: 'TOP PLACEMENTS OFFERED' },
              { icon: <FaGraduationCap />, label: 'IT & APPLE LABS' },
              { icon: <FaChartLine />, label: 'INTEGRATED SPORTS INFRASTRUCTURE' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FCFAEE] p-4 shadow-md border border-[#f37021] rounded-lg flex items-center"
                data-aos="zoom-in"
              >
                <div className="text-2xl sm:text-3xl text-[#555555] mr-4">
                  {item.icon}
                </div>
                <p className="text-sm sm:text-base text-[#333]">{item.label}</p>
              </div>
            ))}
          </div>

       
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[40%] flex justify-center md:mt-12" data-aos="fade-left">
          <div className="w-full max-w-md rounded-lg overflow-hidden">
            <img
              src={MyImage}
              alt="Indira College"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
         {/* Highlights Section */}
         <h1 className="text-2xl sm:text-3xl font-bold text-[#f37021] text-center mb-2">ICEM Highlights</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#f37021]/20 to-[#FCFAEE] rounded-xl p-6 shadow-sm flex flex-col items-center text-center max-w-xs mx-auto"
                data-aos="fade-up"
              >
                <div className="mb-4">{item.icon}</div>
                <p className="text-[#555555] text-sm sm:text-base leading-relaxed break-words">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
    </div>
  );
};

export default IntegratedBcaMcaStuddying;
