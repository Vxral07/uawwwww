import React, { useState } from "react";
import { useKeenSlider, KeenSliderInstance } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { PortfolioCard } from "./PortfolioCard";

// Extend KeenSliderInstance to include custom autoplay methods
interface ExtendedKeenSliderInstance extends KeenSliderInstance {
  startAutoplay?: () => void;
  stopAutoplay?: () => void;
}

// Autoplay Plugin with Pause/Resume Functionality
function Autoplay({ delay = 2000 }: { delay?: number }) {
  return (slider: ExtendedKeenSliderInstance) => {
    let timeout: any;
    let mouseOver = false;

    function clearNextTimeout() {
      clearTimeout(timeout);
    }

    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        slider.next();
      }, delay);
    }

    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });

    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);

    // Add custom autoplay methods
    slider.startAutoplay = () => nextTimeout();
    slider.stopAutoplay = () => clearNextTimeout();
  };
}

const portfolioData = [
  {
    icon: "/entrenched.mp4",
    title: "Entrenched Enterprises",
    description:
      "Entrenched Enterprises offers a selection of established companies with strong market presence and proven track records. These stocks represent stable and reliable investments in well-established industries.",
    basket: "global",
  },
  {
    icon: "/APP_2.mp4",
    title: "Income Generators",
    description:
      "Income Generators focuses on dividend-paying stocks known for their consistent income generation. These stocks provide investors with steady cash flow and potential for long-term wealth accumulation.",
    basket: "global",
  },
  {
    icon: "/Artificial Intellegence.mp4",
    title: "Artificial Intelligence",
    description:
      "Artificial Intelligence comprises stocks of companies at the forefront of AI technology development. These innovative companies leverage AI to drive growth, efficiency, and disruption in various sectors.",
    basket: "global",
  },
  {
    icon: "/60 40.mp4",
    title: "60 40 Portfolios (ETFs)",
    description:
      "The 60/40 Portfolios offer a balanced approach to investment, consisting of a mix of 60% equity ETFs and 40% fixed-income ETFs. This diversified portfolio aims to provide stability and growth potential for investors.",
    basket: "global",
  },
];

export const PortfolioGrid: React.FC = () => {
  const [sliderInstance, setSliderInstance] =
    useState<ExtendedKeenSliderInstance | null>(null);

  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      breakpoints: {
        "(min-width: 768px)": {
          slides: {
            perView: 2, // Show 2 slides per view on tablets
            spacing: 15,
          },
        },
        "(min-width: 1000px)": {
          slides: {
            perView: 3, // Show 3 slides per view on desktops
            spacing: 0,
          },
        },
      },
      slides: {
        perView: 1, // Show 1 slide per view on mobile
        spacing: 10,
      },
      created: (slider) => setSliderInstance(slider),
    },
    [Autoplay({ delay: 2000 })]
  );

  const handleModalToggle = (isOpen: boolean) => {
    if (sliderInstance) {
      if (isOpen) {
        sliderInstance.stopAutoplay?.(); // Pause autoplay
      } else {
        sliderInstance.startAutoplay?.(); // Resume autoplay
      }
    }
  };

  return (
    <div className="flex flex-col items-center py-20 bg-black text-white">
      {/* Section Header */}
      <h1 className="mb-5 text-center font-poppins tracking-wide leading-8 text-3xl pb-1 sm:text-4xl lg:text-4xl">
        <span className="text-white">Nuqi</span>{" "}
        <span className="text-white">Global</span>{" "}
        <span className="text-white">CEP</span>{" "}
        <span className="text-cyan-500">(Curated Equity Portfolios)</span>
      </h1>

      <p className="max-w-3xl text-center font-poppins tracking-wide leading-6 lg:text-lg text-[#b3b3b3] mb-2">
        At NUQI, our team of seasoned investment professionals crafts a diverse
        range of investment themes, seamlessly leading to Curated Equity
        Portfolios tailored to align with distinct risk appetites and financial
        objectives.
      </p>

      {/* Carousel Layout */}
      <div ref={ref} className="keen-slider w-full px-4 lg:px-20 py-6">
        {portfolioData.map((portfolio, index) => (
          <div key={index} className="keen-slider__slide">
            <PortfolioCard
              key={index}
              index={index}
              {...portfolio}
              onModalToggle={handleModalToggle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
