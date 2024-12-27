import React from "react";
import { FAQCard } from "./FAQCard";

export const FAQSection: React.FC = () => {
  return (
    <div className="text-white -mt-5 px-5">
      <h1 className="text-center pt-16 text-4xl font-poppins text-cyan-500 mb-7">
        FAQs
      </h1>

      {/* What is Nuqi Section */}
      <div className="p-8 bg-gradient-to-b from-[#1d1d1f] to-[#0d0d0d] max-w-[1100px] border-[#44464a] mx-auto border rounded-[61px] shadow-lg text-center mb-8 hover:!bg-black hover:!bg-none hover:shadow-[inset_0_0_20px_#0dd3ff] transition-all duration-300 ease-in-out">
        <h2 className="text-2xl font-poppins mb-4 text-white">
          What is Nuqi?
        </h2>
        <p className="text-sm font-poppins leading-6 text-gray-300">
          NUQI is an independent advisory platform, licensed by SEBI in India
          aimed at both first-time investors starting their <br /> investment
          journey and seasoned investors looking to diversify their portfolio.
          NUQI deploys its in-house expertise to create <br /> portfolios
          tailored for specific investor profiles / Investment Themes. NUQI has
          a team of qualified Investment Managers and <br /> select financial
          bodies to independently screen the Universe of Ethical Investments
          with both Domestic and International <br /> market exposures. The
          platform uses multiple criteria to make a selection of Stocks, ETFs,
          Mutual funds, Sukuks etc. <br /> with Social Equity, Ethical
          operations, good Governance, and Environment protection as core
          investment themes which are
          <br />
          considered as key elements aimed towards Sustainable Growth.
        </p>
      </div>


      {/* Responsive FAQ Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto ">
        {/* FAQ Cards */}
        <FAQCard
          title="Why Invest through Nuqi?"
          description="•Access diverse portfolio featuring 1000+ global stocks, along with ETFs, mutual funds, and sukuks.
•	Access to global markets like US, UK, Europe and more.
•	Access global and local ethical mutual funds for systematic investment planning and lumpsum.
•	Pre-designed portfolios by qualified investment advisors for long term investing.
"
          customStyles="col-span-1 max-sm:mx-2 lg:col-span-1 lg:row-span-2  min-h-[200px] lg:h-[450px] border border-solid border-white border-opacity-40 rounded-[61px]   "
        />


        <FAQCard
          title={
            <>
              Does Nuqi require a minimum <br />
              investment to get started?
            </>
          }
          description={
            <>
              You can start your NUQI investment journey <br />
              with USD 100 *
            </>
          }
          customStyles="min-h-[200px] max-sm:mx-2  border border-solid border-white border-opacity-40 rounded-[50px]"
        />


        <FAQCard
          title="Does Nuqi perform RISK profiling to understand your investment goals?"
          description="YES, NUQI performs through RISK profiling for all clients"
          customStyles="min-h-[200px] -ml-2 max-sm:mx-2  lg:mr-2 border border-solid border-white border-opacity-40 rounded-[50px] "
        />

        <FAQCard
          title="Where can I invest?"
          description="With NUQI, now you have the option to invest in select financial products in International markets. NUQI takes a cautious approach and presently will only recommend investment instruments that have been pre-screened and carry returns as per your risk profile."
          customStyles="col-span-1 lg:col-span-1 max-sm:mx-2 lg:row-span-2 min-h-[200px] lg:h-[430px] border border-solid border-white border-opacity-40 rounded-[61px]"
        />


        <FAQCard
          title={
            <>
              Can you buy fractional shares of stocks through Nuqi ?
            </>
          }
          description={
            <>
              Yes
            </>
          }
          customStyles="min-h-[200px] max-sm:mx-2  border border-solid border-white border-opacity-40 rounded-[50px]"
        />
        <FAQCard
          title={
            <>
              Can you set up Regular Investment Plan through the Nuqi app?
            </>
          }
          description={
            <>
              Yes
            </>
          }
          customStyles="min-h-[200px] max-sm:mx-2  border border-solid border-white border-opacity-40 rounded-[50px]"
        />
        <FAQCard
          title={
            <>
              Does Nuqi help with asset allocation based on your goals?
            </>
          }
          description={
            <>
              YES, Asset allocation is the core for investment advisory.


            </>
          }
          customStyles="min-h-[200px] max-sm:mx-2  border border-solid border-white border-opacity-40 rounded-[50px]"
        />

        <FAQCard
          title="How Does it work?"
          description="NUQI mobile app is soon available for Android and iOS devices and is free to download. You can register for a free account and browse the how-to-use instructions, market news, featured portfolios – all in the app itself. Once you have filled out the personal assessment questionnaire, the NUQI platform will assign an investor profile to you based on your risk appetite and recommend investment instruments accordingly. You can always change your risk profile by re-taking the questionnaire and NUQI will once again offer you a list of new recommendations suited to you"
          customStyles="col-span-1 lg:col-span-1 lg:row-span-2 ml-2 lg:ml-0 min-h-[200px] lg:h-[450px] border border-solid border-white border-opacity-40 rounded-[61px] max-md:mr-2 "
        />


        <FAQCard
          title="Are there live events to learn more about Nuqi's investment strategies?"
          description="YES live online sessions / Global Event Participations on the cards."
          customStyles="min-h-[200px] mr-2 lg:mr-0 border border-solid border-white border-opacity-40 rounded-[50px] max-md:ml-2"
        />
        <FAQCard
          title="Can you track your investments' performance live on the Nuqi app?"
          description="YES our exhaustive portfolio view will, give you 360 Degree View on your investments."
          customStyles="col-span-1 lg:col-span-1 lg:row-span-2 ml-2 lg:ml-0 min-h-[200px] lg:h-[450px] border border-solid border-white border-opacity-40 rounded-[61px] max-md:mr-2 "
        />

        <FAQCard
          title={
            <>
              Does Nuqi have resources to learn about investing for beginners?
            </>
          }
          description={
            <>
              YES NUQI Ethosphere is our research library for enthusiastic ones.
            </>
          }
          customStyles="min-h-[200px] max-sm:mx-2  border border-solid border-white border-opacity-40 rounded-[50px]"
        />

        <FAQCard
          title="Can you adjust your investment plan based on changing risk tolerance?"
          description="YES, you have the flexibility to change your RISK profile basis any material change in your circumstances."
          customStyles="min-h-[200px] lg:mr-0 mr-2 border border-solid border-white border-opacity-40 rounded-[50px] max-md:ml-2"
        />

        <FAQCard
          title="Does Nuqi leverage its associations to provide access to in-depth research reports?"
          description="Yes IRIS & Ethosphere keep a watch."
          customStyles="min-h-[200px] lg:mr-0 mr-2 border border-solid border-white border-opacity-40 rounded-[50px] max-md:ml-2"
        />
        <FAQCard
          title="Does Nuqi leverage its associations to provide access to in-depth research reports?"
          description="Yes IRIS & Ethosphere keep a watch."
          customStyles="min-h-[200px] lg:mr-0 mr-2 border border-solid border-white border-opacity-40 rounded-[50px] max-md:ml-2"
        />



      </div>
    </div>
  );
};
