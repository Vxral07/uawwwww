import React from "react";

interface FAQCardProps {
  title: string | React.ReactNode; // Already updated
  description: string | React.ReactNode; // Allow JSX for description as well
  customStyles?: string;
}


export const FAQCard: React.FC<FAQCardProps> = ({ title, description, customStyles }) => {
  return (
    <div
      className={`bg-gradient-to-b from-[#1d1d1f] to-[#0d0d0d] p-6 rounded shadow-md flex flex-col justify-center items-center -mt-4 -mx-2 text-center hover:!bg-black hover:!bg-none hover:shadow-[inset_0_0_20px_#0dd3ff] transition-all duration-300 ease-in-out border-[#8a9299] ${customStyles}`}
    >
      <h3 className="text-lg font-semibold mb-2 lg:mb-8">
        <span>{title}</span> {/* Title and question now in one line */}
      </h3>
      <p className="text-sm text-gray-300 leading-5">{description}</p>
    </div>
  );
};
