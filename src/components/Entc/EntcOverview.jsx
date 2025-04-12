import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
// Import images
import HatImage from '../../assets/images/hat.avif';
import entc from '../../assets/images/Entc-Images/overview.avif';
 
function EntcOverview() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
 
  return (
    <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-2 px-8 md:px-20 py-3 md:py-6 poppins-regular overflow-hidden">
      {/* Text Content */}
      <div className="flex-[1.5] pt-8 w-full" data-aos="fade-right">
        <h2 className="text-2xl md:text-3xl font-bold text-[#104552] mb-4 relative">
          <img src={HatImage} alt="Hat" className="absolute left-[-25px] top-[-38px] w-16 h-16 animate-floating" />
          Program Overview
        </h2>
        <p className="text-sm md:text-xl text-gray-700 tracking-wide">
          From 5G networks and IoT devices to satellites and AI-powered automation, Electronics & Telecommunication Engineering (ENTC) is the backbone of modern technology.
          If you dream of designing high-speed communication systems, smart gadgets, or next-gen AI hardware, then ENTC at Indira College of Engineering & Management (ICEM), Pune, is your launchpad to success!
        </p>
      </div>
 
      {/* Image */}
      <div className="flex-1 bg-white relative" data-aos="fade-left ">
        <img src={entc} alt="Program Overview Image" className="w-full h-96 object-contain" />
      </div>
    </div>
  );
}
 
export default EntcOverview;