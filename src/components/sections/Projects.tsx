import projects from "@/data/projects";
import React from "react";
import ProjectCard from "../smallComp/ProjectCard";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const Projects = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  return (
    <div
      id="projects"
      className="min-h-screen z-10 w-full flex-col flex items-center mx-auto px-4 md:px-8 lg:px-16 py-16"
    >
      <h2 className="text-3xl sm:text-4xl mb-10 md:mb-20  font-bold z-10 text-center">
        Highlights from Our Latest{" "}
        <span className="text-[#c7abf0]">Projects</span>
      </h2>
      <div className="flex items-center justify-center gap-10 flex-wrap">
        {featuredProjects.map((project) => {
          return (
            <div key={project.name} className="relative group">
              <ProjectCard
                data={project}
                className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl z-10 hover:bg-gradient-to-r hover:from-[#1A1C31] hover:to-[#0C0E23]"
              />
            </div>
          );
        })}
      </div>
      <Link href={"/projects"} className="relative rounded-xl mt-8 bg-slate-900/[0.6] border border-slate-800 backdrop-blur-sm py-4 px-4 gap-2 text-white flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-slate-800/90 hover:border-slate-600 hover:scale-105">
          See All Projects
          <FaArrowRight className="ml-2 transition-transform duration-300 ease-in-out hover:translate-x-1 hover:-rotate-45" />
        </Link >
    </div>
  );
};

export default Projects;
