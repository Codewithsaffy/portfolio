import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Button } from "../ui/moving-border";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="h-[100vh] w-full inter rounded-md pt-24 md:pt-0 flex flex-col justify-center items-center gap-10  antialiased relative overflow-hidden">
    
      <Spotlight fill="#CBACF9" className="-top-40 left-0 md:left-32 md:top-0" />
      <Spotlight fill="blue" className="-top-40 left-0 md:left-0 md:top-0" />
      <Spotlight fill="blue" className="-top-40 left-0 md:left-[100%] md:top-0" />
      
      <div className="flex justify-end flex-col px-6 lg:pt-20 text-center lg:w-[80%] items-center gap-4">
        <h1 className="text-[#E4ECFF] text-[12px] md:text-[16px]  font-normal text-base">
          DYNAME WEB MAGIC WITH NEXT.JS
        </h1>
        <TextGenerateEffect
          className="text-[36px] sm:text-[41px]  lg:text-5xl  font-bold"
          words={
            "Transforming Ideas into Exceptional, Seamless  User Experiences"
          }
        />
        <p className="md:text-xl text-[#E4ECFF]">
          Hi! I’m Yousuf, a Next.js Developer based in Pakistan.
        </p>
      </div>
      <Button>
        See my work{" "}
        <span>
          <FaArrowRight className=" -rotate-12 ml-2" />
        </span>
      </Button>
    </div>
  );
};

export default Hero;
