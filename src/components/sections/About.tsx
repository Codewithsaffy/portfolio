import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { FaCopy } from "react-icons/fa6";

const About = () => {
  return (
    <section className="min-h-screen dark:bg-dark-Background w-full mx-auto px-4 md:px-8 lg:px-16 py-8 z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full mb-8 ">
        <div className="col-span-1 bg-gradient-to-r from-[#04071D] to-[#0C0E23] relative lg:col-span-7  w-full h-full md:h-80 lg:h-[475px] rounded-2xl -blur-sm border justify-center border-dark-accent/30 px-6 py-6 flex flex-col gap-6">
          <Image
            className="absolute bottom-0 h-[200px] w-[400px]  -right-8"
            alt="image"
            src={"/about-effects/aboutsec.png"}
            width={400}
            height={200}
          />
          <Image
            className="absolute top-[-77px] h-[400px] w-[400px]  left-[-94px] "
            alt="image"
            src={"/about-effects/gradient.png"}
            width={400}
            height={400}
          />

          <h2 className="md:text-4xl z-10 text-3xl font-bold">
            About <span className="text-[#CBACF9]">Us</span>
          </h2>
          <p className="lg:text-lg text-sm z-10 lg:leading-8 text-[#E4ECFF]  lg:tracking-wide">
            At Muhammad Yousuf, I specialize in building high-performance,
            scalable web applications using Next.js, tailored to meet your
            business goals. With a focus on modern design, seamless user
            experience, and robust functionality, I deliver solutions that stand
            out. My expertise includes responsive design, optimized performance,
            and integrating cutting-edge technologies to enhance your digital
            presence. Committed to innovation and excellence, I turn complex
            ideas into user-friendly, dynamic websites. Partner with me for web
            solutions that elevate your brand and drive growth.
          </p>
        </div>

        <div className="col-span-1 lg:col-span-5 flex flex-col gap-6 w-full">
          <div className="h-48 lg:h-[225px] rounded-2xl bg-gradient-to-r from-[#04071D] to-[#0C0E23] backdrop-blur-sm border border-dark-accent/30 p-6 relative">
            <h2 className="text-2xl font-bold text-gray-200">
              I am very flexible with time zone communications
            </h2>
            <Image
              className="absolute  w-full  bottom-0  z-10 "
              alt="image"
              src={"/about-effects/world.png"}
              width={300}
              objectFit="cover"
              height={100}
            />
          </div>
          <div className="h-48 lg:h-[225px] overflow-hidden rounded-2xl bg-gradient-to-r from-[#04071D] to-[#0C0E23] backdrop-blur-sm border flex items-center justify-around gap-4 px-6 border-dark-accent/30 relative">
            <div>
              <p className="text-[#cbaff9] text-[14px]">
                Continue trying to improve
              </p>
              <h2 className="text-3xl font-bold">My tech stack</h2>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="flex flex-col h-full gap-4 justify-center items-center">
                <Button text="Next js" />
                <Button text="React js" />
                <Button text="Typescript" />
              </div>
              <div className="flex flex-col h-full gap-4 justify-center items-center">
                <Button text="Tailwind" />
                <Button text="Mongo DB " />
                <Button text="Shadcn UI" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid for the second section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
        {/* Left Section */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-6 w-full">
          <div className="h-48 lg:h-[150px] rounded-2xl bg-gradient-to-r from-[#04071D] to-[#0C0E23] backdrop-blur-sm relative border overflow-hidden border-dark-accent/30 p-6 ">
            <h2 className="text-xl font-bold">
              Driven Next.js developer crafting impactful web solutions
            </h2>
            <Image
              className="absolute -bottom-20 h-[150px] w-[200px] -right-5"
              alt="image"
              src={"/about-effects/aboutsec.png"}
              width={200}
              height={150}
            />
          </div>
          {/* <div className="h-48 lg:h-[150px] rounded-2xl bg-gradient-to-r from-[#04071D] to-[#0C0E23] backdrop-blur-sm border border-dark-accent/30"> */}
          <BackgroundGradientAnimation className="flex flex-col gap-4 items-center h-full p-6 justify-center">
            <h2 className="text-xl font-bold text-center">
              Do you want to start a project together?
            </h2>
            <div className="flex items-center gap-4 py-2 px-4 bg-black/80 rounded-lg">
              <p className="text-[#CBACF9]">copy my email adress</p> <FaCopy />
            </div>
          </BackgroundGradientAnimation>
          {/* </div> */}
        </div>

        {/* Right Section */}
        <div className="col-span-1 flex justify-between lg:col-span-8 w-full h-72 md:h-80 lg:h-[325px] rounded-2xl bg-gradient-to-r from-[#04071D] to-[#0C0E23] backdrop-blur-sm relative border border-dark-accent/30">
          <div className="flex flex-col gap-2 justify-center h-full p-6 w-full lg:w-1/2">
            <p className="uppercase text-[#CBACF9] text-sm">The Inside Scoop</p>
            <h2 className="text-3xl font-bold">
              Currently Learning Generative AI
            </h2>
          </div>
          <Image
            className="absolute bottom-0 top-0 right-0"
            alt="code"
            src={"/about-effects/code.png"}
            width={500}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
