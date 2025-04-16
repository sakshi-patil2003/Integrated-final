import React from "react";
 

function AidsAdmisionCon() {
  const handleClick = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scroll effect
    });
  };
  return (
    <div className="bg-[#0c3249] text-white py-6 md:py-8 px-6  shadow-lg text-center ">
      <h2 className="text-2xl md:text-3xl font-bold text-[#41b9d0] mb-3">
        Engineering Admissions 2025 are now open!
      </h2>
      <p className="text-lg text-gray-200 mb-8">
        Step into the future with <span className="text-[#41b9d0] font-semibold">ICEM’s AI-DS Engineering</span> programme and become a tech innovator!
      </p>
      <a
        href="#apply"
        onClick={handleClick} // Call handleClick on click
        className="bg-white  text-[#0c3249] py-3 px-8 rounded-full text-xl font-semibold shadow-md hover:bg-gray-200 hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out mt-16">
         Apply Now
      </a>
 
    </div>
  );
}
 
export default AidsAdmisionCon;