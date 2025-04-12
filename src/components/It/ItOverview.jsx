import React, { useEffect } from 'react'
import ProgramImage from '../../assets/images/IT-Images/ITOverview.avif';
import HatImage from '../../assets/images/hat.avif';  // Import the floating hat image

// Import AOS and its CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

const ItOverview = () => {

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="flex flex-col pt-10 md:pt-10 md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8 px-8 md:px-16 py-3 md:py-6 overflow-hidden">
      
      {/* Left Part: Heading and Paragraph */}
      <div className="flex-1" data-aos="fade-right">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 relative">
          {/* Floating Hat Above the "P" */}
          <img
            src={HatImage}
            alt="Hat"
            className="absolute left-[-25px] top-[-38px] w-16 h-16 animate-floating"
          />
          Program Overview
        </h2>
        <p className="text-md sm:text-2xl md:text-xl text-gray-600 tracking-wide mt-4">
          In a world driven by technology and innovation, Information Technology (IT) Engineering plays a crucial role in shaping smart solutions, secure networks, and intelligent systems.  
          At Indira College of Engineering & Management (ICEM), Pune, we equip students with cutting-edge skills in software development, data analytics, cloud computing, and cybersecurity, ensuring they stay ahead in the fast-evolving tech landscape.
        </p>
      </div>

      {/* Right Part: Image */}
      <div className="flex-1 bg-white" data-aos="fade-left">
        {/* Use native image with Tailwind, allowing for optimization */}
        <img
          src={ProgramImage}
          alt="Program"
          className="w-full h-auto rounded-md object-cover"
          loading="lazy" // Enable lazy loading with native browser support
        />
      </div>

      {/* Floating animation CSS */}
      <style jsx>{`
        @keyframes floating {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-floating {
          animation: floating 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default ItOverview;
