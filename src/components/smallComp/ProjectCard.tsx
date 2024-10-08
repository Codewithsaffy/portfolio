"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCode } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ProjectType } from "../../../types";

const ProjectCard = ({
  data,
  className,
}: {
  data: ProjectType;
  className?: string;
}) => {
  return (
    <div
      className={`w-full sm:w-[350px] p-4 rounded-lg border border-dark-accent/30 z-10 bg-gradient-to-r from-[#04071D] to-[#0C0E23] flex flex-col gap-4 ${className} transition-all duration-300 ease-in-out transform hover:scale-105`}
    >
      <div className="bg-gradient-to-r h-[200px] rounded-lg overflow-hidden from-[#13162D] to-[#404793] relative">
        <Image
          className="absolute rounded-lg translate-x-[12%] h-[180px] bottom-[-15px] rotate-[356deg]"
          src={data.image}
          alt={data.name}
          width={250}
          height={180}
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <h2 className="text-2xl font-bold">{data.name}</h2>
        <p className="text-sm text-gray-300">{data.description}</p>

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            {data.icons.map((icon, i) => (
              <div
                key={i}
                className="rounded-full bg-gray-800/30 w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <Image src={icon} alt="icon" width={18} height={18} />
              </div>
            ))}
          </div>

          <div className="flex justify-end items-center gap-2">
            <div className="bg-green-500 p-2 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">
              <Link href={data.gitHub} className="hover:cursor-pointer">
                <FaCode className="text-white" />
              </Link>
            </div>

            <div className="p-2 rounded-full flex justify-center items-center gap-1 text-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-110">
              <Link
                href={data.link}
                className="hover:cursor-pointer flex gap-1 justify-center items-center"
              >
                <p>view</p>
                <IoIosArrowRoundForward className="-rotate-[25deg]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
