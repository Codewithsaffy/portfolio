
"use client"
import React, { useState } from 'react'
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import { FaCopy, FaCheck } from "react-icons/fa6";

const CopyEmail = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("codewithsaffy@gmail.com");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div>
            <BackgroundGradientAnimation className="flex flex-col items-center justify-center h-48 p-8 rounded-2xl shadow-lg transition-all duration-500 hover:scale-105">
              <h2 className="text-xl font-bold text-center text-white">
                Want to start a project together?
              </h2>
              <div
                className="flex items-center gap-4 py-2 px-4 bg-black/80 rounded-lg mt-4 cursor-pointer hover:bg-black hover:text-[#CBACF9] transition-all duration-300"
                onClick={copyEmail}
              >
                <p className="text-[#CBACF9]">Copy my email address</p>
                {isCopied ? <FaCheck className="text-green-500"  /> : <FaCopy  />}
              </div>
            </BackgroundGradientAnimation>
          </div>
  )
}

export default CopyEmail