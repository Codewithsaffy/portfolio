"use client";
import React from "react";
import { ServicType } from "../../../types";
import Image from "next/image";

const ServiceCard = ({ service }: { service: ServicType }) => {
  return (
    <div className="group flex gap-4 md:flex-row flex-col shadow-[-5px_-5px_6px_0px_#161935] p-8 border border-[#2b203b] items-center rounded-2xl bg-gradient-to-r from-[#04071D] to-[#0C0E23] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#1A1C31] hover:to-[#04071D] hover:shadow-xl transform hover:scale-105">
      <div className="w-20 h-20 transform transition-transform duration-300 group-hover:scale-110">
        <Image
          src={service.icon}
          alt={service.heading}
          width={100}
          height={100}
        />
      </div>

      <div className="flex flex-col gap-2 text-center md:text-left">
        <h3 className="text-xl md:text-2xl font-bold text-white">
          {service.heading}
        </h3>
        <p className="text-gray-300 text-sm md:text-base">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
