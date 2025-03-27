
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
    title: "Chexho VSTi Synth",
    description: "A DSP-based VSTi synthesizer for music producters, available on all DAWs and platforms.",
    image: "/Chexho.PNG",
    tags: [
      { name: "JUCE", color: "blue" },
      { name: "HISE", color: "purple" },
      { name: "Canva", color: "green" },
      { name: "UI/UX", color: "orange" },
    ],
    role: "Lead Developer & UI Designer",
    links: {
      demo: "https://drive.google.com/file/d/14D73K9wcTIuUnnHW5tjaviSRHyy0Od6I/view?usp=sharing",
      github: "#",
    },
    featured: true,
  },
  {
    title: "Audio Processor",
    description: "A web-based audio processor for music producers, with quick access to Equalizer and Compression along with real-time recording.",
    image: "Audio-Pros.PNG",
    tags: [
      { name: "Design System", color: "red" },
      { name: "Accessibility", color: "blue" },
      { name: "Lovable", color: "purple" },
      { name: "React", color: "green" },
    ],
    role: "UX Designer & Frontend Developer",
    links: {
      demo: "https://audio-processor.lovable.app/",
      github: "https://github.com/CHEXH0/audio-software-engineer",
    },
    featured: true,
  },
  {
    title: "English Courses - All About Me",
    description: "A web-based English Learning community where users can learn English through interactive lessons and exercises.",
    image: "allaboutme.PNG",
    tags: [
      { name: "Bilingual", color: "orange" },
      { name: "Machine Learning", color: "blue" },
      { name: "TypeScript", color: "yellow" },
      { name: "Industry Standard", color: "green" },
    ],
    role: "UI/UX Developer",
    links: {
      demo: "https://allaboutme.lovable.app/",
      github: "https://github.com/CHEXH0/tododemi",
    },
    featured: true,
  },
  {
    title: "NATIVO Holistico",
    description: "A Spanish e-commerce platform for a holistic wellness center, offering a wide range of products and services.",
    image: "NativoWeb.PNG",
    tags: [
      { name: "ECommerce", color: "purple" },
      { name: "Bilingual", color: "green" },
      { name: "React", color: "blue" },
      { name: "Memberships", color: "red" },
    ],
    role: "Full Stack Developer",
    links: {
      demo: "https://nativo.lovable.app/",
      github: "https://github.com/CHEXH0/nativo",
    },
  },
  {
    title: "HechoEnAmerica Studios",
    description: "My Audio Software Engineering studio website where I deal with hardware and online DSPs for recording, mixing, and mastering.",
    image: "HEA.PNG",
    tags: [
      { name: "Analog", color: "purple" },
      { name: "Sound-Design", color: "orange" },
      { name: "Recording", color: "blue" },
      { name: "Mastering", color: "green" },
    ],
    role: "Hardware & Software Developer",
    links: {
      demo: "https://hechoenamerica.lovable.app/",
      github: "https://github.com/CHEXH0/hechoenamerica",
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
