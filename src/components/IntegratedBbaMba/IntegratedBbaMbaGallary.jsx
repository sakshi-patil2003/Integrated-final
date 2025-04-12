import React from "react";
import image1 from "/public/BBA-MBA/rs.jpg";
import image2 from "/public/BBA-MBA/nss.jpg";
import image3 from "/public/BBA-MBA/course.jpg";
import image4 from "/public/BBA-MBA/green_tour.jpg";
import image5 from "/public/BBA-MBA/tech_fest 1.jpg";
import image6 from "/public/BBA-MBA/sports 1.jpg";
import image7 from "/public/BBA-MBA/prarambh-bca.jpg";
import tvImage from "../../assets/images/image.png";

const videos = [
  {
    id: "sU3FkzUKHXU",
    title: "Ground",
  },
  {
    id: "3JZ_D3ELwOQ",
    title: "Canteen",
  },
];

const images = [
  { src: image1, name: "The rising Star – Freshers party" },
  { src: image2, name: "NSS Activities " }, // moved to bottom
  { src: image3, name: "Basics of Stock Market" },
  { src: image4, name: "Mahabaleshwar Green Tour" },
  { src: image5, name: "Tech-Fest" },
  { src: image6, name: "Chanakya Sports Complex" },
  { src: image7, name: "Induction Program Prarambh" },
];

const LifeAtICEM = () => {
  return (
    <div className="w-full bg-[#FCFAEE] px-4 md:px-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#222] font-bold text-center pt-8 pb-4">
        Life At <span className="text-[#f37021]">ICEM</span>
      </h1>

      {/* Custom Layout */}
      <div className="w-full mx-auto  py-10 flex flex-col gap-6">

        {/* Row 1: TV left, 1 image right */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
          {/* TV */}
          <div className="relative w-[360px] sm:w-[440px] md:w-[600px]">
            <img src={tvImage} alt="TV Frame" className="w-full h-auto" />
            <div
              className="absolute"
              style={{
                top: "2%",
                left: "3%",
                width: "68%",
                height: "56%",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/-rAt2kuZN1E/${videos[0].id}`}
                title={videos[0].title}
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* One Image */}
          <div className="relative w-full sm:w-[500px] h-[250px] md:h-[300px] overflow-hidden rounded-3xl shadow-md">
            <img
              src={images[0].src}
              alt={images[0].name}
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white text-sm md:text-base lg:text-lg uppercase font-medium px-2 pb-3 flex items-end justify-center text-center">
              {images[0].name}
            </div>
          </div>
        </div>

        {/* Row 2: 2 images left, FLIPPED TV right */}
        <div className="flex flex-col lg:flex-row-reverse gap-6 items-center justify-center">
          {/* Flipped TV */}
          <div className="relative w-[360px] sm:w-[440px] md:w-[520px] scale-x-[-1]">
            <img src={tvImage} alt="TV Frame" className="w-full h-auto" />
            <div
              className="absolute"
              style={{
                top: "2%",
                left: "3%",
                width: "68%",
                height: "56%",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/fiIYjIaeEQg/${videos[1].id}`}
                title={videos[1].title}
                allowFullScreen
                className="w-full h-full scale-x-[-1]"
              />
            </div>
          </div>

          {/* Two Images */}
          <div className="flex flex-col sm:flex-row gap-4">
            {images.slice(2, 4).map((item, index) => (
              <div
                key={index}
                className="relative w-full sm:w-[300px] h-[250px] md:h-[300px] overflow-hidden rounded-3xl shadow-md"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white text-sm md:text-base lg:text-lg uppercase font-medium px-2 pb-3 flex items-end justify-center text-center">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Remaining gallery including the moved image */}
      <div className="px-4 text-center py-8 bg-[#FCFAEE]">
        <div className="flex flex-wrap gap-4 justify-center">
          {images.slice(1, 2).concat(images.slice(4)).map((item, index) => (
            <div
              key={index}
              className="relative basis-full sm:basis-[48%] md:basis-[23%] h-[250px] md:h-[300px] overflow-hidden rounded-3xl shadow-md"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white text-sm md:text-base lg:text-lg uppercase font-medium px-2 pb-3 flex items-end justify-center text-center">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifeAtICEM;
