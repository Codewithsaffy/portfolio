import React from "react";
import {  FaArrowRight } from "react-icons/fa6";
import { SocialIcons } from "../smallComp/FooterItons";
import Link from "next/link";

const ContactUs = () => {
  return (
    <section className="flex-col gap-10 md:gap-20 pb-2 justify-between  flex items-center px-4 pt-10 z-10 relative">
      
      <div className="z-10 md:w-[500px] w-full flex flex-col gap-4 justify-center items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-center -tracking-tighter">
          Ready to take <span className="text-[#CBACF9]">your</span> digital
          presence to the next level?
        </h2>
        <p className="text-gray-300 text-center text-sm">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals
        </p>
        <Link href={"/contact"} className="relative rounded-xl mt-6 bg-slate-900/[0.6] border border-slate-800 backdrop-blur-sm py-4 px-4 gap-2 text-white flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-slate-800/90 hover:border-slate-600 hover:scale-105">
          Contact Me Now
          <FaArrowRight className="ml-2 transition-transform duration-300 ease-in-out hover:translate-x-1 hover:-rotate-45" />
        </Link >
      </div>
      <div className="flex w-full z-10 mx-auto  justify-between items-center">
        <p className="text-sm text-gray-500 w-full">
          Copyright ©2024 Muhammad Yousuf
        </p>
        <SocialIcons />
      </div>
    </section>
  );
};

export default ContactUs;
