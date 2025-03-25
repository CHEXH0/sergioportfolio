
import React from "react";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  type: "work" | "education" | "certification";
  tags?: string[];
}

const experienceItems: ExperienceItem[] = [
  {
    title: "Senior UI/UX Developer",
    company: "AudioTech Solutions",
    period: "2020 - Present",
    description: "Lead the design and development of user interfaces for professional audio software, focusing on usability and accessibility while maintaining high technical standards.",
    type: "work",
    tags: ["Interface Design", "React", "Audio Software", "Team Leadership"],
  },
  {
    title: "Audio Software Engineer",
    company: "SoundWave Systems",
    period: "2018 - 2020",
    description: "Developed digital signal processing algorithms and user interfaces for audio plugins, collaborating with sound designers and musicians to create intuitive tools.",
    type: "work",
    tags: ["DSP", "C++", "Web Audio", "Plugin Development"],
  },
  {
    title: "Frontend Developer",
    company: "Interactive Media Labs",
    period: "2016 - 2018",
    description: "Created interactive web applications with a focus on audio and visual experiences, implementing responsive designs and optimizing performance.",
    type: "work",
    tags: ["JavaScript", "HTML/CSS", "WebGL", "Responsive Design"],
  },
  {
    title: "Master of Science in Computer Science",
    company: "University of Technology",
    period: "2014 - 2016",
    description: "Specialized in human-computer interaction and audio processing, with a thesis on "Adaptive Interfaces for Audio Production Software".",
    type: "education",
    tags: ["HCI", "Audio Processing", "Research", "User Testing"],
  },
  {
    title: "Bachelor of Arts in Music Technology",
    company: "Creative Arts University",
    period: "2010 - 2014",
    description: "Combined studies in music production, sound design, and programming, with a focus on creating digital tools for musicians.",
    type: "education",
    tags: ["Music Production", "Programming", "Sound Design"],
  },
  {
    title: "Certified UX Professional",
    company: "UX Design Institute",
    period: "2019",
    description: "Professional certification in user experience design principles and methodologies, with a focus on research, prototyping, and testing.",
    type: "certification",
    tags: ["UX Research", "Prototyping", "Usability Testing"],
  },
  {
    title: "Advanced Audio Programming",
    company: "Audio Developers Conference",
    period: "2018",
    description: "Intensive workshop on developing efficient and creative audio software using modern C++ and Web Audio techniques.",
    type: "certification",
    tags: ["C++", "Web Audio", "Performance Optimization"],
  },
];

const typeColors = {
  work: "border-blue-200 dark:border-blue-800",
  education: "border-green-200 dark:border-green-800",
  certification: "border-purple-200 dark:border-purple-800",
};

const typeBadges = {
  work: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  education: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  certification: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
};

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          My journey in software engineering, UI/UX design, and audio technology.
        </p>
        
        <div className="space-y-12">
          <div className="flex justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-400 dark:bg-blue-600"></div>
              <span className="text-sm">Work</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-600"></div>
              <span className="text-sm">Education</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-purple-400 dark:bg-purple-600"></div>
              <span className="text-sm">Certification</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 -ml-px h-full w-0.5 bg-muted"></div>
            
            <div className="space-y-16">
              {experienceItems.map((item, index) => (
                <div 
                  key={`${item.title}-${item.company}`}
                  className={cn(
                    "relative animate-slide-up",
                    index % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10",
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className={cn(
                      "md:w-1/2 flex flex-col",
                      index % 2 === 0 ? "md:text-right md:items-end md:pr-6" : "md:text-left md:items-start md:order-last md:pl-6"
                    )}>
                      <div className={cn(
                        "glass p-6 rounded-lg border-l-4",
                        typeColors[item.type]
                      )}>
                        <div className="mb-2 flex flex-col md:flex-row items-start md:items-center gap-2">
                          <span className={cn("pill", typeBadges[item.type])}>
                            {item.type === "work" ? "Work" : item.type === "education" ? "Education" : "Certification"}
                          </span>
                          <span className="text-sm text-muted-foreground">{item.period}</span>
                        </div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-primary font-medium">{item.company}</p>
                        <p className="mt-2 text-muted-foreground">{item.description}</p>
                        
                        {item.tags && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span key={tag} className="pill bg-secondary text-secondary-foreground text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-5 left-1/2 -ml-3.5 h-7 w-7 rounded-full bg-white dark:bg-gray-800 border-4 border-primary flex items-center justify-center"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
