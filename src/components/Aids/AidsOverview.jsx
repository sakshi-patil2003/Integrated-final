import React, { useEffect } from 'react';
import ProgramImage from '../../assets/images/AIDS-Imagegs/robothero.avif'; // Robot image
import HatImage from '../../assets/images/hat.avif'; // Floating hat image

import AOS from 'aos';
import 'aos/dist/aos.css';

function AidsOverview() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 md:space-x-8 px-8 md:px-16 font-baskerville-regular overflow-hidden"
      style={{
        background: 'linear-gradient(to right, #0c3249, #1e5f76, #41b9d0)',
      }}
    >
      {/* Right Part: Image (formerly left), hidden on mobile */}
      <div
        className="hidden sm:flex flex-1 items-center justify-center relative"
        data-aos="fade-left"
      >
        <img
          src={ProgramImage}
          alt="AIDS Program"
          className="w-48 sm:w-64 md:w-full h-[350px] sm:h-[450px] md:h-[500px] object-contain animate-float-large"
        />
      </div>

      {/* Left Part: Heading and Paragraph */}
      <div className="flex-1 pt-8 py-4 md:py-8 text-center sm:text-left" data-aos="fade-right">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#f4f4f4] mb-4 mt-0 md:mt-2 relative inline-block">
          <img
            src={HatImage}
            alt="Hat"
            className="absolute left-[-25px] top-[-25px] md:top-[-35px] w-12 sm:w-16 h-12 sm:h-16 animate-floating"
          />
          Program Overview
        </h2>
        <p className="text-sm  md:text-2xl text-[#f4f4f4] tracking-wide ">
          Artificial Intelligence and Data Science are revolutionizing industries, from self-driving cars and AI-powered
          healthcare to predictive analytics and cybersecurity. At Indira College of Engineering & Management (ICEM),
          Pune, we equip future tech leaders with advanced AI knowledge, real-world applications, and hands-on
          experience to transform the digital world.
        </p>
        <p className="mt-4 text-sm  md:text-2xl text-[#f4f4f4] tracking-wide ">
          If you dream of creating intelligent software, analyzing massive datasets, or building next-gen AI solutions,
          then AIDS at ICEM is your gateway to success!
        </p>
      </div>

      {/* Floating animation CSS */}
      <style>{`
      @keyframes floating {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      @keyframes float-large {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-15px);
        }
      }

      .animate-floating {
        animation: floating 3s ease-in-out infinite;
      }

      .animate-float-large {
        animation: float-large 4s ease-in-out infinite;
      }
      `}</style>
    </div>
  );
}

export default AidsOverview;