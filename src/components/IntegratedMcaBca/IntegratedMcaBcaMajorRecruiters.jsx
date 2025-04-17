import React, { useEffect, useState } from "react";

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

const IntegratedMcaBcaMajorRecruiters = () => {
  const [reverse, setReverse] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const logoImages = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
    logo13, logo14, logo15, logo16, logo17, logo18,
    logo19, logo20, logo21, logo22, logo23, logo24,
    logo25, logo26, logo27, logo28, logo29, logo30
  ];

  const logos = logoImages.map((src, index) => (
    <div key={`first-${index}`} className="flex-none px-4 py-2">
      <img
        src={src}
        alt={`Recruiter ${index + 1}`}
        className="h-12 sm:h-16 md:h-20 max-w-[100px] object-contain"
      />
    </div>
  ));

  const duplicatedLogos = logos.map((logo, index) =>
    React.cloneElement(logo, { key: `second-${index}` })
  );

  useEffect(() => {
    const handleAnimationEnd = (e) => {
      if (e.animationName === (isMobile ? "scroll-mobile" : "scroll")) {
        setReverse(true);
      } else if (e.animationName === "reverseScroll") {
        setReverse(false);
      }
    };

    const logoSlider = document.querySelector(".logo-slider-track");
    if (logoSlider) logoSlider.addEventListener("animationend", handleAnimationEnd);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (logoSlider) logoSlider.removeEventListener("animationend", handleAnimationEnd);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div className="logo-slider-section roboto-regular relative w-full">
      {/* Info box */}
      <div className="absolute top-0 left-0 bg-white shadow-lg flex items-center h-full z-10 px-4 sm:px-10 md:px-16 py-2">
        <h2 className="text-base sm:text-xl md:text-2xl text-[#555555] font-extrabold leading-tight text-center sm:text-left">
          <span className="text-[#f37021]">450+ Industry</span>
          <br />
          Collaborations
        </h2>
      </div>

      {/* Logo slider */}
      <div className="logo-slider relative w-full overflow-hidden pl-[180px] sm:pl-[260px] md:pl-[300px]">
        <div
          className={`logo-slider-track flex items-center ${
            reverse ? "reverse" : isMobile ? "animate-scroll-mobile" : "animate-scroll"
          }`}
        >
          {[...logos, ...duplicatedLogos]}
        </div>
      </div>

      {/* Inline CSS for animation */}
      <style>{`
        .logo-slider-track {
          display: flex;
          min-width: max-content;
        }

        .animate-scroll {
          animation: scroll 20s linear forwards;
        }

        .animate-scroll-mobile {
          animation: scroll-mobile 15s linear forwards;
        }

        .reverse {
          animation: reverseScroll 5s linear forwards;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-mobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes reverseScroll {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .logo-slider-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default IntegratedMcaBcaMajorRecruiters;
