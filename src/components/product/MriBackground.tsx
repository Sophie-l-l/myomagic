
import React from 'react';

interface MriBackgroundProps {
  mriImages: string[];
}

const MriBackground: React.FC<MriBackgroundProps> = ({ mriImages }) => {
  return (
    <>
      <div className="absolute inset-0 z-[-2]">
        <div className="scanline"></div>
      </div>
      
      {/* MRI Images as Background */}
      <div className="absolute inset-0 z-[-1] grid grid-cols-2 gap-4 opacity-10">
        {mriImages.map((src, index) => (
          <div key={index} className="overflow-hidden">
            <img 
              src={src} 
              alt="MRI Background" 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MriBackground;
