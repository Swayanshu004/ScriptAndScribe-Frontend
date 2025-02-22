import React from 'react';
import Image from 'next/image';

const Choosebutton = ({ imageSrc, title }) => {
  return (
    <div className="w-full h-76 lg:h-60 flex flex-col items-start">
      <Image 
        src={imageSrc} 
        className="w-24" 
        width={1000} 
        height={1000} 
        alt={title} 
      />
      <p className="w-5/6 text-center mt-2">{title}</p>
    </div>
  );
};

export default Choosebutton;