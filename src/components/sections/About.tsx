"use client";
import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { FaCopy } from "react-icons/fa6";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delayChildren: 0.2, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="about"
      className="min-h-screen w-full mx-auto px-4 md:px-8 lg:px-16 py-12 z-10"
    >
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Left Section */}
        <motion.div
          className="col-span-1 bg-gradient-to-r from-[#0C0E23] to-[#1A1C31] relative lg:col-span-7 w-full h-full md:h-96 lg:h-[480px] rounded-2xl shadow-lg p-8 flex flex-col gap-6 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#1A1C31] hover:to-[#0C0E23]"
          variants={itemVariants}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white z-10">
            About <span className="text-[#CBACF9]">Us</span>
          </h2>
          <p className="md:text-lg z-10 text-gray-400 leading-relaxed text-[12px] lg:tracking-wide">
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
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="col-span-1 lg:col-span-5 flex flex-col gap-8"
          variants={itemVariants}
        >
          <motion.div
            className="h-56 lg:h-[225px] rounded-2xl bg-gradient-to-r from-[#0C0E23] to-[#1A1C31] shadow-lg p-8 flex flex-col justify-between relative transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#1A1C31] hover:to-[#0C0E23]"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold text-white">
              I am very flexible with time zone communications
            </h2>
            <Image
              className="absolute w-full bottom-0 z-0 opacity-60"
              alt="world"
              src={"/about-effects/world.png"}
              width={400}
              height={150}
            />
          </motion.div>

          <motion.div
            className="h-56 lg:h-[225px] rounded-2xl bg-gradient-to-r from-[#0C0E23] to-[#1A1C31] shadow-lg p-8 flex sm:flex-row flex-col justify-between z-10 items-center gap-6 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#1A1C31] hover:to-[#0C0E23]"
            variants={itemVariants}
          >
            <div className="w-full">
              <p className="text-[#CBACF9] text-sm">Always aiming to improve</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white ">
                My Tech Stack
              </h2>
            </div>
            <div className="flex justify-center flex-col sm:flex-row items-center gap-4">
              <div className="flex flex-row sm:flex-col gap-4">
                <Button text="Next.js" />
                <Button text="React.js" />
                <Button text="TypeScript" />
              </div>
              <div className="flex flex-row sm:flex-col gap-4">
                <Button text="Tailwind CSS" />
                <Button text="MongoDB" />
                <Button text="Shadcn UI" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Second Section */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-8">
          <motion.div
            className="h-48 lg:h-[150px] rounded-2xl bg-gradient-to-r from-[#0C0E23] to-[#1A1C31] shadow-lg p-8 relative transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#1A1C31] hover:to-[#0C0E23]"
            variants={itemVariants}
          >
            <h2 className="text-xl font-bold text-white">
              Driven Next.js Developer crafting impactful web solutions
            </h2>
            <Image
              className="absolute bottom-0 -right-5 opacity-80"
              alt="developer"
              src={"/about-effects/aboutsec.png"}
              width={200}
              height={150}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <BackgroundGradientAnimation className="flex flex-col items-center justify-center h-48 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105">
              <h2 className="text-xl font-bold text-center text-white">
                Want to start a project together?
              </h2>
              <div className="flex items-center gap-4 py-2 px-4 bg-black/80 rounded-lg mt-4 cursor-pointer hover:bg-black hover:text-[#CBACF9] transition-all duration-300">
                <p className="text-[#CBACF9]">Copy my email address</p>{" "}
                <FaCopy />
              </div>
            </BackgroundGradientAnimation>
          </motion.div>
        </div>

        <motion.div
          className="col-span-1 lg:col-span-8 flex flex-col justify-center overflow-hidden h-[200px] md:h-[334px] rounded-2xl bg-gradient-to-r from-[#0C0E23] to-[#1A1C31] shadow-lg relative transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#1A1C31] hover:to-[#0C0E23]"
          variants={itemVariants}
        >
          <div className="flex flex-col gap-1 p-8 w-full lg:w-1/2">
            <p className="text-[#CBACF9] text-sm">The Inside Scoop</p>
            <h2 className="text-2xl font-bold text-white">
              Currently Learning Generative AI
            </h2>
          </div>
          <Image
            className="absolute top-0 right-0  bottom-0 opacity-30 sm:opacity-70"
            alt="code"
            src={"/about-effects/code.png"}
            width={500}
            height={400}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
