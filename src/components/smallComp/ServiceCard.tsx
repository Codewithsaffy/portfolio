"use client";
import React from "react";
import { ServicType } from "../../../types";
import Image from "next/image";
import { motion } from "framer-motion";

const ServiceCard = ({ service }: { service: ServicType }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // Animates once when 30% of the component is visible
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.25)" }}
      className="group flex gap-4 md:flex-row flex-col shadow-[-5px_-5px_6px_0px_#161935] p-8 border border-[#2b203b] items-center rounded-2xl bg-gradient-to-r from-[#04071D] to-[#0C0E23] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#1A1C31] hover:to-[#04071D] hover:shadow-xl"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="w-20 h-20 transform transition-transform duration-300 group-hover:scale-110"
      >
        <Image
          src={service.icon}
          alt={service.heading}
          width={100}
          height={100}
        />
      </motion.div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl md:text-2xl text-center md:text-left font-bold text-white">
          {service.heading}
        </h3>
        <p className="text-gray-300 text-center md:text-left text-sm md:text-base">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
