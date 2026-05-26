import React from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projectList = [
    { title: "To-Do App", description: "Task manager with React", link: "#" },
    { title: "Portfolio", description: "Personal showcase site", link: "#" },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      {projectList.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </section>
  );
}

export default Projects;
