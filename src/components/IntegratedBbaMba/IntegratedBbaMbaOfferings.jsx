import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';

import offer1Image from '/public/BBA-MBA/principle.jpg';
import offer2Image from '/public/BBA-MBA/image (1).jpg';
import offer3Image from '/public/BBA-MBA/Dm.jpg';
import offer4Image from '/public/BBA-MBA/anyalisis.jpg';
import offer5Image from '/public/BBA-MBA/behavior.jpg';
import offer6Image from '/public/BBA-MBA/global.jpg';
import offer7Image from '/public/BBA-MBA/internship.jpg';
import offer8Image from '/public/BBA-MBA/apti.jpg';

const IntegratedBbaMbaOfferings = () => {
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
    <div className="relative px-4 sm:px-6 md:px-10 lg:px-16 py-8 md:py-12 bg-[#f7f3ef]">
      <h2
        className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#555555]"
        data-aos="fade-up"
      >
        Integrated <span className="text-[#f37021]">BBA/MBA </span>Offerings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
        {[
          { img: offer1Image, title: 'Principles of Management & Marketing' },
          { img: offer2Image, title: 'Business Communication & Corporate Etiquette' },
          { img: offer3Image, title: 'Digital Marketing & Brand Strategy' },
          { img: offer5Image, title: 'Organizational Behavior & HRM' },
          { img: offer6Image, title: 'Global Business & Leadership Skills' },
          { img: offer7Image, title: 'Internship Projects & Corporate Exposure' },
          { img: offer4Image, title: 'Finance, Analytics & Economics' },
          { img: offer8Image, title: 'Interpersonal Skill & Problem Solving' },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#FCFAEE] shadow-lg rounded-lg flex flex-col items-center h-full overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-4 flex-1 flex items-center justify-center text-center">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#555555]">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegratedBbaMbaOfferings;
