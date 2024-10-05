import React from "react";
import { ServicType } from "../../../types";
import Image from "next/image";

const ServiceCard = ({ service }: { service: ServicType }) => {
  return (
    <div className="flex gap-4 md:flex-row flex-col   shadow-[-5px_-5px_6px_0px_#161935] p-8 border border-[#2b203b]   items-center rounded-2xl bg-gradient-to-r from-[#04071D] to-[#0C0E23]">
      <Image
      className="w-20 h-20 "
        src={service.icon}
        alt={service.heading}
        width={100}
        height={100}
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-xl md:2xl text-center md:text-left font-bold">{service.heading}</h3>
        <p className="text-gray-300  text-center md:text-left text-sm md:text-base">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
