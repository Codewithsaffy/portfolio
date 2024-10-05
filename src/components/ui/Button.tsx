import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button className="w-24 h-[50px] rounded-lg shadow-sm shadow-slate-500 bg-[#2b203b] text-white flex justify-center items-center">
      {text}
    </button>
  );
};

export default Button;
