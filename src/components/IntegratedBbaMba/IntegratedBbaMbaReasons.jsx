// import React from "react";
// import {
//   FaUniversity,
//   FaRegHandshake,
//   FaUsers,
//   FaBriefcase,
//   FaGlobe,
//   FaLaptopCode,
// } from "react-icons/fa";

// function IntegratedBbaMbaReasons() {
//   return (
//     <div className="relative py-8 bg-[#FCFAEE]">
//       <h2 className="text-4xl md:text-4xl font-bold text-center mb-6 z-10 relative text-[#555555]">
//         Why Choose the Integrated BBA-MBA Program at ICEM?
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-10 lg:px-16">
//         {[
//           {
//             icon: <FaUniversity className="text-4xl text-[#555555]" />,
//             text: "Specialized Programs in HR, Marketing & Finance",
//           },
//           {
//             icon: <FaRegHandshake className="text-4xl text-[#555555]" />,
//             text: "Global Exposure through International Business Practices & Foreign Visits",
//           },
//           {
//             icon: <FaUsers className="text-4xl text-[#555555]" />,
//             text: "100% Placement Assistance with a Strong Alumni Network",
//           },
//           {
//             icon: <FaBriefcase className="text-4xl text-[#555555]" />,
//             text: "Experiential Learning: Field Projects, Presentations, Role Plays & Case Studies",
//           },
//           {
//             icon: <FaGlobe className="text-4xl text-[#555555]" />,
//             text: "Leadership & Management Training through Outdoor Management Training, GUSTO, I-MUN, IPL, Youth Parliament & More!",
//           },
//           {
//             icon: <FaLaptopCode className="text-4xl text-[#555555]" />,
//             text: "Live Industry Sessions & Real-World Projects",
//           },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="bg-[#f7f3ef] shadow-lg p-6 rounded-lg flex items-center gap-4 hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#555555] transition-transform duration-300"
//           >
//             <div className="border-4 border-dotted border-[#f37021] rounded-full p-4 flex items-center justify-center">
//               {item.icon}
//             </div>
//             <p className="text-sm md:text-base text-gray-600">{item.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default IntegratedBbaMbaReasons;

import React from "react";
import {
  FaUniversity,
  FaRegHandshake,
  FaUsers,
  FaBriefcase,
  FaGlobe,
  FaLaptopCode,
} from "react-icons/fa";

function IntegratedBbaMbaReasons() {
  const iconSizeClass = "text-[25px] md:text-[56px]"; // Responsive icon sizing

  const cardData = [
    {
      icon: <FaUniversity className={`${iconSizeClass} text-gray-500`} />,
      text: "Specialized Programs in HR, Marketing & Finance",
    },
    {
      icon: <FaRegHandshake className={`${iconSizeClass} text-gray-500`} />,
      text:
        "Global Exposure through International Business Practices & Foreign Visits",
    },
    {
      icon: <FaUsers className={`${iconSizeClass} text-gray-500`} />,
      text: "100% Placement Assistance with a Strong Alumni Network",
    },
    {
      icon: <FaBriefcase className={`${iconSizeClass} text-gray-500`} />,
      text:
        "Experiential Learning: Field Projects, Presentations, Role Plays & Case Studies",
    },
    {
      icon: <FaGlobe className={`${iconSizeClass} text-gray-500`} />,
      text:
        "Leadership & Management Training through Outdoor Management Training, GUSTO, I-MUN, IPL, Youth Parliament & More!",
    },
    {
      icon: <FaLaptopCode className={`${iconSizeClass} text-gray-500`} />,
      text: "Live Industry Sessions & Real-World Projects",
    },
  ];

  return (
    <div className="relative py-6 md:py-12 bg-[#FCFAEE] overflow-hidden px-4 sm:px-6 md:px-16">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-[#555555]">
        Why Choose the Integrated BBA-MBA Program at ICEM?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-y-4 md:space-y-0 md:gap-8">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="bg-[#f7f3ef] shadow-md rounded-xl p-3 sm:p-4 md:p-6 flex flex-row items-center gap-3 sm:gap-4 md:gap-6 hover:scale-105 hover:border hover:border-[#555555] transition-transform"
          >
            <div className="w-auto flex justify-center">
              <div className="w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 border-dotted border-[#f37021] flex items-center justify-center">
                {item.icon}
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xs sm:text-sm md:text-base font-semibold text-[#333] leading-snug">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IntegratedBbaMbaReasons;
