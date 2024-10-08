import React from "react";
import ServiceCard from "../smallComp/ServiceCard";
import services from "@/data/services";

const Services = () => {
  return (
    <section
      id="services"
      className="z-10 w-full min-h-screen flex-col flex  items-center gap-10 md:gap-20 mx-auto px-4  md:px-8 lg:px-16 py-16 bg-[#000000]  "
    >
      <h2 className="text-3xl sm:text-4xl font-bold z-10 text-center">
        My <span className="text-[#CBACF9]">Services</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full z-10 ">
        {services.map((ser, idx) => {
          return <ServiceCard key={idx} service={ser} />;
        })}
      </div>
    </section>
  );
};

export default Services;
