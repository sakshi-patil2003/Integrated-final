import { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS
import offer1Image from '../../assets/images/Entc-Images/entc_off1.avif';  // Import the power systems image
import offer2Image from '../../assets/images/Entc-Images/entc_off2.avif';  // Import the electronics image
import offer3Image from '../../assets/images/Entc-Images/entc_off3.avif';  // Import the circuits image
import offer4Image from '../../assets/images/Entc-Images/entc_off4.avif';  // Import the embedded systems image
import offer5Image from '../../assets//images/Entc-Images/entc_off5.avif';  // Import the control systems image
import offer6Image from '../../assets/images/Entc-Images/entc_off6.avif';  // Import the internships image
 
function EntcOfferings() {
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
   
    <div className="px-8 md:px-16 py-6 md:py-8 bg-[#ffffff] poppins-regular overflow-hidden">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#36A5B9]" data-aos="fade-up">
        Electrical & Telecommunication Engineering Offerings
      </h2>
 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-y-8 gap-x-4 md:gap-x-10 z-5 justify-center">
        {/* Power Systems & Energy Distribution */}
        <div
          className="bg-[linear-gradient(#9FEDD7,_#026670_51%,_#03828f)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer1Image}
            alt="Power Systems"
            className="w-full h-28 md:h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl font-bold text-white mb-2">Analog & Digital Communication</h3>
            <p className="text-base text-white">Master signal processing & transmission!
</p>
          </div>
        </div>
 
        {/* Electronics & Circuit Design */}
        <div
          className="bg-[linear-gradient(#9FEDD7,_#026670_51%,_#03828f)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer2Image}
            alt="Electronics & Circuit Design"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl font-bold text-white mb-2">Electronics & Circuit Design</h3>
            <p className="text-base text-white">Build intelligent circuits & automation!
</p>
          </div>
        </div>
 
        {/* Advanced Signal Processing */}
        <div
          className="bg-[linear-gradient(#9FEDD7,_#026670_51%,_#03828f)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer3Image}
            alt="Signal Processing"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl font-bold text-white mb-2">Internet of Things (IoT)</h3>
            <p className="text-base text-white">Connect the world with smart tech</p>
          </div>
        </div>
 
        {/* Embedded Systems & IoT */}
        <div
          className="bg-[linear-gradient(#9FEDD7,_#026670_51%,_#03828f)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer4Image}
            alt="Embedded Systems"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl font-bold text-white mb-2">Wireless & Mobile Communication</h3>
            <p className="text-base text-white">Develop next-gen telecom solutions!</p>
          </div>
        </div>
 
        {/* Control Systems & Automation */}
        <div
          className="bg-[linear-gradient(#9FEDD7,_#026670_51%,_#03828f)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer5Image}
            alt="Control Systems"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl font-bold text-white mb-2">VLSI & FPGA Design</h3>
            <p className="text-base text-white">Dive into chip design & nanoelectronics!
</p>
          </div>
        </div>
 
        {/* Core Engineering Internships and Industrial Training */}
        <div
          className="bg-[linear-gradient(#9FEDD7,_#026670_51%,_#03828f)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer6Image}
            alt="Internships & Training"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl font-bold text-white mb-2">Optical & Satellite Communication</h3>
            <p className="text-base text-white">Explore futuristic networking tech!  
</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default EntcOfferings;