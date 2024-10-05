import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import testimonials from "@/data/testinominal";

const Testinominal = () => {
  return (
    <div className="w-full flex md:mt-10 flex-col items-center">
      <h2 className="text-4xl text-center z-10 font-bold">
        Kind words from <span className="text-[#CBACF0]">satisfied clients</span>
      </h2>
      <InfiniteMovingCards
      className="mt-10 lg:mt-20"
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default Testinominal;
