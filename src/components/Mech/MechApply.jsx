import React from "react";
import backgroundImage from "../../assets/images/plane.avif"; // Make sure the path is correct

const MechApply = () => {
  // Function to scroll to the top of the page
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div
      className="bg-[#01224F] py-10 px-8 md:px-16 text-center text-white mb-12 shadow-lg relative bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Light gray overlay */}
      <div className="absolute inset-0 bg-[#01224F] opacity-60 z-0"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-semibold mb-6">Admission Process: Get Started Today!</h2>
        <p className="text-lg mb-6">
          Follow these simple steps to apply for the Mechanical Engineering
          program at ICEM College Pune:
        </p>

        {/* Container for steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto">
          {/* Step 1 */}
          <div
            className="relative bg-white p-6 shadow-xl w-full"
          >
            <div
              className="font-bold absolute top-[-15px] left-[-15px] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#FFB700 ", color: "white" }}
            >
              1
            </div>
            <p className="text-lg text-black">Fill out the online application form on our website.</p>
          </div>

          {/* Step 2 */}
          <div
            className="relative bg-white p-6 shadow-xl w-full"
          >
            <div
              className="font-bold absolute top-[-15px] left-[-15px] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#FFB700 ", color: "white" }}
            >
              2
            </div>
            <p className="text-lg text-black">Submit the required documents (mark sheets, ID, etc.)</p>
          </div>

          {/* Step 3 */}
          <div
            className="relative bg-white p-6 shadow-xl w-full"
          >
            <div
              className="font-bold absolute top-[-15px] left-[-15px] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#FFB700 ", color: "white" }}
            >
              3
            </div>
            <p className="text-lg text-black">Pay the application fee securely online.</p>
          </div>

          {/* Step 4 */}
          <div
            className="relative bg-white p-6 shadow-xl w-full"
          >
            <div
              className="font-bold absolute top-[-15px] left-[-15px] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#FFB700 ", color: "white" }}
            >
              4
            </div>
            <p className="text-lg text-black">Attend the counseling and interview session.</p>
          </div>

          {/* Step 5 */}
          <div
            className="relative bg-white p-6 shadow-xl w-full"
          >
            <div
              className="font-bold absolute top-[-15px] left-[-15px] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#FFB700 ", color: "white" }}
            >
              5
            </div>
            <p className="text-lg text-black">Confirm your seat and join ICEM College!</p>
          </div>
        </div>

        <button
          className="bg-white text-[#FFB700] font-bold py-3 px-8 rounded-full text-xl hover:bg-gray-200 transition-all mt-8"
          onClick={handleScrollToTop} // Add the onClick handler here
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default MechApply;
