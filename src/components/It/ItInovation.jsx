import React from 'react'
import ProgramImage from '../../assets/images/IT-Images/ITIovation.avif'
const ItInovation = () => {
  return (
     <div className="flex flex-col px-4 md:px-10 lg:px-16 py-4 mb-2">
          {/* Heading Section */}
          <div className="flex flex-col md:flex-row items-center justify-center">
    
            {/* Left Part: Image */}
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
              <img
                src={ProgramImage}
                alt="Computer Engineering"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
    
            {/* Right Part: Paragraph */}
            <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
              <h2 className=" text-2xl sm:text-3xl lg:text-4xl font-bold text-center sm:text-left mt-2 ">
              Where Innovation Meets Technology!               </h2>
              <p className="text-md sm:text-2xl md:text-xl text-gray-600 tracking-wide mt-4 px-2">
              From cloud computing to cybersecurity, and from AI-driven applications to web development, Information Technology (IT) is the driving force behind today’s digital revolution. 
           
            </p>
            </div>
          </div>
        </div>
  )
}

export default ItInovation
