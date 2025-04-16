// import { useEffect } from 'react';
// import { FaCog, FaTools, FaDollarSign } from 'react-icons/fa';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// function EntcPointers() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div className="py-8 flex justify-center mx-16">
//       {/* Single Card Container */}
//       <div className="bg-[#006BB3] p-8 shadow-lg rounded-3xl  flex flex-col md:flex-row items-center md:items-stretch text-center gap-6 md:gap-12 w-full ">
        
//         {/* Card 1: Program Format */}
//         <div className="flex flex-col items-center flex-1" data-aos="fade-up">
//           <FaCog size={50} className="text-[#013842]" />
//           <h2 className="text-lg md:text-2xl font-medium text-white">Program Format</h2>
//           <p className="mt-2 text-sm md:text-xl font-bold text-white">Offline</p>
//         </div>

//         {/* Divider (optional, for separation) */}
//         <div className="hidden md:block w-[2px] bg-white h-full"></div>

//         {/* Card 2: Duration */}
//         <div className="flex flex-col items-center flex-1" data-aos="fade-up">
//           <FaTools size={50} className="text-[#013842]" />
//           <h2 className="text-lg md:text-2xl font-medium text-white">Duration</h2>
//           <p className="mt-2 text-sm md:text-xl font-bold text-white">4 Years</p>
//         </div>

//         {/* Divider */}
//         <div className="hidden md:block w-[2px] bg-white h-full"></div>

//         {/* Card 3: Highest CTC */}
//         <div className="flex flex-col items-center flex-1" data-aos="fade-up">
//           <FaDollarSign size={50} className="text-[#013842]" />
//           <h2 className="text-lg md:text-2xl font-medium text-white">Highest CTC</h2>
//           <p className="mt-2 text-sm md:text-xl font-bold text-white">27 LPA</p>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default EntcPointers;


import React from "react";

// Import your custom icons
import offlineIcon from '../../assets/images/bca/logo4.avif';
import durationIcon from '../../assets/images/bca/logo1.avif';
import feesIcon from '../../assets/images/bca/logo2.avif';
import recruitersIcon from '../../assets/images/bca/logo3.avif';

const data = [
  {
    icon: offlineIcon,
    value: "Program Format",
    description: "Offline",
  },
  {
    icon: durationIcon,
    value: "Duration",
    description: "4 Years",
  },
  {
    icon: feesIcon,
    value: "Program Fees",
    description: "Rs.77,368.00/-",
  },
  {
    icon: recruitersIcon,
    value: "450+",
    description: "Total Recruiters",
  },
];

export default function AidsPointers() {
  return (
    <section className="bg-[#f7fcfc] py-4 md:py-12 px-8 md:px-16 font-sans">
      <div className=" w-auto grid md:grid-cols-2 gap-2 items-center overflow-hidden">
        
        {/* Left content */}
        <div className="space-y-4">
          <h2 className="text-2xl text-center md:text-left md:text-[44px] font-bold leading-tight text-gray-900">
            ICEM: The Gateway to
            <br />
            <span className="text-[#117577]">Exceptional Careers</span>
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

          {/* Perfect circular badge
          <div className="w-30 md:w-50 aspect-square ml-20 md:ml-16 md:ml-10 rounded-full bg-[#f7f3ef] border-4 border-[#f37021] flex flex-col items-center justify-center shadow-lg">
            <FaAward className="text-[#f37021] text-3xl md:text-5xl mb-1" />
            <h1 className="text-[#555555] font-bold text-center text-sm md:text-xl leading-tight">
              <span className="text-[#f37021] font-bold">Highest CTC</span><br />
              27 LPA
            </h1>
          </div> */}

        </div>
      </div>
    </section>
  );
}
