import React from 'react';
import placementImage from '../../assets/images/Com-Images/CompPlacement.avif'; // Replace with your image path

const MechPlacement = () => {
  return (
    <div className="w-full">
      {/* Responsive Image */}
      <img
        src={placementImage}
        alt="Mech Placement"
        className="w-full h-auto object-cover "
      />
    </div>
  );
};

export default MechPlacement;
