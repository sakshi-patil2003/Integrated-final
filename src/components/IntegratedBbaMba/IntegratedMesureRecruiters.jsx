import React, { useEffect, useState } from "react";

// Image Imports
import logo3 from "/public/logos/philips.avif";
import logo2 from "/public/logos/jaspay.avif";
import logo4 from "/public/logos/dataaxle.avif";
import logo5 from "/public/logos/palo.avif";
import logo6 from '../../assets/images/MECH-images/force.avif'
import logo7 from '../../assets/images/MECH-images/faurecia.avif'
import logo8 from '/public/BBA-MBA/hdfcFirst.png'
import logo9 from '/public/BBA-MBA/ab.png'
import logo10 from '/public/BBA-MBA/amura.png'
import logo11 from '/public/BBA-MBA/lodha.png'
import logo12 from '/public/BBA-MBA/pwc.png'
import logo13 from '/public/BBA-MBA/master.png'
import logo14 from '/public/BBA-MBA/dataaxle.png'
import logo15 from '/public/BBA-MBA/piaggio.png'
import logo16 from '/public/BBA-MBA/epam.png'
import logo17 from '/public/BBA-MBA/hdfc.png'
import logo18 from '/public/BBA-MBA/itc.png'
import logo19 from '/public/BBA-MBA/Mcafee.png'

const IntegratedMcaBcaMajorRecruiters = () => {
  const [reverse, setReverse] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const logoImages = [
     logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
    logo13, logo14, logo15, logo16, logo17, logo18,
    logo19,
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
          Collaboration
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

      {/* Inline CSS */}
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
