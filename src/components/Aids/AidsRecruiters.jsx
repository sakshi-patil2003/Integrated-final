import React, { useEffect, useState } from 'react';

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
import logo18 from '../../../public/logos/persistent-min.avif'; 
import logo19 from '../../../public/logos/pubmatic-min.avif'; 
import logo20 from '../../../public/logos/sigma-min.avif'; 
import logo21 from '../../../public/logos/tcs-min.avif'; 
import logo22 from '../../../public/logos/tibco-min.avif'; 
import logo23 from '../../../public/logos/wipro-min.avif'; 
import logo24 from '../../../public/logos/dataaxle-min.avif'; 

const CompRecruiter = () => {
  const [isVisible, setIsVisible] = useState(true);

  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
    logo13, logo14, logo15, logo16, logo17, logo18,
    logo19, logo20, logo21, logo22, logo23, logo24
  ];

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="logo-slider-section py-4 roboto-regular">
      <div className="text-center mb-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold">
          <span >Top Recruiters</span> 
        </h2>
      </div>
      <div className="logo-slider relative overflow-hidden w-full">
        <div className={`logo-slider-track flex ${isVisible ? 'animate' : ''}`}>
          {/* Map over the logos and display them */}
          {logos.map((logo, index) => (
            <div key={index} className="logo-slide flex-none mx-3 sm:mx-4 md:mx-5">
              <img
                src={logo}
                alt={`Recruiter Logo ${index + 1}`}
                className="h-16 sm:h-20 max-w-[120px] object-contain"
              />
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="logo-slide flex-none mx-3 sm:mx-4 md:mx-5">
              <img
                src={logo}
                alt={`Recruiter Logo ${index + 1}`}
                className="h-16 sm:h-20 max-w-[120px] object-contain"
              />
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 h-full w-24  to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 to-transparent z-10" />
      </div>

      <style>{`
        .logo-slider {
          position: relative;
          padding: 0 20px;
        }

        .logo-slider-track {
          display: flex;
          width: fit-content;
        }

        .logo-slider-track.animate {
          animation: slide 40s linear infinite;
        }

        .logo-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .logo-slider:hover .logo-slider-track {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .logo-slider-track.animate {
            animation-duration: 30s;
          }
        }
      `}</style>
    </div>
  );
};

export default CompRecruiter;
