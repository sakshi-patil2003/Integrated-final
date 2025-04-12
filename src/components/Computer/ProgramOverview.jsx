import React, { useEffect } from 'react';
// Import the image
import ProgramImage from '../../assets/images/Com-Images/3d-rendering-futuristic-computer.avif';
import HatImage from '../../assets/images/hat.avif';  // Import the floating hat image

// Import AOS and its CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProgramOverview() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8 px-8 md:px-16 py-3 md:py-6 poppins-regular">
      {/* Left Part: Heading and Paragraph */}
      <div className="flex-1" data-aos="fade-right">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 relative">
          {/* Floating Hat Above the "P" */}
          <img
            src={HatImage}
            alt="Hat"
            className="absolute left-[-25px] top-[-38px] w-16 h-16 animate-floating" // Apply floating animation class
          />
          Program Overview
        </h2>
        <p className="text-md sm:text-2xl md:text-xl text-gray-600 tracking-wide mt-4">
        At ICEM, learning goes beyond textbooks. With student centric built infrastructure, advanced Apple & IT labs and industry partnerships, we ensure our students are career-ready from day one. the Computer Engineering program at ICEM is designed to provide a strong foundation in software development, AI and networking, cybersecurity, IoT, and cloud computing with real-world projects, hackathons, expert mentoring.</p>
      </div>

      {/* Right Part: Image */}
      <div className="flex-1 bg-white" data-aos="fade-left">  {/* Make container transparent */}
        <img
          src={ProgramImage} // Use the imported image
          alt="Program"
          className="w-full h-auto "
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
      `}</style>
    </div>
  );
}

export default ProgramOverview;
