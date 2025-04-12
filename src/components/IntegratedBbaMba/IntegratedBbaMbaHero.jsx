import React from 'react';
import bgImage from '/public/BBA-MBA/bbabg.jpg';

function BcaHero() {
  return (
    <div className="relative flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 lg:px-6 py-6 lg:py-0 overflow-hidden bg-[#f7f3ef] min-h-screen">
      
      {/* Background Image */}
      <div
        className="absolute top-0 -left-3 w-full h-full bg-cover bg-center hidden sm:block"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'right center',
          backgroundSize: 'contain', // Changed to 'cover' for better full-screen coverage
        }}
      ></div>

      {/* Optional Overlay (opacity set to 0 for now) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0"></div>

      {/* Left Content */}
      <div className="relative z-10 text-black w-full lg:w-1/2 flex flex-col items-start text-left px-4 sm:px-8 lg:px-4 mt-20">
        
        {/* Banner Box */}
        <div className="inline-block">
          <div className="bg-transparent border font-bold border-[#ff9900] text-[#600000] px-4 py-1 text-base sm:text-lg md:text-3xl font-semibold rounded-t-md tracking-wide">
            ADMISSIONS OPEN FOR
          </div>
          <div className="bg-[#f37021] text-black px-6 py-3 rounded-b-md shadow-md">
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold">Integrated</div>
            <div className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">BBA + MBA</div>
          </div>
        </div>

        <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
          <span className="text-sm sm:text-base md:text-xl lg:text-3xl block">(Affiliated to SPPU, Pune University)</span>
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl block mt-2">
            <span className="text-[#f37021]">Pune's Top</span> Management <br /> Education Group<br />
            Indira Group of Institutes
          </span>
        </h1>
      </div>

      {/* Form Section */}
      <div className="relative z-10 w-full lg:w-1/2 flex justify-end items-center min-h-screen px-4 sm:px-6 py-6">
        <div
          className="w-full max-w-sm p-4 sm:p-6 rounded-lg shadow-lg border-2 bg-white/80 backdrop-blur"
          style={{
            borderImage: "linear-gradient(to right, #f37021, #f37021) 1",
          }}
        >
          <h2 className="text-black text-xl sm:text-2xl font-semibold mb-4 text-center">Apply Now</h2>

          <form className="space-y-3 sm:space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-transparent border border-black text-black placeholder-gray-800 focus:outline-none focus:border-[#018697]"
              required
            />
            <input
              type="tel"
              placeholder="Mobile No."
              className="w-full p-3 rounded-lg bg-transparent border border-black text-black placeholder-gray-800 focus:outline-none focus:border-[#018697]"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-transparent border border-black text-black placeholder-gray-800 focus:outline-none focus:border-[#018697]"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#f37021] text-white font-semibold p-3 rounded-lg hover:bg-[#f78e4f] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BcaHero;
