import React, { useEffect } from 'react';
import HatImage from '../../assets/images/hat.avif';  // Import the floating hat image
import GearImage1 from '../../assets/images/gear-a.avif';  // Import the first floating gear image
import GearImage2 from '../../assets/images/gear-b.avif';  // Import the second floating gear image
import car from '../../assets/images/MECH-images/Car split Down Model.avif';  // Import car image

import AOS from 'aos';
import 'aos/dist/aos.css';

const MechOverview = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="flex flex-col overflow-hidden   py-10 lg:flex-row justify-between items-center lg:items-start space-y-4 lg:space-y-8 lg:space-x-8 px-8 md:px-16 py-6 poppins-regular">
      {/* Left Part: Heading and Paragraph */}
      <div className="flex-1" data-aos="fade-right">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ff5d12] mb-4 relative">
          {/* Floating Hat Above the "P" */}
          <img
            src={HatImage}
            alt="Floating Hat"
            className="absolute left-[-25px] top-[-38px] w-16 h-16 animate-floating will-change-transform"
          />
          Program Overview
        </h2>
        <p className="text-md sm:text-xl md:text-lg text-gray-600 tracking-wide mt-4">
          At Indira College of Engineering & Management (ICEM), the Mechanical Engineering program is designed to shape future innovators and problem-solvers. With a strong foundation in core engineering principles and hands-on exposure to advanced manufacturing, automation, and design technologies, our curriculum bridges the gap between theory and real-world applications. We ensure our graduates become highly skilled professionals ready to lead in the ever-evolving world of engineering.
        </p>
      </div>

      {/* Right Part: Image */}
      <div className="flex-1 bg-white relative mt-4 lg:mt-0" data-aos="fade-left">
        <img
          src={car} // Use the imported image
          alt="Car Model"
          className="w-full h-70 sm:h-70 md:h-[28rem] lg:h-[22rem] object-contain"
        />
        {/* Floating Gear 1 at the left top of the Program Image */}
        <img
          src={GearImage1} // First gear image
          alt="Floating Gear 1"
          className="absolute left-[-40px] top-[-10px] md:left-[-25px] top-[-10px] w-20 h-20 md:w-32 md:h-32 animate-floating-gear will-change-transform"
        />
        {/* Floating Gear 2 at the right middle of the Program Image */}
        <img
          src={GearImage2} // Second gear image
          alt="Floating Gear 2"
          className="absolute right-[-40px] bottom-[-10px] md:right-[-25px] bottom-[-10px] w-20 h-20 md:w-32 md:h-32 animate-floating-gear will-change-transform"
        />
      </div>

      {/* Floating animation CSS */}
      <style>{`
        @keyframes floating {
          0% {
            transform: translateY(0); /* Start at original position */
          }
          50% {
            transform: translateY(-10px); /* Move up a bit */
          }
          100% {
            transform: translateY(0); /* Return to original position */
          }
        }

        .animate-floating {
          animation: floating 3s ease-in-out infinite; /* Apply floating animation */
        }

        @keyframes floating-gear {
          0% {
            transform: translateY(0); /* Start at original position */
          }
          50% {
            transform: translateY(-10px); /* Move up a bit more for gears */
          }
          100% {
            transform: translateY(0); /* Return to original position */
          }
        }

        .animate-floating-gear {
          animation: floating-gear 4s ease-in-out infinite; /* Apply floating animation to gears */
        }

        /* Improve performance for animated elements */
        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default MechOverview;
