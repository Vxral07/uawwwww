



import { SparklesCore } from "../ui/sparkles";

const Partnership = () => {
    return (
        <section className="py-10 sm:py-16">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl  font-poppins">
                <div className="h-[10rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
                    <h2 className="text-3xl pb-5 font-poppins font-medium leading-tight tracking-wide text-cyan-400 hover:text-cyan-400 sm:text-4xl lg:text-5xl">
                        Partnership
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
                <div className="text-base sm:text-lg lg:text-xl">
                    <p className="mb-6 text-gray-300">
                        At NUQI Group, we firmly believe in the power of collaboration to drive meaningful change. Our partnerships reflect our commitment to creating lasting social impact by working with organizations and causes that align with our values of ethical growth and community development. With a strong focus on social responsibility and impactful initiatives, we aim to foster connections that uplift underserved communities and promote sustainability across various regions. These associations are not just collaborations; they are steps toward building a better tomorrow by making a tangible difference today.
                    </p>
                    <p className="mb-6 text-gray-300">
                        Our social and impact philosophy is rooted in the belief that shared efforts lead to exponential outcomes. Whether it's through advancing financial literacy, supporting education, or driving climate-conscious efforts, our partnerships are a testament to our dedication to creating value for society at large. By uniting with like-minded organizations, we hope to extend our reach and amplify our impact in regions like Africa, India, and the UAE, where the need for innovative and inclusive solutions is most urgent.
                    </p>
                </div>
                <div className="text-base sm:text-lg lg:text-xl">
                    <p className="mb-6 text-gray-300">
                        <strong className="font-bold text-white">Our Current Partnerships:</strong> <br /><br />
                        <strong className="font-bold text-white">Global Ethical Finance Initiative (GEFI)</strong><br /><br />
                        NUQI proudly partnered with GEFI to participate in events leading up to COP28 in the UAE and the Climate Summit in Edinburgh. Our association with GEFI emphasizes creating value in underserved areas across Africa, India, and the UAE. Together, we strive to promote ethical finance solutions that address pressing global challenges. Learn more about GEFI (Hyperlinked to [GEFI website](https://www.globalethicalfinance.org/)).
                    </p>
                    <p className="mb-6 text-gray-300">
                        Capitalised terms not defined in these Terms of Use shall have the same meaning attributed to them in the relevant Rules of the DIFC.
                    </p>
                    <p className="mb-6 text-gray-300">
                        <strong className="font-bold text-white">IFA Sport</strong><br /><br />
                        In collaboration with IFA Sport, a decade-old academy in the UAE, NUQI is making strides in shaping the future of over 1,000 families. By integrating financial literacy education into their youth programs, we aim to empower youngsters at a formative age, equipping them with the tools they need for a secure and informed financial future. Learn more about IFA Sport (Hyperlinked to [IFA website](https://ifasport.com/)).
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Partnership;

