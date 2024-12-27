import { HeroSectionProps } from "@/types";
import * as React from "react";

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  highlightedText,
  imageSrc,
  description,
}) => {
  return (
    <div className="rounded-none">
      <div className="flex gap-10 ml-5 lg:ml-28 mt-10 items-center max-md:flex-col">
        {/* Left Section */}
        <div className="flex flex-col w-[30%] ml-20 max-md:ml-0 max-md:w-full">
          {/* Title */}
          <div className="self-stretch text-4xl ml-5 mt-4 font-poppins tracking-normal leading-6 text-cyan-500 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            <span className="text-white">{highlightedText} </span>
            {title}
          </div>
          {/* Description */}
          <div className="mt-10 text-white font-poppins leading-6 text-base ml-5">
            {description}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col ml-5 w-[60%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt="Nuqi Prive hero section"
            className="object-contain grow w-full rounded-3xl aspect-[1.41] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};


// import { HeroSectionProps } from "@/types";
// import * as React from "react";

// export const HeroSection: React.FC<HeroSectionProps> = ({
//   title,
//   highlightedText,
//   imageSrc,
//   description,
// }) => {
//   return (
//     <div className="rounded-none">
//       <div className="flex gap-10 ml-5 items-center max-md:flex-col">
//         {/* Left Section */}
//         <div className="flex flex-col  w-[30%] ml-20 max-md:ml-0 max-md:w-full">
//           {/* Title */}
//           <div className="self-stretch text-4xl ml-5 mt-4 font-poppins tracking-normal leading-6 text-cyan-500 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
//             <span className="text-white">{highlightedText} </span>
//             {title}
//           </div>
//           {/* Description */}
//           <div
//             className="mt-10 text-white font-poppins  leading-6 text-sm ml-5 overflow-hidden"
//             style={{
//               height: "6rem", // 4 lines * 1.5rem (line height)
//               maxHeight: "6rem", // Ensure content doesn't exceed 4 lines
//               wordBreak: "break-word", // Break long words
//               display: "block", // Ensure block layout for proper text wrapping
//               overflow: "hidden", // Hide overflow content
//               textOverflow: "ellipsis", // Add ellipsis for overflow
//             }}
//           >
//             {description}
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="flex flex-col ml-5 w-[60%] max-md:ml-0 max-md:w-full">
//           <img
//             loading="lazy"
//             src={imageSrc}
//             alt="Nuqi Prive hero section"
//             className="object-contain grow w-full rounded-3xl aspect-[1.41] max-md:mt-10 max-md:max-w-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
