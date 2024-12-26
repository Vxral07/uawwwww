
import React from "react";
import Marquee from "react-fast-marquee";
import { PortfolioCard } from "./PortfolioCard";

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
  return (
    <div className="flex flex-col -mt-10 items-center py-20 bg-black text-white">
      {/* Section Header */}
      <h1 className="mb-5 text-center font-poppins tracking-wide leading-8 text-3xl pb-1  sm:text-4xl lg:text-4xl">
        <span className="text-white">Nuqi</span>{" "}
        <span className="text-white">Global</span>{" "}
        <span className="text-white"></span>{" "}
        <span className="text-cyan-500"> Curated Equity Portfolios(CEP)</span>
      </h1>

      <p className="max-w-3xl text-center font-poppins tracking-wide leading-6 lg:text-lg text-[#b3b3b3] mb-2">
        Our collaborations with esteemed financial institutions and regulatory authorities underscore our unwavering commitment to security and responsible financial practices, providing a trusted and reliable environment for managing your investments.
      </p>

      {/* Grid Layout */}
      {/* <Marquee>
        <div className="flex overflow-x-auto gap-8 px-5 py-10">
          {portfolioData.map((portfolio, index) => (
            <PortfolioCard key={index} index={index} {...portfolio} />
          ))}
        </div>
      </Marquee> */}
      <Marquee speed={30} gradient={false} pauseOnHover={true}>
        <div className="flex gap-8 px-5 py-10 w-full">
          {portfolioData.map((portfolio, index) => (
            <div key={index} className="flex-shrink-0 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]">
              <PortfolioCard {...portfolio} />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};
