import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom"; // Import ReactDOM for portals
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PortfolioCardProps } from "@/types";
import { LearnMoreButton } from "./LearnMoreButton";
import Graph from "./trading/graph";
import { ScrollArea } from "./ui/scroll-area";
import { globalBasketsData } from "@/lib/utils";

const globalApi = [11, 60, -1, -1];

export const PortfolioCard: React.FC<PortfolioCardProps & { onModalToggle: (isOpen: boolean) => void }> = ({
  icon,
  title,
  description,
  index,
  basket,
  onModalToggle,
}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      onModalToggle(true); // Notify parent to stop autoplay
    } else {
      document.body.style.overflow = "auto";
      onModalToggle(false); // Notify parent to resume autoplay
    }
  }, [open, onModalToggle]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Render modal using React Portal
  const modal = (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Content */}
          <motion.div
            className="relative max-w-5xl w-full p-6 bg-white dark:bg-neutral-900 rounded-3xl shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center"
              onClick={handleClose}
            >
              ✕
            </button>

            {/* Modal Header */}
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>

            {/* Graph Section */}
            {globalApi[index] !== -1 && <Graph id={globalApi[index]} />}

            {/* Constituents */}
            <h3 className="text-xl font-semibold mt-6 mb-4">
              Constituents of {title}
            </h3>
            <ScrollArea className="max-h-48">
              <div className="pb-4 pr-4">
                {globalBasketsData[index].map((company) => (
                  <div
                    key={company.name}
                    className="flex justify-between items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                    onClick={() => {
                      setOpen(false);
                      const url =
                        basket === "global"
                          ? `/stock?symbol=${company.symbol}`
                          : `/stock?symbol=BSE:${company.symbol}`;
                      navigate(url);
                      window.location.href = url; // Forces refresh
                    }}
                  >
                    <p className="text-sm font-medium">{company.name}</p>
                    {company.image && (
                      <img
                        src={`/scrips/${company.image}.png`}
                        alt={company.name}
                        className="w-8 h-8 object-contain"
                      />
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Card */}
      <div
        className="flex flex-col items-center p-6 w-full max-w-[400px] h-[340px] bg-gradient-to-b from-[#1d1d1f] to-[#0d0d0d] text-cyan-400 border border-solid border-opacity-40 border-[#8a9299] rounded-[50px] shadow-lg hover:!bg-black hover:!bg-none hover:shadow-[inset_0_0_20px_#0dd3ff] transition-all duration-300 ease-in-out cursor-pointer"
        onClick={handleOpen}
      >
        {/* Video as Icon */}
        <div className="flex items-center justify-center w-[80px] h-[80px] mb-4 bg-black rounded-2xl border border-[#8a9299] overflow-hidden">
          <video
            src={icon}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Title */}
        <h3 className="text-lg font-poppins text-center mb-4">{title}</h3>

        {/* Description */}
        <p className="text-sm text-center font-poppins text-gray-300 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Learn More Button */}
        <div className="mt-4">
          <LearnMoreButton onClick={handleOpen} />
        </div>
      </div>

      {/* Render Modal in Portal */}
      {ReactDOM.createPortal(modal, document.body)}
    </>
  );
};
