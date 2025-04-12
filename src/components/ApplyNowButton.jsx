import React from "react";

function ApplyNowButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <div className="fixed right-[-48px] top-1/2 transform -translate-y-1/2 z-50">
      <a
        href="#apply"
        onClick={handleClick} // Call handleClick on click
        className="bg-gradient-to-b from-[#018699] to-[#003c84] text-white py-1 px-6 shadow-lg transition duration-300 flex items-center justify-center transform -rotate-90 hover:bg-blue-700 hover:underline hover:scale-105 cursor-pointer">
         Apply Now
      </a>
    </div>
  );
}

export default ApplyNowButton;
