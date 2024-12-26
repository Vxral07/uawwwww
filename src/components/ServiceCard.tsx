import React from "react";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  imageAlt: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
  imageAlt,
}) => {
  return (
    
    <div
      
      className="flex flex-col h-[400px] rounded-[30px] mr-3 lg: items-center m-3 justify-between mt-16 p-6 bg-[#000000] text-white hover:shadow-[inset_0_0_20px_#0dd3ff] transition-shadow duration-300 ease-in-out shadow-md border border-[#44464a]"   
    >
      {/* Image Section */}
      <div
        className="w-full h-48 flex items-center justify-center bg-[#040404] rounded-md mb-4"
        
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-poppins text-cyan-400  text-center">
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-sm text-white font-poppins text-center"
        
      >
        {description}
      </p>
    </div>
  );
};
