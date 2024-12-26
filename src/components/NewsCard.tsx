import * as React from "react";

export interface NewsCardProps {
  imageSrc: string;
  title: string;
  imageAlt: string;
  link: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({ imageSrc, title, imageAlt, link }) => {
  return (
    <div className="flex flex-col w-full sm:w-[45%] lg:w-3/12 bg-gradient-to-b from-[#1d1d1f] to-[#0d0d0d] border border-1 border-solid border-[#44464a] rounded-[40px] hover:!bg-black hover:!bg-none hover:shadow-[inset_0_0_20px_#0dd3ff] transition-all duration-300 ease-in-out">
      <div className="flex flex-col items-center grow px-8 pt-11 pb-10 font-semibold leading-tight sm:px-6">
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
          }}
        >
          {title}
        </div>

        {/* Learn More Button */}
        <div className="mt-3 underline">
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

