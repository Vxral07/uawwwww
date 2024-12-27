import { LinkedinIcon } from "lucide-react";
import { Link } from "react-router-dom";
import "../../index.css";
import { SparklesCore } from "../ui/sparkles";

const AboutPage = () => {
    return (
        <section className="py-10 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="h-[10rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
                    <h2 className="text-3xl pb-5 font-poppins font-medium leading-tight tracking-wide text-cyan-400 hover:text-cyan-400 sm:text-4xl lg:text-5xl">
                        About Us
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
                        {/* Radial Gradient to prevent sharp edges */}
                        <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                        
                    </div>
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-white font-poppins max-w-2xl mx-auto mt-4 text-base sm:text-lg lg:text-xl leading-relaxed text-secondary">
                        Nuqi boasts top-tier financial experts and elite technology talent, striving to execute proven investment tactics and craft a bespoke investment journey for you. Our skilled team, with decades of experience from esteemed institutions like Citibank, Standard Chartered, Credit Suisse, Dubai Islamic Bank, Microsoft, IBM, ICICI Bank, and EY, is committed to your financial growth.
                    </p>
                </div>

                <h2 className="text-cyan-400 font-poppins text-4xl text-center mt-8 font-bold leading-tight">
                    Meet Our Team
                </h2>

                <div className="flex text-white font-poppins flex-col justify-center items-center mt-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        {/* Team Member 1 */}
                        <div className="abtWrap flex flex-col md:flex-row gap-2 justify-items-center">
                            <div className="leftWrp">
                                <h6 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                                    <strong>Imran Farooqui</strong>
                                    <br /> Founder & CEO
                                </h6>
                                <img
                                    src="/team/abt-1.png"
                                    alt="Imran Farooqui"
                                    className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg"
                                />
                            </div>
                            <div className="rigtWrp mt-4 sm:mt-0">
                                <p className="text-base sm:text-lg">
                                    <Link
                                        to={"https://www.linkedin.com/in/imran-farooqui-baa2b7208/"}
                                        target="_blank"
                                    >
                                        <LinkedinIcon className="my-2 text-secondary" />
                                    </Link>
                                    Over two decades in the banking and financial sector across geographies. He specialises in Investment Strategies, Asset Allocation, Private Wealth management, and ESG investments.
                                </p>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="abtWrap flex flex-col md:flex-row justify-center gap-2">
                            <div className="leftWrp">
                                <h6 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                                    <strong>Shreemohan Chauhaan</strong>
                                    <br />
                                    Co-Founder & COO
                                </h6>
                                <img
                                    src="/team/abt-2.png"
                                    alt="Shreemohan Chauhaan"
                                    className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg"
                                />
                            </div>
                            <div className="rigtWrp mt-4 sm:mt-0">
                                <p className="text-base sm:text-lg">
                                    <Link
                                        to={"https://www.linkedin.com/in/shremohan/"}
                                        target="_blank"
                                    >
                                        <LinkedinIcon className="my-2 text-secondary" />
                                    </Link>
                                    23 years of Global Banking Experience, MBA in marketing, Alternative Investment from Harvard Business School & Climate Finance from CFA Institute. Has been actively associated with India / GCC / Africa and Southeast Asian financial markets.
                                </p>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="abtWrap flex flex-col md:flex-row justify-center gap-2">
                            <div className="leftWrp">
                                <h6 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                                    <strong>Irfan Mulla</strong>
                                    <br />
                                    Head of Marketing
                                </h6>
                                <img
                                    src="/team/abt-4.png"
                                    alt="Irfan Mulla"
                                    className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg"
                                />
                            </div>
                            <div className="rigtWrp mt-4 sm:mt-0">
                                <p className="text-base sm:text-lg">
                                    Advertising and Marketing lead with focused digital ecosystem marketing experience across AMEA regions. Statistics graduate with over 25 years of industry experience.
                                </p>
                            </div>
                        </div>

                        {/* Team Member 4 */}
                        <div className="abtWrap flex flex-col md:flex-row justify-center gap-2">
                            <div className="leftWrp">
                                <h6 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                                    <strong>Osama Sharif</strong>
                                    <br />
                                    Head of Technology
                                </h6>
                                <img
                                    src="/team/abt-5.png"
                                    alt="Osama Sharif"
                                    className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg"
                                />
                            </div>
                            <div className="rigtWrp mt-4 sm:mt-0">
                                <p className="text-base sm:text-lg">
                                    10+ Years experience in IT Digital Transformation in Saudi Arabia, UAE & India. Certified Project Management Professional (PMP) and Oracle Certified Programmer (OCP) to lead Product Implementation & development projects for large organizations.
                                </p>
                            </div>
                        </div>

                        {/* Team Member 5 */}
                        <div className="abtWrap flex flex-col md:flex-row justify-center gap-2">
                            <div className="leftWrp">
                                <h6 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                                    <strong>Sonell Kanyal</strong>
                                    <br />
                                    Head of Investment Advisory
                                </h6>
                                <img
                                    src="/team/abt-6.png"
                                    alt="Sonell Kanyal"
                                    className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg"
                                />
                            </div>
                            <div className="rigtWrp mt-4 sm:mt-0">
                                <p className="text-base sm:text-lg">
                                    <Link
                                        to={"https://www.linkedin.com/in/sonell-kanyal-frm-privatebanker-uae/"}
                                        target="_blank"
                                    >
                                        <LinkedinIcon className="my-2 text-secondary" />
                                    </Link>
                                    Certified Chartered Financial Analyst (CFA Institute US), Financial Risk Manager (GARP US), 17+ years’ experience in financial markets, skilled in diverse asset classes, Capital Markets, Financial planning, and Risk management.
                                </p>
                            </div>
                        </div>

                        {/* Team Member 6 */}
                        <div className="abtWrap flex flex-col md:flex-row justify-center gap-2">
                            <div className="leftWrp">
                                <h6 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                                    <strong>Sohail Shafiq</strong>
                                    <br />
                                    Islamic Banking Specialist
                                </h6>
                                <img
                                    src="/team/abt-7.jpeg"
                                    alt="Sohail Shafiq"
                                    className="mt-4 w-full sm:w-48 lg:w-56 rounded-lg"
                                />
                            </div>
                            <div className="rigtWrp mt-4 sm:mt-0">
                                <p className="text-base sm:text-lg">
                                    Sohail has been associated with Islamic banking for over 20 years, working with leading multinational and regional institutions including EY (Ernst & Young), Bank Sarasin, and Standard Chartered Bank.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;



// import { LinkedinIcon } from "lucide-react";
// import { Link } from "react-router-dom";
// import "../../index.css";
// import { SparklesCore } from "../ui/sparkles";

// const AboutPage = () => {
//     return (
//         <section className="py-10 sm:py-16 lg:py-20">
//             <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//                 <div className="max-w-3xl mx-auto text-center">
//                     <h2 className="text-3xl pb-5 font-poppins mr-12 font-medium leading-tight tracking-wide text-cyan-400 hover:text-cyan-400 sm:text-4xl lg:text-5xl">
//                         About us
//                     </h2>
//                     <div className="w-[40rem] h-10 relative">
//                         {/* Gradients */}
//                         <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
//                         <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
//                         <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
//                         <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

//                         {/* Core component */}
//                         <SparklesCore
//                             background="transparent"
//                             minSize={0.4}
//                             maxSize={1}
//                             particleDensity={1200}
//                             className="w-full h-full"
//                             particleColor="#030F26"
//                         />

//                     </div>
//                 </div>

//                 <div className="max-w-3xl mx-auto text-center">
//                     {/* <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r text-white font-poppins sm:text-4xl lg:text-5xl">
//                         About us
//                     </h2> */}
//                     <p className="  text-white font-poppins max-w-2xl mx-auto mt-4 text-base leading-relaxed text-secondary">
//                         Nuqi boasts top-tier financial experts and elite
//                         technology talent, striving to execute proven investment
//                         tactics and craft a bespoke investment journey for you.
//                         Our skilled team, with decades of experience from
//                         esteemed institutions like Citibank, Standard Chartered,
//                         Credit Suisse, Dubai Islamic Bank, Microsoft, IBM, ICICI
//                         Bank and EY is committed to your financial growth.
//                     </p>
//                 </div>
//                 <h2 className="  text-cyan-400 font-poppins text-4xl text-center mt-8 font-bold leading-tight">
//                     Meet Our Team
//                 </h2>
//                 <div className="flex   text-white font-poppins flex-col justify-center items-center mt-16">
//                     <div className="grid md:grid-cols-2 gap-8">
//                         <div className="abtWrap flex flex-col md:flex-row gap-2 abt-1 justify-items-center">
//                             <div className="leftWrp">
//                                 <h6>
//                                     <strong>Imran Farooqui</strong>
//                                     <br /> Founder & CEO
//                                 </h6>
//                                 <img
//                                     src="/team/abt-1.png"
//                                     alt="Imran Farooqui"
//                                 />
//                             </div>
//                             <div className="rigtWrp">
//                                 <p>
//                                     <Link
//                                         to={
//                                             "https://www.linkedin.com/in/imran-farooqui-baa2b7208/"
//                                         }
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-secondary" />
//                                     </Link>
//                                     Over two decades in the banking and
//                                     financial sector across geographies. He
//                                     specialises in Investment Strategies, Asset
//                                     Allocation, Private Wealth management, and
//                                     ESG investments.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="abtWrap flex flex-col md:flex-row justify-center gap-2 abt-2 ">
//                             <div className="leftWrp">
//                                 <h6>
//                                     <strong>Shreemohan Chauhaan</strong>
//                                     <br />
//                                     Co-Founder & COO
//                                 </h6>
//                                 <img
//                                     src="/team/abt-2.png"
//                                     alt="Shreemohan Chauhaan"
//                                 />
//                             </div>
//                             <div className="rigtWrp">
//                                 <p>
//                                     <Link
//                                         to={
//                                             "https://www.linkedin.com/in/shremohan/"
//                                         }
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-secondary" />
//                                     </Link>
//                                     23 years of Global Banking Experience, MBA
//                                     in marketing , Alternative Investment from
//                                     Harvard Business School & Climate Finance
//                                     from CFA Institute . Has been actively
//                                     associated with India / GCC / Africa and
//                                     Southeast Asian financial markets.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="abtWrap flex flex-col md:flex-row justify-center gap-2 abt-4 ">
//                             <div className="leftWrp">
//                                 <h6>
//                                     <strong>Irfan Mulla</strong>
//                                     <br />
//                                     Head of Marketing
//                                 </h6>
//                                 <img src="/team/abt-4.png" alt="Irfan Mulla" />
//                             </div>
//                             <div className="rigtWrp">
//                                 <p>
//                                     Advertising and Marketing lead with focussed
//                                     digital eco system marketing experience
//                                     across AMEA regions. Statistics graduate
//                                     with over 25 years of industry experience.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="abtWrap flex flex-col md:flex-row justify-center gap-2 abt-5 ">
//                             <div className="leftWrp">
//                                 <h6>
//                                     <strong>Osama Sharif</strong>
//                                     <br />
//                                     Head of Technology
//                                 </h6>
//                                 <img src="/team/abt-5.png" alt="Osama Sharif" />
//                             </div>
//                             <div className="rigtWrp">
//                                 <p>
//                                     10+ Years experience in IT Digital
//                                     Transformation in Saudi Arabia, UAE & India.
//                                     Certified Project Management Professional
//                                     (PMP) and Oracle Certified Programmer (OCP)
//                                     to lead Product Implementation & development
//                                     projects for large organizations. Part of
//                                     the Vision 2030 (VRO Project) of KSA for
//                                     Digital Transformation
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="abtWrap flex flex-col md:flex-row justify-center gap-2 abt-6 ">
//                             <div className="leftWrp">
//                                 <h6>
//                                     <strong>Sonell Kanyal</strong>
//                                     <br />
//                                     Head of Investment Advisory
//                                 </h6>
//                                 <img
//                                     src="/team/abt-6.png"
//                                     alt="Sonell Kanyal"
//                                 />
//                             </div>
//                             <div className="rigtWrp">
//                                 <p>
//                                     <Link
//                                         to={
//                                             "https://www.linkedin.com/in/sonell-kanyal-frm-privatebanker-uae/"
//                                         }
//                                         target="_blank"
//                                     >
//                                         <LinkedinIcon className="my-2 text-secondary" />
//                                     </Link>
//                                     Certified Chartered Financial Analyst (CFA
//                                     Institute US) Financial Risk Manager (GARP
//                                     US), 17+ years’ experience in financial
//                                     markets, skilled in diverse asset
//                                     classNamees, Capital Markets, Financial
//                                     planning and Risk management.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="abtWrap flex flex-col md:flex-row justify-center gap-2 abt-5 ">
//                             <div className="leftWrp ">
//                                 <h6>
//                                     <strong>Sohail Shafiq</strong>
//                                     <br />
                                    
//                                 </h6>
//                                 <img src="/team/abt-7.jpeg" alt="Osama Sharif" />
//                             </div>
//                             <div className="rigtWrp">
//                                 <p>
//                                     Sohail has been associated with Islamic banking for over 20 years working with leading multinational and regional institutions including EY (Ernst & Young), Bank Sarasin and Standard Chartered Bank. He has successfully setup and managed Islamic banking across the region where he has been leading the Islamic product development, branch setup, operational management and business development.
//                                 </p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AboutPage;
