import * as React from "react";
import { ImageCard } from "./ImageCard";
import { QRCode } from "./QRCode";

const imageData = [
  {
    id: 1,
    src: "/app store copy apple.png",
    alt: "Play Store",
  },
  {
    id: 2,
    src: "/app store copy.png",
    alt: "App Store",
  },
  {
    id: 3,
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5dfe62b21a3cd922442aa7ca269ef01f76f81150bf86b67e9264b30442c82484?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    alt: "QR Code",
  },
];

export const ImageCardContainer: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 mb-9 ">
      {/* Content Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1200px] px-8 gap-8">
        {/* Left Section: Play Store & App Store */}
        <div
          className="flex flex-col gap-6 items-center justify-center p-12 relative"
          style={{
            backgroundImage: `url('Rectangle 152.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "500px",
            height: "300px",
            borderRadius: "20px",
          }}
        >
          <h2 className="text-3xl lg:text-4xl font-poppins text-cyan-400 mb-6">Available on</h2>
          <div className="flex gap-16">
            {imageData.slice(0, 2).map((image) => (
              <ImageCard key={image.id} imageSrc={image.src} imageAlt={image.alt} />
            ))}
          </div>
        </div>

        {/* Right Section: QR Code */}
        <div className="flex flex-col items-center justify-center">
          <QRCode imageSrc={imageData[2].src} imageAlt={imageData[2].alt} />
          <p className="mt-4 text-white text-sm">Scan QR code</p>
        </div>
      </div>
    </div>
  );
};
