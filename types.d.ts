import React from "react";

export type ProjectType = {
  name: string;
  description: string;
  image: string;
  link: string;
  gitHub: string;
  icons: string[];
};

export type TestimonialType = {
  name: string;
  content: string;
  image: string;
  role: string;
};

export type ServicType = {
  icon: React.ReactNode;
  heading: string;
  description: string;
};
