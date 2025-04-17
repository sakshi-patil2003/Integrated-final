import React from "react";
// Import React Icons
import { FaChalkboardTeacher, FaHourglassHalf , FaRupeeSign, FaUsers } from 'react-icons/fa';

const data = [
  {
    icon: <FaChalkboardTeacher className="text-[#134C93] text-4xl" />, // Notepad icon for Program Format
    value: "Program Format",
    description: "Offline",
  },
  {
    icon: <FaHourglassHalf  className="text-[#134C93] text-4xl" />, // Calendar icon for Duration
    value: "Duration",
    description: "4 Years",
  },
  {
    icon: <FaRupeeSign className="text-[#134C93] text-4xl" />, // Money icon for Fees
    value: "Program Fees",
    description: "Rs.77,368.00/-",
  },
  {
    icon: <FaUsers className="text-[#134C93] text-4xl" />, // Users icon for Recruiters
    value: "450+",
    description: "Total Recruiters",
  },
];

export default function CompPointers() {
  return (
    <section className="bg-[#f2f7fc] py-4 md:py-12 px-8 md:px-16 font-sans">
      <div className="w-auto grid md:grid-cols-2 gap-2 items-center overflow-hidden">
        
        {/* Left content */}
        <div className="space-y-4">
          <h2 className="text-2xl text-center md:text-left md:text-[44px] font-bold leading-tight text-gray-900">
            ICEM: The Gateway to
            <br />
            <span className="text-[#134C93]">Exceptional Careers</span>
          </h2>
          <p className="text-lg text-center md:text-left md:text-xl text-gray-700 font-medium mb-2">
            Your Pathway to Success and World-Class Opportunities
          </p>
        </div>

        {/* Right side: icons + badge */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          
          {/* Grid of icons */}
          <div className="grid grid-cols-2 gap-8 w-full md:w-[80%]">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center space-x-4">
                <div className="w-8 md:w-12 h-8 md:h-12 mb-2 md:mb-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-lg md:text-xl font-bold text-gray-800">{item.value}</div>
                  <div className="text-sm text-gray-600 font-medium">
                    {item.description.split("\n").map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        {idx < item.description.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
