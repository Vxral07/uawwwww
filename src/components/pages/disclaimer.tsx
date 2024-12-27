import { SparklesCore } from "../ui/sparkles";

const Disclaimer = () => {
  return (
    <section className="py-10 sm:py-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl text-white font-poppins">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl pb-5 font-poppins mr-12 font-medium leading-tight tracking-wide text-cyan-400 hover:text-cyan-400 sm:text-4xl lg:text-5xl">
            Disclaimer
          </h2>
          <div className="w-[40rem] h-10 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#030F26"
            />

          </div>
        </div>
        <div >
          <p>
            This disclaimer is intended for general informational purposes only. It is provided by Nuqi Digital Wealth Limited ("NUQI DIFC"), a company regulated by the Dubai Financial Services Authority ("DFSA") with offices located at, 501, Innovation One Building, DIFC, Dubai, UAE. <br /> <br />
            Please note that the information provided is not intended to be research material, investment advice, or a solicitation to buy or sell any securities or financial instruments. It is for general informational purposes only and does not take into account your specific investment objectives, financial situation, or individual needs. You should not rely solely on this information when making investment decisions.<br /><br />
            Before making any investment, you should carefully review the relevant offering documents and seek independent legal, tax, and regulatory advice. This includes consulting with a qualified advisor to determine if a particular investment is suitable for you, considering your unique circumstances.<br /><br />
            Opinions, forecasts, and estimates are those of Nuqi Digital Wealth Limited as of the date of this information and are subject to change without notice. Past performance is not indicative of future results, and no guarantee or warranty is made regarding future investment performance.<br /><br />
            Any forecasts included here regarding potential future movements in rates, prices, events, or occurrences are solely opinions and should not be taken as guarantees of actual future results. Neither the analysts who prepared this information nor their close associates have any material financial interest in the investments mentioned. Additionally, Nuqi Digital Wealth Limited do not hold shares in any of the recommended securities.<br /><br />
            Furthermore, Nuqi Digital Wealth Limited and its affiliates do not act as corporate brokers, market makers, or have any commercial relationships with the issuers of the securities mentioned in this material. Likewise, none of the issuers of these securities have any ownership stake in Nuqi Digital Wealth Limited or its affiliates.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
