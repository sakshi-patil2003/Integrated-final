import React from 'react';
import bannerImage from '../../assets/images/IT-Images/ItPlacement.avif'; // Replace with your banner image path

const ItPlacement = () => {
  return (
<div className="w-full">
      {/* Responsive Image */}
      <img
        src={bannerImage}
        alt="Mech Placement"
        className="w-full h-auto object-cover "
      />
    </div>
  );
};

export default ItPlacement;
