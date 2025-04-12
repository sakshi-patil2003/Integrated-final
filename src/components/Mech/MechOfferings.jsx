import { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS
import offer2Image from '../../assets/images/MECH-images/offer-5.avif';  // Import the robotics image
import offer3Image from '../../assets/images/MECH-images/offer-4.avif';  // Import the thermal engineering image
import offer4Image from '../../assets/images/MECH-images/offer-3.avif';  // Import the energy solutions image
import offer5Image from '../../assets/images/MECH-images/portrait-engineers-work-hours-job-site.jpg';  // Import the prototyping image
import offer6Image from '../../assets/images/MECH-images/offer-1.avif';  // Import the internships image
import offer1Image from '../../assets/images/MECH-images/offer-6.avif';  // Import the CAD/CAM image

function MechOfferings() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const elements = document.querySelectorAll('.circle');
    const icons = document.querySelectorAll('.icon');

    elements.forEach((circle, index) => {
      const icon = icons[index];

      gsap.set(circle, { opacity: 0, x: -50 });
      gsap.set(icon, { rotationY: 180 });

      circle.parentElement.addEventListener('mouseenter', () => {
        gsap.to(circle, { opacity: 1, x: 0, duration: 0.3 });
        gsap.to(icon, { rotationY: 0, duration: 0.3 });
      });

      circle.parentElement.addEventListener('mouseleave', () => {
        gsap.to(circle, { opacity: 0, x: -50, duration: 0.3 });
        gsap.to(icon, { rotationY: 180, duration: 0.3 });
      });
    });
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-16 py-6 md:py-8  poppins-regular">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#01224F]" data-aos="fade-up">
        Mechanical Engineering Offerings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-8 gap-x-4 md:gap-x-8 lg:gap-x-10">
        
        {/* Engineering Mechanics */}
        <div
          className="bg-[#01224F] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer1Image}
            alt="Engineering Mechanics"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Engineering Mechanics</h3>
            <p className="text-base text-white">The study of forces, motion, and equilibrium in mechanical systems.</p>
          </div>
        </div>

        {/* Strength of Materials */}
        <div
          className="bg-[#01224F] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer2Image}
            alt="Strength of Materials"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Strength of Materials</h3>
            <p className="text-base text-white">Analyzing material behavior under stress, strain, and external loads</p>
          </div>
        </div>

        {/* Thermodynamics */}
        <div
          className="bg-[#01224F] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer3Image}
            alt="Thermodynamics"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Thermodynamics</h3>
            <p className="text-base text-white">Understanding energy transfer, heat flow, and power generation.</p>
          </div>
        </div>

        {/* Fluid Mechanics & Hydraulics */}
        <div
          className="bg-[#01224F] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer4Image}
            alt="Fluid Mechanics"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Fluid Mechanics & Hydraulics</h3>
            <p className="text-base text-white">Examining fluid behavior in motion and its engineering applications.</p>
          </div>
        </div>

        {/* Automobile Engineering */}
        <div
          className="bg-[#01224F] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer5Image}
            alt="Automobile Engineering"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Automobile Engineering</h3>
            <p className="text-base text-white">Designing and optimizing vehicle systems for efficiency and safety.</p>
          </div>
        </div>

        {/* Control Systems & Mechatronics */}
        <div
          className="bg-[#01224F] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer6Image}
            alt="Control Systems & Mechatronics"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Control Systems & Mechatronics</h3>
            <p className="text-base text-white">Integrating mechanics, electronics, and automation for precision control.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MechOfferings;
