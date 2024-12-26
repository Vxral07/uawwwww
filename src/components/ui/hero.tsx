// import { GooglePlay, AppStore } from "./pages/advisory";
// import { Highlight } from "./ui/hero-highlight";

const Hero = () => {
    return (
        <div className="container">
            {/* Header Section */}
            <div className="text-center my-10">
                <h1 className="text-3xl font-medium text-white  tracking-wide max-md:text-xl lg:text-xl">
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </h1>
            </div>

            {/* Image Section */}
            <div className="flex justify-center w-full">
                <img
                    src="/tmp_0cfbcb56-ed27-489f-acf2-c1625daeda57.png" 
                    alt="Investment platform illustration"
                    className="max-w-[80%] max-h-[calc(100vh-7rem)] object-contain rounded-lg"
                />
            </div>
        </div>
    );
};

export default Hero;
