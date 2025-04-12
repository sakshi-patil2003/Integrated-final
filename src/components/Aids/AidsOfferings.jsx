import { useEffect } from 'react';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS
import offer1Image from '../../assets/images/AIDS-Imagegs/off1.avif';
import offer2Image from '../../assets/images/AIDS-Imagegs/off2.avif';
import offer3Image from '../../assets/images/AIDS-Imagegs/off3.avif';
import offer4Image from '../../assets/images/AIDS-Imagegs/off4.avif';
import offer5Image from '../../assets/images/AIDS-Imagegs/off5.avif';
import offer6Image from '../../assets/images/AIDS-Imagegs/off6.avif';

function AidsOfferings() {
  useEffect(() => {
    AOS.init({
      duration: 100,
      once: true,
    });
  }, []);

  return (
    <div className="px-8 md:px-16 py-6 md:py-8 poppins-regular mt-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-sky-900" data-aos="fade-up">
        AIDS Program Offerings
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-2 md:gap-x-10 justify-center">

        <div className="bg-[#41b9d0] shadow-xl flex flex-col items-center justify-start text-center h-full relative" data-aos="fade-up">
          <img src={offer1Image} alt="AI Research" className="w-full h-40 md:h-48 object-cover mb-4" />
          <div className="text-center ">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Machine Learning & Deep Learning</h3>
            <p className="text-base text-white">Training models to learn patterns and make intelligent decisions.</p>
          </div>
        </div>

        <div className="bg-[#41b9d0] shadow-xl flex flex-col items-center justify-start text-center h-full relative" data-aos="fade-up">
          <img src={offer2Image} alt="Data Science" className="w-full h-40 md:h-48 object-cover mb-4" />
          <div className="text-center ">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Data Science & Analytics</h3>
            <p className="text-base text-white">Extracting insights from data for informed decision-making.</p>
          </div>
        </div>

        <div className="bg-[#41b9d0] shadow-xl flex flex-col items-center justify-start text-center h-full relative" data-aos="fade-up">
          <img src={offer3Image} alt="Machine Learning" className="w-full h-40 md:h-48  object-cover mb-4" />
          <div className="text-center ">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Natural Language Processing (NLP)</h3>
            <p className="text-base text-white">Enabling machines to understand and process human language.</p>
          </div>
        </div>

        <div className="bg-[#41b9d0] shadow-xl flex flex-col items-center justify-start text-center h-full relative" data-aos="fade-up">
          <img src={offer4Image} alt="Robotics" className="w-full h-40 md:h-48 object-cover mb-4" />
          <div className="text-center ">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Cloud Computing & AI Deployment</h3>
            <p className="text-base text-white">Hosting and scaling AI models on cloud platforms.</p>
          </div>
        </div>

        <div className="bg-[#41b9d0] shadow-xl flex flex-col items-center justify-start text-center h-full relative" data-aos="fade-up">
          <img src={offer5Image} alt="Software Engineering" className="w-full h-40 md:h-48 object-cover mb-4" />
          <div className="text-center ">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Internet of Things (IoT) & Edge AI</h3>
            <p className="text-base text-white">Smart devices processing AI at the edge in real time.</p>
          </div>
        </div>

        <div className="bg-[#41b9d0] shadow-xl flex flex-col items-center justify-start text-center h-full relative" data-aos="fade-up">
          <img src={offer6Image} alt="Engineering Research" className="w-full h-40 md:h-48 object-cover mb-4" />
          <div className="text-center ">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Engineering Research & Innovation</h3>
            <p className="text-base text-white">Optimizing industries with AI-powered automation and insights.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AidsOfferings;
