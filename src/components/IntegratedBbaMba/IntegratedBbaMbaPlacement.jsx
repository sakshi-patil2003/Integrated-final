import "react";
 
// Import profile images
import johnDoeImage from "../../../public/BBA-MBA/passport.avif";
import janeSmithImage from "../../../public/BBA-MBA/passport.avif";
import arjunPatelImage from "../../../public/BBA-MBA/passport.avif";
import snehaRaoImage from "../../../public/BBA-MBA/passport.avif";
import aliKhanImage from "../../../public/BBA-MBA/passport.avif";
import meeraDasImage from "../../../public/BBA-MBA/passport.avif";
 
// Profile data
const profiles = [
  {
    name: "Manisha Sharma",
    batch: "(Batch : 2024-25)",
    ctc: "CTC 24 LPA",
    image: johnDoeImage, // Imported image
  },
  {
    name: "Kapil Sharma",
    batch: "(Batch : 2024-25)",
    ctc: "CTC 24 LPA",
    image: janeSmithImage, // Imported image
  },
  {
    name: "Arjun Patel",
    batch: "(Batch : 2024-25)",
    ctc: "CTC 21 LPA",
    image: arjunPatelImage, // Imported image
  },
  {
    name: "Sneha Rao",
    batch: "(Batch : 2024-25)",
    ctc: "CTC 27 LPA",
    image: snehaRaoImage, // Imported image
  },
  {
    name: "Ali Khan",
    batch: "(Batch : 2024-25)",
    ctc: "CTC 21 LPA",
    image: aliKhanImage, // Imported image
  },
  {
    name: "Meera Das",
    batch: "(Batch : 2024-25)",
    ctc: "CTC 27 LPA",
    image: meeraDasImage, // Imported image
  },
];
 
function IntegratedBbaMbaPlacement() {
  return (
    <div className="bg-[#F7F3EF] py-8 px-4">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10 text-gray-800">
        OUR TOP PLACEMENT
      </h1>
 
      {/* Profiles Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {profiles.map((profile, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={profile.image}
              alt={profile.name}
              className="rounded-full w-24 md:w-36 h-24 md:h-36 mb-4 object-cover border-6 border-[#FCFAEE]" // Added border class here
            />
            <div className="text-lg font-semibold text-gray-800">
              {profile.name}
            </div>
            <div className="text-sm text-gray-600 mt-1">{profile.batch}</div>
 
            {/* CTC Container with Gradient Background and no line break */}
            <div className="mt-2 md:mt-3 bg-gradient-to-l from-[#DC8620] via-[#FDD951] to-[#DC8620] text-black px-2 md:px-4 py-1 md:py-2 rounded-full text-2xl font-semibold whitespace-nowrap flex items-center gap-1">
              <span className="text-lg md:text-2xl">CTC</span>
              <span className="text-xl md:text-4xl font">{profile.ctc.match(/\d+/)}</span>
              <span className="text-lg md:text-2xl">LPA</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default IntegratedBbaMbaPlacement;