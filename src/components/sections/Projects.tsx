import projects from "@/data/projects";
import React from "react";
import ProjectCard from "../smallComp/ProjectCard";

const Projects = () => {
  return (
    <div className="min-h-screen z-10 w-full flex-col flex items-center gap-20 mx-auto px-4  md:px-8 lg:px-16 py-16 ">
      <h2 className="text-4xl font-bold z-10 text-center">
      Highlights from Our Latest <span className="text-[#c7abf0]">Projects</span>
      </h2>
      <div className="flex items-center justify-center gap-10 flex-wrap">
        {projects.map((project) => {
          return <ProjectCard key={project.name} data={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
