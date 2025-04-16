import React from "react";
import backgroundImage from "../../assets/images/plane.avif"; // Make sure the path is correct

const AdmissionProcess = () => {
  // Function to scroll to top when Apply Now button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div
      className="bg-[#6095ff] px-8 md:px-16 py-10 text-center text-white shadow-lg relative bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-blue-800 opacity-80 z-0"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-semibold mb-6">Admission Process: Get Started Today! </h2>
        <p className="text-lg mb-6">
          Follow these simple steps to apply for the Computer Engineering
          programme at ICEM College Pune:
        </p>

        {/* Container for steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto ">
          {/* Step 1 */}
          <div
            className="relative bg-white text-[#ffffff] p-6 shadow-xl w-full"
            style={{ backgroundColor: "rgba(139, 197, 255, 0.5)" }}
          >
            <div
              className="absolute top-[-15px] left-[-15px] bg-[#6095ff] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "rgba(0, 102, 204, 0.9)" }}
            >
              1
            </div>
            <p className="text-lg">Fill out the online application form on our website.</p>
          </div>

          {/* Step 2 */}
          <div
            className="relative bg-white text-[#ffffff] p-6 shadow-xl w-full"
            style={{ backgroundColor: "rgba(139, 197, 255, 0.5)" }}
          >
            <div
              className="absolute top-[-15px] left-[-15px] bg-[#6095ff] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "rgba(0, 102, 204, 0.9)" }}
            >
              2
            </div>
            <p className="text-lg">Submit the required documents (mark sheets, ID, etc.)</p>
          </div>

          {/* Step 3 */}
          <div
            className="relative bg-white text-[#ffffff] p-6 shadow-xl w-full"
            style={{ backgroundColor: "rgba(139, 197, 255, 0.5)" }}
          >
            <div
              className="absolute top-[-15px] left-[-15px] bg-[#6095ff] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "rgba(0, 102, 204, 0.9)" }}
            >
              3
            </div>
            <p className="text-lg">Pay the application fee securely online.</p>
          </div>

          {/* Step 4 */}
          <div
            className="relative bg-white text-[#ffffff] p-6 shadow-xl w-full"
            style={{ backgroundColor: "rgba(139, 197, 255, 0.5)" }}
          >
            <div
              className="absolute top-[-15px] left-[-15px] bg-[#6095ff] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "rgba(0, 102, 204, 0.9)" }}
            >
              4
            </div>
            <p className="text-lg">Attend the counseling and interview session.</p>
          </div>

          {/* Step 5 */}
          <div
            className="relative bg-white p-6 shadow-xl w-full"
            style={{ backgroundColor: "rgba(139, 197, 255, 0.5)" }}
          >
            <div
              className="absolute top-[-15px] left-[-15px] bg-[#6095ff] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "rgba(0, 102, 204, 0.9)" }}
            >
              5
            </div>
            <p className="text-lg text-white">Confirm your seat and join ICEM College!</p>
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className="relative z-20 px-8 md:px-16 py-4">
        <div className="text-center mb-2">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 mt-2">
            Admissions Open for 2025!
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Secure your seat & start your journey in the world of technology with ICEM!
          </p>
          <button
            onClick={scrollToTop} // Call scrollToTop when the button is clicked
            className="bg-[#F7F0FC] text-[#161e3a] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#2241ac] hover:text-[#F7F0FC] transition-all duration-300 ease-in-out"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;
