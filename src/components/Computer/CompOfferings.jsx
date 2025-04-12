import { FaGraduationCap, FaBuilding, FaBookOpen, FaLaptop, FaLanguage, FaUniversity, FaBriefcase, FaChalkboardTeacher, FaDesktop } from 'react-icons/fa';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS

function CompOfferings() {
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
    <div className="relative px-8 md:px-16 py-6 md:py-8 bg-[#ffffff] poppins-regular">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("../../assets/images/Com-Images/broImage.jpg")' }}></div>

      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#000]" data-aos="fade-up">
        Top Offerings
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-6 md:gap-y-8 gap-x-4 md:gap-x-20">
        {/* Excellent Academic Interface */}
        <div
          className="bg-[linear-gradient(#161e3a,_#2241ac_51%,_#3473cd)] p-2 md:p-4 shadow-xl flex flex-col items-center justify-center text-center h-full relative rounded-xl transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <FaGraduationCap size={50} className="text-white mb-4 icon" />
          <p className="text-md md:text-lg font-semibold text-white">Excellent Academic Interface</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-blue-600 rounded-full shadow-2xl"></div>
        </div>

        {/* Quality Holistic Infrastructure */}
        <div
          className="bg-[linear-gradient(#161e3a,_#2241ac_51%,_#3473cd)] p-2 md:p-4 shadow-xl flex flex-col items-center justify-center text-center h-full relative rounded-xl transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <FaUniversity size={50} className="text-white mb-4 icon" />
          <p className="text-md md:text-lg font-semibold text-white">Quality Holistic Infrastructure</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-blue-600 rounded-full shadow-2xl"></div>
        </div>

        {/* Customized MPSC/MPSC-ES/UPSC Training Program */}
        <div
          className="bg-[linear-gradient(#161e3a,_#2241ac_51%,_#3473cd)] p-2 md:p-4 shadow-xl flex flex-col items-center justify-center text-center h-full relative rounded-xl transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <FaChalkboardTeacher size={50} className="text-white mb-4 icon" />
          <p className="text-md md:text-lg font-semibold text-white">Customized MPSC/MPSC-ES /UPSC Training Program</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-blue-600 rounded-full shadow-2xl"></div>
        </div>

        {/* Guaranteed Core Placements for Core Branches */}
        <div
          className="bg-[linear-gradient(#161e3a,_#2241ac_51%,_#3473cd)] p-2 md:p-4 shadow-xl flex flex-col items-center justify-center text-center h-full relative rounded-xl transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <FaBriefcase size={50} className="text-white mb-4 icon" />
          <p className="text-md md:text-lg font-semibold text-white">Guaranteed Core Placements for Core Branches</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-blue-600 rounded-full shadow-2xl"></div>
        </div>

        {/* Product Companies for Campus Placements */}
        <div
          className="bg-[linear-gradient(#161e3a,_#2241ac_51%,_#3473cd)] p-2 md:p-4 shadow-xl flex flex-col items-center justify-center text-center h-full relative rounded-xl transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <FaDesktop size={50} className="text-white mb-4 icon" />
          <p className="text-md md:text-lg font-semibold text-white">Product Companies for Campus Placements</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-blue-600 rounded-full shadow-2xl"></div>
        </div>

        {/* Foreign Languages (German, Japanese, French) */}
        <div
          className="bg-[linear-gradient(#161e3a,_#2241ac_51%,_#3473cd)] p-2 md:p-4 shadow-xl flex flex-col items-center justify-center text-center h-full relative rounded-xl transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <FaLanguage size={50} className="text-white mb-4 icon" />
          <p className="text-md md:text-lg font-semibold text-white">Foreign Languages (German, Japanese, French)</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-blue-600 rounded-full shadow-2xl"></div>
        </div>
      </div>
    </div>
  );
}

export default CompOfferings;
