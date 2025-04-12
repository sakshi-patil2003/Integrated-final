import React from 'react';

const CompCarrer = () => {
  return (
    <div className="bg-[#390161] py-8 md:py-16 px-8 sm:px-12 shadow-lg transform transition-all duration-700 ease-in-out">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title Section */}

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-[#F7F0FC]">

          Career Prospects & Placements
        </h2>

        {/* Description Section */}
        <p className="text-[#F7F0FC] text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
          The demand for IT professionals is at an all-time high! With companies like TCS, Infosys, Accenture, Capgemini, Wipro, and global tech giants hiring IT engineers, the career opportunities are limitless. At ICEM, we ensure you are industry-ready with 100% placement assistance, hands-on internships, and real-world tech projects that prepare you for success in software development, cybersecurity, cloud computing, and data science.
        </p>

        {/* Logos Section */}
        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:px-8">
          <div className="flex justify-center items-center md:p-4 hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="/src/assets/images/Com-Images/Google.png" alt="Google" className="max-w-full h-auto object-contain rounded-md" />
          </div>
          <div className="flex justify-center items-center md:p-4  hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="/src/assets/images/Com-Images/Tcs.avif" alt="TCS" className="max-w-full h-auto object-contain rounded-md" />
          </div>
          <div className="flex justify-center items-center md:p-4  hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="/src/assets/images/Com-Images/Infosys.avif" alt="Infosys" className="max-w-full h-auto object-contain rounded-md" />
          </div>
          <div className="flex justify-center items-center md:p-4  hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="/src/assets/images/Com-Images/Microsoft.avif" alt="Microsoft" className="max-w-full h-auto object-contain rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompCarrer;
