import { InvestmentFeature } from "@/types";
import * as React from "react";
import { FeatureCard } from "./FeatureCard";

const features: InvestmentFeature[] = [
  {
    title: "Tailored Equity Solutions",
    description:
      "Gain access to 5,000+ carefully selected stocks, screened through a robust exclusion list of industries and financial ratios to ensure quality and alignment. Additionally, explore 18+ expertly Curated Equity Portfolio’s, tailored to meet diverse financial goals and strategies." 
  },
  {
    title: " Asset Diversification",
    description:
      "Equity, ETFs, and Mutual Funds to spread your exposure across various asset classes, enhancing stability and potential returns.",
  },
  {
    title: "Portfolio Rebalancing",
    description:
    "NUQI's expert team of advisors, alongside a supervisory panel, ensures portfolios are rebalanced every six months to maintain alignment with your investment goals and market conditions."
    
  },
  {
    title: "Secure and Regulated",
    description:
      "NUQI Digital Wealth (DIFC) operates under the robust oversight of DFSA regulations, ensuring smooth and compliant product offerings tailored to your requirements. With retail endorsement, NUQI lowers entry barriers,making quality investment opportunities more accessible ",
  },
  {
    title: "Robo Advisory",
    description:
      "Utilize NUQI's AI-powered Robo Advisory, which analyzes industry trends and tailors recommendations to suit your unique risk profile and investment goals. This cutting-edge technology ensures smarter, data-driven decisions to optimize your portfolio.",

  },
  {
    title: "Global Market Access",

    description:
      "Gain unparalleled access to 9+ global markets, complemented by in-depth fundamental data at your fingertips NUQI empowers you to make informed investment decisions with seamless access to international opportunities.",    
  },
];

export const InvestmentFeatures: React.FC = () => {
  return (
    <div className=" px-10 max-md:px-5">
      <div className="grid lg:grid-cols-2 gap-9 lg:gap-0 items-center max-md:flex-col">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src="/home screen page gif.gif"
            alt="Investment Features"
            className="h-auto w-full max-w-[650px] rounded-lg object-contain"
          />
        </div>

        {/* Feature Cards Section */}
        <div className="flex flex-col gap-8 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              className="border-[#44464a] rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

