"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCode } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ProjectType } from "../../../types";
import { motion } from "framer-motion";

const ProjectCard = ({
  data,
  className,
}: {
  data: ProjectType;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Initial state
      whileInView={{ opacity: 1, y: 0 }} // Animate into view
      viewport={{ once: true }} // Only animate once when in view
      transition={{ duration: 0.5, ease: "easeInOut" }} // Control animation timing
      className={`w-full sm:w-[350px] p-4 rounded-lg border border-dark-accent/30 z-10 bg-gradient-to-r from-[#04071D] to-[#0C0E23] flex flex-col gap-4 ${className}`}
    >
      <motion.div
        initial={{ scale: 0.9 }} // Slightly smaller on load
        whileInView={{ scale: 1 }} // Scale up when in view
        transition={{ duration: 0.4 }} // Smooth transition
        className="bg-gradient-to-r h-[200px] rounded-lg overflow-hidden from-[#13162D] to-[#404793] relative"
      >
        <Image
          className="absolute rounded-lg translate-x-[12%] h-[180px] bottom-[-15px] rotate-[356deg]"
          src={data.image}
          alt={data.name}
          width={250}
          height={180}
        />
      </motion.div>
      
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-2xl font-bold">{data.name}</h2>
        <p className="text-sm text-gray-300">{data.description}</p>
        
        <div className="flex justify-between">
          <div className="flex justify-start items-center">
            {data.icons.map((icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }} // Stagger effect
                className="rounded-full bg-gray-800/30 w-8 h-8 flex justify-center items-center"
              >
                <Image src={icon} alt="icon" width={18} height={18} />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-end items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.1 }} // Hover effect
              whileTap={{ scale: 0.95 }} // Tap effect
              className="bg-green-500 p-2 rounded-full"
            >
              <Link href={data.gitHub} className="hover:cursor-pointer">
                <FaCode className="text-white" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }} // Hover effect
              whileTap={{ scale: 0.95 }} // Tap effect
              className="p-2 rounded-full flex justify-center items-center gap-1 text-blue-500"
            >
              <Link href={data.link} className="hover:cursor-pointer flex gap-1 justify-center items-center">
                <p>view</p>
                <IoIosArrowRoundForward className="-rotate-[25deg]" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
