import React from "react";
import backgroundImage from "../../assets/images/plane.avif"; // Ensure the path is correct

const ItApply = () => {
  return (
    <div
      className="bg-[#ffffff] py-10 px-8 md:px-16 text-center text-white mb-12 shadow-lg relative bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Light gray overlay */}
      <div className="absolute inset-0 bg-[#F7F0FC] opacity-60 z-0"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-semibold text-[#390161] mb-6">Admission Process: Get Started Today!</h2>
        <p className="text-lg mb-6 text-[#390161]">
          Follow these simple steps to apply for the Information Technology program at ICEM College Pune:
        </p>

        {/* Container for steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className="relative bg-[#390161] p-6 shadow-xl w-full"
            >
              <div
                className="absolute top-[-15px] left-[-15px] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "#001E5D" }}
              >
                {step}
              </div>
              <p className="text-lg">
                {/* Step descriptions */}
                {step === 1 && "Fill out the online application form on our website."}
                {step === 2 && "Submit the required documents (mark sheets, ID, etc.)"}
                {step === 3 && "Pay the application fee securely online."}
                {step === 4 && "Attend the counseling and interview session."}
                {step === 5 && "Confirm your seat and join ICEM College!"}
              </p>
            </div>
          ))}
        </div>

        <button className=" bg-[#390161]  font-bold py-3 px-8 rounded-full text-xl hover:bg-[#001E5D] hover:text-white transition-all mt-8">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default ItApply;
