import React, { useEffect } from "react";
import { gsap } from "gsap";
import forkliftImage from "../../assets/images/forklift-cropped.avif"; // Adjust the path to your forklift image

const MechForklift = () => {
  useEffect(() => {
    // GSAP animation to move the forklift from left to right
    gsap.fromTo(
      ".forklift",
      { x: "-30%" }, // Start position off-screen to the left
      {
        x: "600%", // Move to the right
        duration: 20, // Duration of the animation (adjust as needed)
        repeat: -1, // Infinite loop
        ease: "linear", // Smooth linear movement
      }
    );
  }, []);

  return (
    <div className="absolute bottom-[-0rem] left-0 z-1">
      <img
        src={forkliftImage}
        alt="Forklift"
        className="forklift w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6" // Responsively adjust width for different screen sizes
      />
    </div>
  );
};

export default MechForklift;
