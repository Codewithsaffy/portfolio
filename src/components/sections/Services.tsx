import React from "react";
import ServiceCard from "../smallComp/ServiceCard";
import services from "@/data/services";

const Services = () => {
  return (
    <div className="px-4 md:px-16 py-10 min-h-screen  m-10 justify-center z-10 flex flex-col bg-[#000000] items-center ">
      <h2 className="md:text-4xl text-4xl  z-10 text-center font-bold">
        My <span className="text-[#CBACF9]">Services</span>
      </h2>
      <div className="grid grid-cols-1 mt-20 lg:grid-cols-2 gap-10 w-full z-10 ">
        {services.map((ser, idx) => {
          return <ServiceCard key={idx} service={ser} />;
        })}
      </div>
    </div>
  );
};

export default Services;
