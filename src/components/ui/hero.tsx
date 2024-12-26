import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 px-5 lg:px-28 py-10 lg:py-1">
      {/* Text + Carousel Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
        <h1 className="text-3xl font-medium text-white tracking-wide max-md:text-xl lg:text-4xl">
          Online platform to invest in:
        </h1>
        <Carousel
          className="p- mt-5"
          orientation="vertical"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="h-[4.5rem]">
            <CarouselItem className="text-2xl font-poppins font-medium leading-tight sm:text-3xl lg:text-4xl text-transparent text-cyan-500 bg-black">
              Stocks
            </CarouselItem>
            <CarouselItem className="text-2xl font-poppins font-medium leading-tight sm:text-3xl lg:text-4xl text-transparent text-cyan-500 bg-black">
              Derivatives
            </CarouselItem>
            <CarouselItem className="text-2xl font-poppins font-medium leading-tight sm:text-3xl lg:text-4xl text-transparent text-cyan-500 bg-black">
              Mutual Funds
            </CarouselItem>
            <CarouselItem className="text-2xl font-poppins font-medium leading-tight sm:text-3xl lg:text-4xl text-transparent text-cyan-500 bg-black">
              ETFs
            </CarouselItem>
            <CarouselItem className="text-2xl font-poppins font-medium leading-tight sm:text-3xl lg:text-4xl text-transparent text-cyan-500 bg-black">
              Bonds
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src="/home page new.png"
          alt="Investment platform illustration"
          className="max-w-[80%] lg:max-w-full max-h-[calc(100vh-7rem)] object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
