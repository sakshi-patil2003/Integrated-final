import React from 'react';
 
import logo1 from '../../../public/logos/capgi-min.avif';
import logo2 from  '../../../public/logos/sas-min.avif';
import logo3 from  '../../../public/logos/yash-min.avif';
import logo4 from  '../../../public/logos/philips-min.avif';
import logo5 from  '../../../public/logos/jaspay-min.avif';
import logo6 from  '../../../public/logos/zs-min.avif';
import logo7 from  '../../../public/logos/e-zest-min.avif';
import logo8 from  '../../../public/logos/veritas-min.avif';
import logo9 from  '../../../public/logos/avalara-min.avif';
import logo10 from '../../../public/logos/fis-min.avif'; 
import logo11 from '../../../public/logos/gslab-min.avif'; 
import logo12 from '../../../public/logos/infosys-min.avif'; 
import logo13 from '../../../public/logos/kpit-min.avif'; 
import logo14 from '../../../public/logos/kpmg-min.avif'; 
import logo15 from '../../../public/logos/l&T-min.avif'; 
import logo16 from '../../../public/logos/nttdata-min.avif'; 
import logo17 from '../../../public/logos/palo-min.avif'; 
import logo18 from '../../../public/logos/Persistent-min.avif'; 
import logo19 from '../../../public/logos/pubmatic-min.avif'; 
import logo20 from '../../../public/logos/sigma-min.avif'; 
import logo21 from '../../../public/logos/Tcs-min.avif'; 
import logo22 from '../../../public/logos/tibco-min.avif'; 
import logo23 from '../../../public/logos/wipro-min.avif'; 
import logo24 from '../../../public/logos/dataaxle-min.avif';
import logo25 from '../../../public/logos/thermax.avif'; 
import logo26 from '../../../public/logos/mastercard.avif'; 
import logo27 from '../../../public/logos/nutanix.avif'; 
import logo28 from '../../../public/logos/prgx.avif'; 
import logo29 from '../../../public/logos/schlumberger.avif'; 
import logo30 from '../../../public/logos/tetrapak.avif'; 
 
const IntegratedMcaBCaRecruiters = () => {
  const logos = [
    logo1, logo2, logo24, logo4, logo5, logo6,
    logo25, logo26, logo30, logo28, logo29, logo27,
    logo7, logo8, logo9, logo10, logo11, logo12,
    logo13, logo14, logo15, logo16, logo17, logo18,
    logo19, logo20, logo21, logo22, logo23, logo3,
     
  ];
 
  return (
    <div className="logo-grid-section py-4 roboto-regular bg-[#FCFAEE] px-4 md:px-16 overflow-hidden">
      <div className="text-center mb-4">
        <h2 className="text-3xl  lg:text-4xl xl:text-4xl font-semibold text-[#555555]">
          Top <span className="text-[#f37021]">Recruiters</span> At
           ICEM
        </h2>
      </div>
      <div className="logo-grid w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6  gap-4 ">
        {/* Map over the logos and display them in a grid */}
        {logos.map((logo, index) => (
          <div key={index} className="logo-item flex justify-center items-center bg-white shadow-lg  bg-[#F5F0EB] hover:bg-[#FCFAEE] transition-colors duration-300">
            <img
              src={logo}
              alt={`Recruiter Logo ${index + 1}`}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default IntegratedMcaBCaRecruiters;