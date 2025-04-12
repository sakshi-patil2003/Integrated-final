import React from "react";
import { FaRobot, FaIndustry, FaCar, FaBriefcase, FaGlobe, FaTrophy, FaMicrophone } from "react-icons/fa";
import gearImage from '../../assets/images/gears.png';
const reasons = [
  {
    icon: <FaRobot />,
    title: "Industry-Aligned Curriculum",
    description: "Learn automation, robotics, and advanced manufacturing!"
  },
  {
    icon: <FaIndustry />,
    title: "State-of-the-Art Labs",
    description: "Work on live projects with high-tech workshops, IT Labs, and Apple Labs."
  },
  {
    icon: <FaCar />,
    title: "Automobile & Aerospace Insights",
    description: "Get exposure to cutting-edge mechanical domains!"
  },
  {
    icon: <FaBriefcase />,
    title: "Top-Notch Placements",
    description: "Secure jobs with core and IT companies!"
  },
  {
    icon: <FaGlobe />,
    title: "Global Career Opportunities",
    description: "Shape the future of engineering worldwide!"
  },
  {
    icon: <FaTrophy />,
    title: "Thriving Sports Culture",
    description: "Stay active and build teamwork with top-class sports facilities!"
  },
  {
    icon: <FaMicrophone />,
    title: "Expert Guest Lectures",
    description: "Learn from industry leaders and mechanical pioneers!"
  },
  {
    icon: <FaTrophy />,
    title: "Mega Events & Competitions",
    description: "Engage in tech fests, project expos, and national-level challenges!"
  }
];

function MechReasons() {
  return (
    <div className="px-6 md:px-10 lg:px-16 py-8" style={{ backgroundColor: '#01224F' }}>
      <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center text-[#ffc80f] mb-6">
        Why Choose ICEM for Your Mechanical Engineering Journey?
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 ">
        {reasons.map((reason, index) => (
          <div key={index} className="bg-white shadow-md p-6 text-center rounded-lg hover:shadow-xl transition-shadow flex flex-col items-center hover:scale-105">
            <div className="circle-icon bg-[#ffc80f] rounded-full p-4 ">
              <div className="text-[#01224F] text-4xl">{reason.icon}</div>
            </div>
            <h3 className="text-xl font-semibold text-[#01224F] mb-2">{reason.title}</h3>
            <p className="text-sm md:text-base text-gray-700">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MechReasons;
