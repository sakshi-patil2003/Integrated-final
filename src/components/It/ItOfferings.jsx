import { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS
import offer1Image from '../../assets/images/IT-Images/fullstack (2).avif';  // Import the existing image 1
import offer2Image from '../../assets/images/IT-Images/Cloud Services & Virtualization.avif';  // Import the existing image 2
import offer3Image from '../../assets/images/IT-Images/cloud.avif';  // Import the existing image 3
import offer4Image from '../../assets/images/IT-Images/IT Security & Risk Management.avif';  // Import the existing image 4
import offer5Image from '../../assets/images/IT-Images/ai-it.avif';  // Import the existing image 5
import offer6Image from '../../assets/images/IT-Images/iot.avif';  // Import the existing image 6
import offer7Image from '../../assets/images/IT-Images/erp.avif';  // Import the existing image 7
import offer8Image from '../../assets/images/IT-Images/mobai.avif';  // Import the existing image 8
import techDots from '../../assets/images/circuit-dots.png';  // Import the tech-dots PNG image
import technologyImage from '../../assets/images/technology-word.jpg'; // Example image to apply inside the word "Technology"

function ItOfferings() {
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

  // Inline styles for the "Technology" text effect
  const techStyle = {
    backgroundImage: `url(${technologyImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'transparent',
    fontWeight: 'bold',
    WebkitBackgroundClip: 'text',  // for Safari
    backgroundClip: 'text',
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 py-6 md:py-8 bg-white relative overflow-hidden">
      {/* Tech Dots Image */}
      <img
        src={techDots}
        alt="Tech Dots"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 md:w-2/3 lg:w-1/2 object-contain"
      />

      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-[#390161]" data-aos="fade-up">
        <span className="technology-text">
           <span style={techStyle}>Information Technology</span> Offerings
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8 justify-center">
        {[
          { image: offer1Image, title: "Software Engineering & Web Technologies", description: "Master full-stack development and software" },
          { image: offer2Image, title: "Data Science & Big Data Analytics", description: "Learn how to handle and analyze massive datasets." },
          { image: offer3Image, title: "Cloud Computing & Virtualization", description: "Explore AWS, Azure, and modern cloud platforms." },
          { image: offer4Image, title: "Cybersecurity & Ethical Hacking", description: "Protect digital assets and strengthen network security." },
          { image: offer5Image, title: "Artificial Intelligence & Machine Learning", description: "Build intelligent systems and automation" },
          { image: offer6Image, title: "IoT & Smart Systems", description: "Connect devices and develop smart applications for industries." },
          { image: offer7Image, title: "Enterprise Resource Planning (ERP) Systems", description: "Connect devices and develop smart applications for industries" },
          { image: offer8Image, title: "Mobile App Development", description: "Create cutting-edge Android & iOS applications." },
        ].map((offer, index) => (
          <div
            key={index}
            className="bg-[#390161] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
            data-aos="fade-up"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-48 md:h-56 lg:h-64 object-cover mb-4 lazyload"
              loading="lazy"
            />
            <div className="text-center px-4 py-2">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">{offer.title}</h3>
              <p className="text-sm md:text-base text-white">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className='text-center text-[#390161] font-bold md:text-xl mt-4'>
        At ICEM, you don’t just study IT—you build, innovate, and lead in the digital era!
      </h3>
    </div>
  );
}

export default ItOfferings;
