import * as React from "react";

interface ImageCardProps {
  imageSrc: string;
  imageAlt: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, imageAlt }) => {
  return (
    <div className="flex items-center justify-center">
      <img
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className="object-contain w-[100px] h-[100px]" // Increased size for better visibility
      />
    </div>
  );
};
