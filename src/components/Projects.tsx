
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const featuredProjects = projects.filter(project => project.featured);
  const displayedProjects = showAll ? projects : featuredProjects.slice(0, 3);

  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-title">Project Showcase</h2>
        <p className="section-subtitle">
          A selection of projects demonstrating my experience in audio software engineering.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
        
        {projects.length > 3 && (
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="mx-auto"
            >
              {showAll ? "Show Featured Projects" : "View All Projects"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
