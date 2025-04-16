import React from "react";
import { FaAward } from "react-icons/fa";
 
// Import your custom icons
import offlineIcon from '../../assets/images/bca/logo4.avif';
import durationIcon from '../../assets/images/bca/logo1.avif';
import feesIcon from '../../assets/images/bca/logo2.avif';
import recruitersIcon from '../../assets/images/bca/logo3.avif';
 
const data = [
  {
    icon: offlineIcon,
    value: "Programme Format",
    description: "Offline",
  },
  {
    icon: durationIcon,
    value: "Duration",
    description: "BBA: 3 Years\nMBA: 2 Years\nI-MBA: 5 Years",
  },
  {
    icon: feesIcon,
    value: "Programme Fees",
    description: "Rs.77,368.00/-",
  },
  {
    icon: recruitersIcon,
    value: "450+",
    description: "Total Recruiters",
  },
];
 
export default function IntegratedBbaMbaPointers() {
  return (
    <section className="bg-[#f7f3ef] py-4 md:py-12 px-8 md:px-16 font-sans">
      <div className=" w-auto grid md:grid-cols-2 gap-2 items-center overflow-hidden">
       
        {/* Left content */}
        <div className="space-y-4">
          <h2 className="text-2xl text-center md:text-left md:text-[44px] font-bold leading-tight text-gray-900">
            ICEM: The Gateway to
            <br />
            <span className="text-[#f37021]">Exceptional Careers</span>
          </h2>
          <p className="text-lg text-center md:text-left md:text-xl text-gray-700 font-medium mb-2">
            Your Pathway to Success and World-Class Opportunities
          </p>
        </div>
 
        {/* Right side: icons + badge */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
         
          {/* Grid of icons */}
          <div className="grid grid-cols-2 gap-12 w-full md:w-[80%]">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center space-x-4">
                <img
                  src={item.icon}
                  alt={`${item.value} Icon`}
                  className="w-8 md:w-12 h-8 md:h-12 mb-2 md:mb-0"
                />
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
 
          {/* Perfect circular badge */}
          <div className="w-30 md:w-50 aspect-square ml-20 md:ml-16 md:ml-10 rounded-full bg-[#f7f3ef] border-4 border-[#f37021] flex flex-col items-center justify-center shadow-lg">
            <FaAward className="text-[#f37021] text-3xl md:text-5xl mb-1" />
            <h1 className="text-[#555555] font-bold text-center text-sm md:text-xl leading-tight">
              <span className="text-[#f37021] font-bold">Highest CTC</span><br />
              32 LPA
            </h1>
          </div>
 
        </div>
      </div>
    </section>
  );
}