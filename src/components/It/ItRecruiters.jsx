import React, { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Image imports
import logo1 from "../../assets/images/IT,Com,AIDS/palo (1).avif";
import logo2 from "../../assets/Images/IT,Com,AIDS/yash.avif";
import logo3 from "../../assets/Images/IT,Com,AIDS/philips.avif";
import logo4 from "../../assets/images/IT,Com,AIDS/jaspay.avif";
import logo5 from "../../assets/Images/IT,Com/AIDS/zs.avif";
import logo6 from "../../assets/images/IT,Com/AIDS/avalara.avif";
import logo7 from "../../assets/Images/IT,Com/AIDS/capgi.avif";
import logo8 from "../../assets/Images/IT,Com/AIDS/dataaxle.avif";
import logo9 from "../../assets/Images/IT,Com/AIDS/e-zest.avif";
import logo10 from "../../assets/Images/IT,Com/AIDS/wipro.avif";
import logo11 from "../../assets/Images/IT,Com/AIDS/fis.avif";
import logo12 from "../../assets/Images/IT,Com/AIDS/gslab.avif";
import logo13 from "../../assets/Images/IT,Com/AIDS/infosys.avif";
import logo14 from "../../assets/Images/IT,Com/AIDS/kpit.avif";
import logo15 from "../../assets/Images/IT,Com/AIDS/kpmg.avif";
import logo16 from "../../assets/Images/IT,Com/AIDS/l&T.avif";
import logo17 from "../../assets/Images/IT,Com/AIDS/nttdata.avif";
import logo18 from "../../assets/Images/IT,Com/AIDS/Persistent.avif";
import logo19 from "../../assets/Images/IT,Com/AIDS/pubmatic.avif";
import logo20 from "../../assets/Images/IT,Com/AIDS/sas.avif";
import logo21 from "../../assets/Images/IT,Com/AIDS/Tcs.avif";
import logo22 from "../../assets/Images/IT,Com/AIDS/tibco.avif";
import logo23 from "../../assets/Images/IT,Com/AIDS/veritas.avif";
import logo24 from "../../assets/Images/IT,Com/AIDS/e-zest.avif";

// Sponsors data
const sponsorsData = [
  {
    title: "IT RECRUITERS",
    logos: [
      logo1,
      logo2,
      logo3,
      logo4,
      logo5,
      logo6,
      logo7,
      logo8,
      logo9,
      logo10,
      logo11,
      logo12,
    ],
  },
  {
    title: "IT RECRUITERS",
    logos: [
      logo13,
      logo14,
      logo15,
      logo16,
      logo17,
      logo18,
      logo19,
      logo20,
      logo21,
      logo22,
      logo23,
      logo24,
    ],
  },
];

const ItRecruiters = memo(() => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col justify-center items-center py-2 md:py-12 bg-white px-4 md:px-16 overflow-hidden">
      {/* Heading above the slider */}
      <div className="text-xl md:text-4xl font-semibold text-[#001E5D] mb-6 text-center">
        Our IT Recruiters
      </div>

      <Slider {...settings} className="w-full">
        {sponsorsData.map((slide, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex flex-row justify-center items-center w-full px-4">
              {/* Grid for logos */}
              <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 justify-items-center w-full px-4">
                {slide.logos.map((logo, idx) => (
                  <div key={idx} className="flex justify-center">
                    <img
                      src={logo}
                      alt={`Logo ${idx + 1}`}
                      className="rounded-none shadow-none w-full h-auto object-contain"
                      loading="lazy" // Lazy loading for better performance
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
});

export default ItRecruiters;
