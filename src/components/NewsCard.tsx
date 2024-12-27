import * as React from "react";

export interface NewsCardProps {
  imageSrc: string;
  title: string;
  imageAlt: string;
  link: string;
  className?: string; // New prop
}

export const NewsCard: React.FC<NewsCardProps> = ({
  imageSrc,
  title,
  imageAlt,
  link,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col bg-gradient-to-b from-[#1d1d1f] to-[#0d0d0d] border border-[#44464a] rounded-[40px] hover:!bg-black hover:!bg-none hover:shadow-[inset_0_0_20px_#0dd3ff] transition-all duration-300 ease-in-out ${className}`}
    >
      <div className="flex flex-col items-center grow px-12 pt-11 pb-10 font-semibold leading-tight max-md:px-5 max-md:mt-10">
        {/* Image */}
        <img
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className="object-contain self-stretch w-full aspect-[3.28]"
        />

        {/* Title */}
        <div
          className="mt-3 text-center text-white"
          style={{
            minHeight: "4rem", // Ensures consistent height for all titles
            display: "flex",
            alignItems: "center", // Vertically center titles
            justifyContent: "center", // Center horizontally
            textAlign: "center",
            marginBottom: "1.5rem", // Add gap between title and Learn More button
          }}
        >
          {title}
        </div>

        {/* Learn More Button */}
        <div className="-mt-5 underline">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400"
            tabIndex={0}
            aria-label={`Learn more about ${title}`}
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};
