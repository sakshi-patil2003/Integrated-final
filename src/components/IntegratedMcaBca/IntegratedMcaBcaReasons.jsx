import React from "react";
import {
  FaLaptopCode,
  FaChalkboardTeacher,
  FaRobot,
  FaGraduationCap,
  FaHandshake,
  FaProjectDiagram,
} from "react-icons/fa";

function IntegratedMcaBcaReasons() {
  const iconSizeClass = "text-[25px]  md:text-[56px]"; // Smaller on mobile, original on desktop

  const cardData = [
    {
      icon: <FaLaptopCode className={`${iconSizeClass} text-gray-500`} />,
      title: "Strong foundation for high-growth IT careers",
    },
    {
      icon: <FaChalkboardTeacher className={`${iconSizeClass} text-gray-500`} />,
      title: "Regular pre-placement training by industry experts",
    },
    {
      icon: <FaRobot className={`${iconSizeClass} text-gray-500`} />,
      title: "Add-on certifications in AI, Data Science, IoT & more",
    },
    {
      icon: <FaGraduationCap className={`${iconSizeClass} text-gray-500`} />,
      title: "Academic Progression Programs",
    },
    {
      icon: <FaHandshake className={`${iconSizeClass} text-gray-500`} />,
      title: "100% placement support with active alumni network",
    },
    {
      icon: <FaProjectDiagram className={`${iconSizeClass} text-gray-500`} />,
      title: "Hands-on learning through projects, role plays & case studies",
    },
  ];

  return (
    <div className="relative py-6 md:py-12 bg-[#FCFAEE] overflow-hidden px-4 sm:px-6 md:px-16">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-[#555555]">
        Why Choose ICEM for Your Integrated BCA/MCA Journey?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-y-4 md:space-y-0 md:gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-[#F5F0EB] shadow-md rounded-xl p-3 sm:p-4 md:p-6 flex flex-row items-center gap-3 sm:gap-4 md:gap-6 hover:scale-105 hover:border hover:border-[#555555] transition-transform"
          >
            <div className="w-auto flex justify-center">
              <div className="w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 border-dotted border-[#f37021] flex items-center justify-center">
                {card.icon}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-[#333] leading-snug">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IntegratedMcaBcaReasons;
