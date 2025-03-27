
import React from "react";
import { cn } from "@/lib/utils";

interface SkillCategory {
  name: string;
  items: {
    name: string;
    level?: "beginner" | "intermediate" | "advanced" | "expert";
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    items: [
      { name: "JavaScript", level: "expert" },
      { name: "TypeScript", level: "advanced" },
      { name: "Python", level: "advanced" },
      { name: "GoLang", level: "intermediate" },
      { name: "HTML/CSS", level: "expert" },
    ],
  },
  {
    name: "UI/UX Tools",
    items: [
      { name: "Figma", level: "advanced" },
      { name: "Adobe XD", level: "intermediate" },
      { name: "Sketch", level: "intermediate" },
      { name: "Prototyping", level: "advanced" },
      { name: "User Research", level: "intermediate" },
    ],
  },
  {
    name: "Audio Engineering",
    items: [
      { name: "HISE", level: "advanced" },
      { name: "JUCE", level: "intermediate" },
      { name: "Max/MSP", level: "advanced" },
      { name: "Web Audio API", level: "expert" },
      { name: "DSP", level: "intermediate" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    items: [
      { name: "React", level: "expert" },
      { name: "Node.js", level: "advanced" },
      { name: "TailwindCSS", level: "advanced" },
      { name: "Three.js", level: "intermediate" },
      { name: "Tone.js", level: "advanced" },
    ],
  },
  {
    name: "Developer Tools",
    items: [
      { name: "Git", level: "advanced" },
      { name: "GitHub", level: "advanced" },
      { name: "VS Code", level: "expert" },
      { name: "Webpack", level: "intermediate" },
      { name: "Docker", level: "intermediate" },
    ],
  },
  {
    name: "Professional Skills",
    items: [
      { name: "Project Management", level: "advanced" },
      { name: "Trend-Savvy", level: "advanced" },
      { name: "Technical Writing", level: "intermediate" },
      { name: "Leadership", level: "intermediate" },
      { name: "Public Speaking", level: "intermediate" },
    ],
  },
];

const levelColors = {
  beginner: "bg-blue-100 dark:bg-blue-900/30",
  intermediate: "bg-blue-200 dark:bg-blue-800/40",
  advanced: "bg-blue-300 dark:bg-blue-700/50",
  expert: "bg-blue-400 dark:bg-blue-600/60",
};

const Skills = () => {
  return (
    <section id="skills" className="bg-gradient-to-b from-background to-secondary/20">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          A collection of programming languages, tools, and technologies that I use to bring ideas to life.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.name}
              className="glass rounded-xl p-6 shadow-sm card-hover animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-4">{category.name}</h3>
              <div className="space-y-3">
                {category.items.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      {skill.level && (
                        <span className="text-xs text-muted-foreground capitalize">
                          {skill.level}
                        </span>
                      )}
                    </div>
                    {skill.level && (
                      <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
                        <div
                          className={cn(
                            "h-full rounded-full",
                            levelColors[skill.level]
                          )}
                          style={{
                            width:
                              skill.level === "beginner"
                                ? "25%"
                                : skill.level === "intermediate"
                                ? "50%"
                                : skill.level === "advanced"
                                ? "75%"
                                : "100%",
                          }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
