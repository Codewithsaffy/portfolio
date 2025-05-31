
export type ProjectType = {
  name: string;
  description: string;
  image: string;
  link: string;
  gitHub: string;
  featured:boolean;
  icons: string[];
  tags:string[]
};

export type TestimonialType = {
  name: string;
  content: string;
  image: string;
  role: string;
};

export type ServicType = {
  icon: string;
  heading: string;
  description: string;
};
