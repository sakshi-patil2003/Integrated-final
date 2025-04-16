// import img1 from '../../assets/images/Com-Images/5.png';
// import img2 from '../../assets/images/Com-Images/5.png';
// import img3 from '../../assets/images/Com-Images/5.png';
// function AidsReasons() {
  
//   return (
//     <div className="px-6 md:px-10 lg:px-16 py-8 bg-[#F6FBFF]">
//     {/* Background Images */}
//           <div className="absolute top-0 left-0 z-0 opacity-30">
//             <img src={img1} alt="" className="object-cover w-50 h-50" />
//           </div>
//           <div className="absolute top-0 right-0 z-0 opacity-30">
//             <img src={img3} alt="" className="object-contain h-100" />
//           </div>
//           <div className="absolute bottom-0 left-0 z-0 opacity-30">
//             <img src={img2} alt="" className="object-cover w-50 h-50" />
//           </div>
    
//       <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-center text-[#0c3249] mb-6">
//         Why Choose ICEM for Your AIDS Engineering Journey?
//       </h2>

//       {/* Grid Container */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 ">
//         {[
//           { icon: "🖥", title: "Industry-Integrated Curriculum", desc: "Learn trending tech like AI & Cloud computing!" },
//           { icon: "🚀", title: "Live Projects & Internships", desc: "Gain hands-on experience with real-world projects!" },
//           { icon: "🎓", title: "Expert Faculty & Industry Mentors", desc: "Learn from top professionals!" },
//           { icon: "💼", title: "Top Placements", desc: "Get hired by leading tech giants & startups!" },
//           { icon: "🌍", title: "Global Career Prospects", desc: "Opportunities in MNCs across the world!" },
//           { icon: "🏆", title: "Hackathons & Coding Competitions", desc: "Compete, innovate & build solutions!" },
//           { icon: "🏫", title: "State-of-the-Art Labs", desc: "High tech IT & Apple labs!" },
//           { icon: "🎉", title: "Exciting Campus Life", desc: "Sports, events & tech fests to fuel your passion!" },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="bg-white  p-6 text-center rounded-lg transition-transform transform hover:scale-105 hover:border border-[#117577]"
//           >
//             <div className="text-4xl text-[#390161] mb-4">{item.icon}</div>
//             <h3 className="text-xl font-semibold text-[#035450] mb-2">{item.title}</h3>
//             <p className="text-sm md:text-base text-gray-700">{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AidsReasons;

import React from "react";

import img1 from '../../assets/images/Com-Images/7.png';
import img2 from '../../assets/images/Com-Images/6.png';
import img3 from '../../assets/images/Com-Images/5.png';
import img4 from '../../assets/images/Com-Images/1 (2).png';
import img5 from '../../assets/images/Com-Images/2.png';
import img6 from '../../assets/images/Com-Images/3.png';
import img7 from '../../assets/images/Com-Images/4.png';
import img8 from '../../assets/images/Com-Images/8.png';
import img9 from '../../assets/images/5.png';
import img10 from '../../assets/images/6.png';
import img11 from '../../assets/images/7.png';

function AidsReasons() {
  return (
    <div className="relative py-8 bg-[#F6FBFF]">
      {/* Background Images */}
      <div className="absolute top-0 left-0 z-0 opacity-20">
        <img src={img1} alt="" className="object-cover w-50 h-50" />
      </div>
      <div className="absolute top-0 right-0 z-0 opacity-30">
        <img src={img3} alt="" className="object-contain h-100" />
      </div>
      <div className="absolute bottom-0 left-0 z-0 opacity-30">
        <img src={img2} alt="" className="object-cover w-50 h-50" />
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#117577] text-center mb-6 z-10 relative">
        Why Choose ICEM for Your Computer Engineering Journey?
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 z-10 relative px-6 md:px-10 lg:px-16">
        
        {/* Industry-Integrated Curriculum */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#117577] transition-shadow">
          <div className="text-[#8BC5FF]">
            <img src={img4} alt="" className="w-20 h-20 object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-[#117577] ">Industry-Integrated Curriculum</h3>
          <p className="text-sm md:text-base text-gray-700">Learn trending tech like AI, Cloud, & DevOps!</p>
        </div>

        {/* Live Projects & Internships */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#117577] transition-shadow">
          <div className="text-[#8BC5FF]">
            <img src={img5} alt="" className="w-20 h-20 object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-[#117577]">Live Projects & Internships</h3>
          <p className="text-sm md:text-base text-gray-700">Gain hands-on experience with real-world projects!</p>
        </div>

        {/* Expert Faculty & Industry Mentors */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#117577] transition-shadow">
          <div className="text-[#8BC5FF] ">
            <img src={img6} alt="" className="w-20 h-20 object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-[#117577]">Expert Faculty & Industry Mentors</h3>
          <p className="text-sm md:text-base text-gray-700">Learn from top professionals in the field!</p>
        </div>

        {/* Top Placements */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#117577] transition-shadow">
          <div className="text-[#8BC5FF]">
            <img src={img7} alt="" className="w-20 h-20 object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-[#117577]">Top Placements</h3>
          <p className="text-sm md:text-base text-gray-700">Get hired by leading tech giants & startups!</p>
        </div>

        {/* Global Career Prospects */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#117577] transition-shadow">
          <div className="text-[#8BC5FF]">
            <img src={img9} alt="" className="w-20 h-20 object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-[#117577]">Global Career Prospects</h3>
          <p className="text-sm md:text-base text-gray-700">Opportunities in MNCs across the world!</p>
        </div>

        {/* Hackathons & Coding Competitions */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#117577] transition-shadow">
          <div className="text-[#8BC5FF]">
            <img src={img10} alt="" className="w-20 h-20 object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-[#117577]">Hackathons & Coding Competitions</h3>
          <p className="text-sm md:text-base text-gray-700">Compete, innovate & build solutions!</p>
        </div>

        {/* State-of-the-Art Labs */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#117577] transition-shadow">
          <div className="text-[#8BC5FF]">
            <img src={img11} alt="" className="w-20 h-20 object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-[#117577]">State-of-the-Art Labs</h3>
          <p className="text-sm md:text-base text-gray-700">Work in high-tech IT & Apple labs!</p>
        </div>

        {/* Exciting Campus Life */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl hover:border-2 hover:scale-105 hover:border-[#117577] transition-shadow">
          <div className="text-[#8BC5FF]">
            <img src={img8} alt="" className="w-20 h-20 object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-[#117577]">Exciting Campus Life</h3>
          <p className="text-sm md:text-base text-gray-700">Sports, events & tech fests to fuel your passion!</p>
        </div>
      </div>
    </div>
  );
}

export default AidsReasons;
