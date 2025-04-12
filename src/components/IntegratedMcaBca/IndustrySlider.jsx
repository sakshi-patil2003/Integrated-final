import React from 'react';
import image1 from '../../assets/images/Com-Images/rs.jpg';
import image2 from '../../assets/images/Com-Images/nss.jpg';
import image3 from '../../assets/images/Com-Images/course.jpg';
import image4 from '../../assets/images/Com-Images/green_tour.jpg';
import image5 from '../../assets/images/Com-Images/tech_fest.jpg';
import image6 from '../../assets/images/Com-Images/sports.jpg';
import image7 from '../../assets/images/Com-Images/prarambh-bca.jpg';
import arrow from '../../assets/images/Com-Images/sulta.svg'; // ➡️↘️ arrow

const images = [
  { src: image1, name: "The rising Star – Freshers party" },
  { src: image2, name: "NSS Activities" },
  { src: image3, name: "Successful completion of Basics of Stock Market" },
  { src: image4, name: "Mahabaleshwar Green Tour" },
  { src: image5, name: "Tech-Fest" },
  { src: image6, name: "Chanakya Sports Complex" },
  { src: image7, name: "Induction Program Prarambh" }
];

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 md:px-16 text-center py-8 bg-[#FCFAEE] overflow-hidden">
      <h1 className="text-5xl text-[#555555] font-bold mb-16">
        Life At <span className="text-[#f37021]">ICEM</span>
      </h1>

      {/* Videos with Individual Decorative Arrows */}
      <div className="flex flex-wrap justify-center gap-20 mb-16 px-4 relative z-10">
        {/* Video 1 with Arrows */}
        <div className="relative w-[38%] aspect-video">
          {/* Top-left arrow */}
          <img
            src={arrow}
            alt="top-left-arrow"
            className="absolute -top-8 -left-10 w-30 z-20"
          />
          {/* Bottom-right arrow */}
          <img
            src={arrow}
            alt="bottom-right-arrow"
            className="absolute -bottom-8 -right-10 w-30 rotate-180 z-20"
          />
          <div className="w-full h-full shadow-xl  transition-transform duration-300">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/fiIYjIaeEQg"
              title="Indira Corporate Film"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Video 2 with Arrows */}
        <div className="relative w-[44%] aspect-video">
          {/* Top-left arrow */}
          <img
            src={arrow}
            alt="top-left-arrow"
            className="absolute -top-8 -left-10 w-10 w-30 z-20"
          />
          {/* Bottom-right arrow */}
          <img
            src={arrow}
            alt="bottom-right-arrow"
            className="absolute -bottom-8 -right-10 w-10 w-30 rotate-180 z-20"
          />
          <div className="w-full h-full shadow-xl  transition-transform duration-300">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/-rAt2kuZN1E"
              title="Gusto 2k25"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* First Row: 1 Large + 2 Equal Images */}
      <div className="flex flex-wrap justify-between gap-4">
        <div className="relative w-full md:w-1/2 md:h-[300px] overflow-hidden rounded-3xl shadow-md">
          <img
            src={images[0].src}
            alt={images[0].name}
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent text-white text-lg uppercase font-light py-2 flex items-end justify-center">
            {images[0].name}
          </div>
        </div>

        {images.slice(1, 3).map((item, index) => (
          <div key={index + 1} className="relative md:w-[calc(25%-1rem)] md:h-[300px] overflow-hidden rounded-3xl shadow-md">
            <img
              src={item.src}
              alt={item.name}
              className="w-full md:h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent text-white text-lg uppercase font-light py-2 flex items-end justify-center">
              {item.name}
            </div>
          </div>
        ))}
      </div>

      {/* Second Row: 4 Equal Images */}
      <div className="flex flex-wrap justify-between gap-4 mt-4">
        {images.slice(3, 7).map((item, index) => (
          <div key={index + 3} className="relative md:flex-1 md:min-w-[22%] md:h-[300px] overflow-hidden rounded-3xl shadow-md">
            <img
              src={item.src}
              alt={item.name}
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent text-white text-lg font-light uppercase py-2 flex items-end justify-center">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
