import React from "react";

// Import profile images
import TanayDhote from "../../../public/BBA-MBA/tanay.avif";
import Aditya_Kale from "../../../public/BBA-MBA/Aditya_Kale.avif";
import Aditya from "../../../public/BBA-MBA/Aditya_Baliram.avif";
import Utkarsh from "../../../public/BBA-MBA/Utkarsh_Wagh.avif";
import sakshi from "../../../public/BBA-MBA/sakshi.avif";
import nilesh from "../../../public/BBA-MBA/nilesh_Godse.avif";

// Profile data
const profiles = [
  {
    name: "Mr.Tanay Dhote",
    batch: "(Batch : 2024-25)",
    ctc: "CTC 32 LPA",
    company: "Landmark Group",
    image: TanayDhote,
  },
  {
    name: "Mr.Aditya Kale",
    batch: "(Batch : 2024-25)",
    ctc: "CTC 12 LPA",
    company: "Kohler",
    image: Aditya_Kale,
  },
  {
    name: "Mr.Aditya Pawar",
    batch: "(Batch : 2024-25)",
    ctc: "CTC 11 LPA",
    company: "Juspay",
    image: Aditya,
  },
  {
    name: "Mr.Utkarsh Wagh",
    batch: "(Batch : 2024-25)",
    ctc: "CTC 10 LPA",
    company: "Patterns Technology",
    image: Utkarsh,
  },
  {
    name: "Ms.Sakshi Ghute",
    batch: "(Batch : 2024-25)",
    ctc: "CTC 10 LPA",
    company: "Bank Of New York Mellon",
    image: sakshi,
  },
  {
    name: "Mr.Nilesh Godse",
    batch: "(Batch : 2024-25)",
    ctc: "CTC 10 LPA",
    company: "Bank Of New York Mellon",
    image: nilesh,
  },
];

function IntegratedBbaMbaPlacement() {
  return (
    <div className="bg-[#F7F3EF] py-10 px-4 sm:px-6 md:px-8">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-[#555555]">
        Our <span className="text-[#f37021]">Top</span> Placements
      </h1>

      {/* Responsive Profiles Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2"
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 border-4 border-[#FCFAEE] object-top"
            />
            <div className="text-sm sm:text-base font-semibold text-gray-800">
              {profile.name}
            </div>
            <div className="text-xs sm:text-sm text-gray-600">{profile.batch}</div>

            {/* Company Name */}
            <div className="text-xs sm:text-sm text-[#f37021] font-bold">
              {profile.company}
            </div>

            {/* CTC Tag */}
            <div className="bg-gradient-to-l from-[#DC8620] via-[#FDD951] to-[#DC8620] px-3 py-1 rounded-full text-black font-bold text-xs sm:text-sm md:text-base lg:text-lg flex items-center justify-center gap-1">
              <span className="font-medium">CTC</span>
              <span className="text-lg sm:text-xl md:text-2xl">
                {profile.ctc.match(/\d+(\.\d+)?/)}
              </span>
              <span className="font-medium">LPA</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IntegratedBbaMbaPlacement;
