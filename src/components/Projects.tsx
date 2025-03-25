
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Tag {
  name: string;
  color?: string;
}

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: Tag[];
  role: string;
  links: {
    demo?: string;
    github?: string;
    caseStudy?: string;
  };
  featured?: boolean;
}

const projects: ProjectProps[] = [
  {
    title: "Harmonic Visualizer",
    description: "An interactive web application that visualizes audio harmonics and frequencies in real-time, allowing users to explore sound through visual representation.",
    image: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
    tags: [
      { name: "React", color: "blue" },
      { name: "Web Audio API", color: "purple" },
      { name: "Canvas", color: "green" },
      { name: "UI/UX", color: "orange" },
    ],
    role: "Lead Developer & UI Designer",
    links: {
      demo: "#",
      github: "#",
      caseStudy: "#case-studies",
    },
    featured: true,
  },
  {
    title: "Adaptive Interface System",
    description: "A component library and design system created for audio software interfaces, focusing on accessibility and user experience for both novice and expert users.",
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
    tags: [
      { name: "Design System", color: "red" },
      { name: "Accessibility", color: "blue" },
      { name: "Figma", color: "purple" },
      { name: "React", color: "green" },
    ],
    role: "UX Designer & Frontend Developer",
    links: {
      demo: "#",
      github: "#",
      caseStudy: "#case-studies",
    },
    featured: true,
  },
  {
    title: "Sound Texture Generator",
    description: "A digital instrument that generates unique sound textures based on user input and machine learning algorithms, designed for music producers and sound designers.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    tags: [
      { name: "Web Audio", color: "orange" },
      { name: "Machine Learning", color: "blue" },
      { name: "JavaScript", color: "yellow" },
      { name: "DSP", color: "green" },
    ],
    role: "Audio Engineer & Developer",
    links: {
      demo: "#",
      github: "#",
    },
    featured: true,
  },
  {
    title: "Collaborative Sequencer",
    description: "A browser-based music sequencer that allows multiple users to collaborate in real-time, creating music together across different devices.",
    image: "https://images.unsplash.com/photo-1519419166318-4f5c601b8e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
    tags: [
      { name: "Socket.io", color: "purple" },
      { name: "Tone.js", color: "green" },
      { name: "React", color: "blue" },
      { name: "Redux", color: "red" },
    ],
    role: "Full Stack Developer",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Gesture-Based Audio Controller",
    description: "A system that translates hand gestures captured by a camera into audio control signals, allowing for natural and intuitive sound manipulation.",
    image: "https://images.unsplash.com/photo-1552850546-5fc028baf754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    tags: [
      { name: "Computer Vision", color: "purple" },
      { name: "TensorFlow", color: "orange" },
      { name: "WebRTC", color: "blue" },
      { name: "Max/MSP", color: "green" },
    ],
    role: "Hardware & Software Developer",
    links: {
      demo: "#",
      github: "#",
    },
  },
];

const tagColors = {
  blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  green: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  red: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  purple: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  orange: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  default: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.filter(project => project.featured);

  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-title">Project Showcase</h2>
        <p className="section-subtitle">
          A selection of projects demonstrating my experience in UI/UX design and audio software engineering.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden border bg-card card-hover animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <CardHeader className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <div className="mt-2 space-x-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag.name}
                      className={cn(
                        "pill text-xs",
                        tag.color ? tagColors[tag.color] : tagColors.default
                      )}
                    >
                      {tag.name}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="pill text-xs bg-secondary text-secondary-foreground">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Role:</strong> {project.role}
                </p>
                <p className="text-sm">{project.description}</p>
              </CardContent>
              
              <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
                {project.links.demo && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-8"
                    onClick={() => console.log("Demo clicked for", project.title)}
                  >
                    <ExternalLink className="h-3.5 w-3.5 mr-1" />
                    Demo
                  </Button>
                )}
                {project.links.github && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-8"
                    onClick={() => console.log("GitHub clicked for", project.title)}
                  >
                    <Github className="h-3.5 w-3.5 mr-1" />
                    Code
                  </Button>
                )}
                {project.links.caseStudy && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 ml-auto text-primary hover:text-primary"
                    onClick={() => console.log("Case study clicked for", project.title)}
                  >
                    Case Study
                    <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </Button>
                )}
              </CardFooter>
            </Card>
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
