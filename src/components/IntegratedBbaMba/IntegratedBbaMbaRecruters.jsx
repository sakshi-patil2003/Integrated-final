import React from 'react';
import logo2 from "/public/logos/philips.avif";
import logo4 from "/public/logos/jaspay.avif";
import logo3 from "/public/logos/dataaxle.avif";
import logo6 from "/public/logos/palo.avif";
import logo5 from '../../assets/images/MECH-images/force.avif'
import logo7 from '../../assets/images/MECH-images/faurecia.avif'
import logo8 from '/public/BBA-MBA/hdfcFirst.avif'
import logo9 from '/public/BBA-MBA/ab.avif'
import logo10 from '/public/BBA-MBA/amura.avif'
import logo11 from '/public/BBA-MBA/lodha.avif'
import logo12 from '/public/BBA-MBA/pwc.avif'
import logo13 from '/public/BBA-MBA/master.avif'
import logo14 from '/public/BBA-MBA/dataaxle.avif'
import logo15 from '/public/BBA-MBA/piaggio.avif'
import logo16 from '/public/BBA-MBA/epam.avif'
import logo17 from '/public/BBA-MBA/hdfc.avif'
import logo18 from '/public/BBA-MBA/itc.avif'
import logo19 from '/public/BBA-MBA/Mcafee.avif'


const IntegratedBbaMbaRecruiter = () => {
  const logos = [
     logo2, logo3, logo4, logo5, logo6, logo7, logo8,
    logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16,
    logo17, logo18, logo19
  ];

  return (
    <div className="logo-grid-section py-4 roboto-regular bg-[#FCFAEE] relative">
      {/* Floating Circle Badge */}
      <div className="text-center mb-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-[#555555]">
          Top <span className='text-[#f37021]'>Recruiters</span> At ICEM
        </h2>
      </div>
      <div className="logo-grid w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 px-6 md:px-16">
        {logos.map((logo, index) => (
          <div key={index} className="logo-item flex justify-center items-center bg-white shadow-lg hover:bg-[#FCFAEE] transition-colors duration-300">
            <img
              src={logo}
              alt={`Recruiter Logo ${index + 1}`}
              className="h-full w-full object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegratedBbaMbaRecruiter;
