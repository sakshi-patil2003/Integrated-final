import React, { useEffect } from 'react';
// Import the images
import ProgramImage from '../../assets/images/MECH-images/inov.avif';

// Import AOS and its CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

function MechOverview() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="flex flex-col px-4 md:px-10 lg:px-16 py-4 mb-2">
      {/* Heading */}
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Left Part: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={ProgramImage}
            alt="Mechanical Engineering"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Right Part: Paragraph */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold text-left text-[#01224F] mt-2">
            Where <span className='text-[#ffc80f]'>Innovation</span> Meets Motion
          </h2>
          <p className="text-md sm:text-2xl md:text-xl text-gray-600 tracking-wide mt-4 px-2">
            Ever wondered what it takes to design a Formula 1 car, build a Mars rover, or create a next-gen robotic arm? Mechanical Engineering is the powerhouse behind these revolutionary innovations! At Indira College of Engineering and Management (ICEM), we turn ideas into reality by blending technology, creativity, and real-world applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MechOverview;
