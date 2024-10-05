"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { TbHome } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";

export default function Header() {
  const navItems = [
    {
      name: "About",
      link: "/about",
      icon: <FaRegUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/",
      icon: <TbHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Testimonial",
      link: "#Tes",
      icon: (
        <MdOutlineMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <MdOutlineMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
