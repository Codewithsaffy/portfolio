"use client"
import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Button } from "../ui/moving-border";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import * as motion from "motion/react-client";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-[100vh] w-full inter relative  shadow-[inset_2px_2px_20px_20px_#000319]  bg-grid-white/[0.08] rounded-md pt-20 pb-10 md:pt-0 flex flex-col  justify-center items-center gap-10 antialiased  overflow-hidden"
      >
      <Spotlight
        fill="#CBACF9"
        className="-top-40 left-0 md:left-32 md:top-0"
      />
      <Spotlight fill="blue" className="-top-40 left-0 md:left-0 md:top-0" />
      <Spotlight
        fill="blue"
        className="-top-40 left-0 md:left-[100%] md:top-0"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
      </motion.div>

      <motion.div
        className="flex justify-end flex-col px-4 pt-0 lg:pt-20 text-center lg:w-[80%] items-center gap-4 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        <TextGenerateEffect
          className="text-[33px] sm:text-[41px] lg:text-5xl font-bold"
          words="  Full-Stack Next.js & AI Developer for Businesses Worldwide"
        />

        <motion.p
          className="md:text-xl max-w-3xl  text-gray-300]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
        >
          Partnering with clients around the globe to build high-performance, AI-powered web applications.
        </motion.p>
      </motion.div>

      <Link href={"#projects"}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        >
          <Button>
            See my work
            <span>
              <FaArrowRight className="-rotate-12 ml-2" />
            </span>
          </Button>
        </motion.div>
      </Link>
    </section>
  );
};

export default Hero;
