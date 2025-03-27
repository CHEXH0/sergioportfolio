
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProjectProps, Tag } from "@/data/projects";
import { getTagColorClass } from "@/utils/tagColors";

interface ProjectCardProps {
  project: ProjectProps;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <Card 
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
          {project.tags.slice(0, 3).map((tag: Tag) => (
            <span
              key={tag.name}
              className={cn(
                "pill text-xs",
                getTagColorClass(tag.color)
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
            onClick={() => window.open(project.links.demo, '_blank', 'noopener,noreferrer')}
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
            onClick={() => window.open(project.links.github, '_blank', 'noopener,noreferrer')}
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
            onClick={() => window.open(project.links.caseStudy, '_blank', 'noopener,noreferrer')}
          >
            Case Study
            <ArrowRight className="h-3.5 w-3.5 ml-1" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
