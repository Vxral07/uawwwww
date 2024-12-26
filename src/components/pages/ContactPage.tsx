import React from "react";
import { OfficeLocation } from "../OfficeLocation";
import { ContactForm } from "../ContactForm";
import { officeLocations } from "@/data";
import { FormData } from "@/types";
import { SparklesCore } from "../ui/sparkles";

export const ContactsPage: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="flex flex-col bg-black min-h-screen pb-20">
      <div className="h-[10rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h2 className="text-3xl pb-5 font-poppins font-semibold leading-6 tracking-wide text-cyan-400 hover:text-cyan-400 sm:text-4xl lg:text-5xl">
          Contact Us
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
      {/* Header */}
      <h1 className="self-center mt-9 text-3xl font-poppins tracking-wide leading-loose text-white max-md:text-2xl">
        Your questions, Our expertise - Let's talk
      </h1>

      {/* Main Content */}
      <div className="mt-16 w-full px-5 max-w-[1732px]  mx-auto max-md:mt-10">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Global Offices */}
          <div className="flex flex-col ml-5 items-center lg:items-start">
            <div className="text-3xl font-poppins tracking-wide mb-6 lg:pl-6 max-md:text-2xl">
              <span className="text-white">Global</span>
              <span className="text-cyan-400"> Offices</span>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {officeLocations.map((office, index) => (
                <OfficeLocation key={index} {...office} />
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="flex justify-center w-full ">
            <div className="px-8 pt-10 pb-12 w-[100%] max-w-[600px] md:max-w-[450px] lg:max-w-[700px] bg-black border border-cyan-400 rounded-[30px] shadow-md max-md:px-6 max-md:pt-8 max-md:pb-10">
              <ContactForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};