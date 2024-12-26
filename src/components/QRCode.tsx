import * as React from "react";

interface QRCodeProps {
  imageSrc: string;
  imageAlt: string;
}

export const QRCode: React.FC<QRCodeProps> = ({ imageSrc, imageAlt }) => {
  return (
    <div className="flex items-center mt-9 justify-center">
      <img
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className="object-contain w-[450px] h-[240px]" // Increased size for the QR Code
      />
    </div>
  );
};
