import React, { useEffect, useState } from "react";
import backgroundImage from "../../assets/images/plane.avif";

const AidsApply = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % 5);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative bg-[#0c3249] py-8 px-8 md:px-16 text-center text-white bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-[#0c3249] opacity-60 z-0"></div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-3xl font-semibold mb-6">
          Admission Process: Get Started Today!
        </h2>
        <p className="text-lg mb-6">
          Follow these simple steps to apply for the AI-DS Engineering
          programme at ICEM College Pune
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto">
          {[ "Fill out the online application form on our website.",
            "Submit the required documents (mark sheets, ID, etc.)",
            "Pay the application fee securely online.",
            "Attend the counseling and interview session.",
            "Confirm your seat and join ICEM College!"].map((text, index) => (
            <div
              key={index}
              className="relative bg-white p-6 shadow-xl w-full opacity-90 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ backgroundColor: "#41b9d0" }}
            >
              <div className="absolute top-[-15px] left-[-15px] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg bg-[#1e5f76]">
                {index + 1}
              </div>
              <p className="text-lg">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AidsApply;