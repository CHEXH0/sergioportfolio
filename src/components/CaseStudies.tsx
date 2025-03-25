
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Process {
  title: string;
  description: string;
  image?: string;
}

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
  processes: Process[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "harmonic-visualizer",
    title: "Harmonic Visualizer",
    subtitle: "Audio Visualization Tool",
    overview: "The Harmonic Visualizer was conceived as a tool to help music students understand the relationship between sound and visual representation. It started as a personal project to explore the Web Audio API and evolved into a comprehensive learning tool.",
    challenge: "Creating an intuitive interface that could accurately represent complex audio data while remaining accessible to users without technical audio knowledge. Performance optimization was also crucial for maintaining smooth animations at high frame rates.",
    solution: "I developed a modular architecture that separated audio analysis from visual rendering, allowing for efficient updates and customization. The user interface was designed with progressive disclosure, presenting basic functionality upfront while allowing advanced users to access more complex features.",
    outcome: "The tool is now used in several music education programs and has received positive feedback for making audio concepts more tangible and understandable. The project has also been open-sourced, allowing for community contributions and improvements.",
    processes: [
      {
        title: "User Research",
        description: "Conducted interviews with music educators and students to understand their needs and pain points when teaching and learning audio concepts.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        title: "Prototyping",
        description: "Created multiple interactive prototypes to test different visualization approaches and user interface designs.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        title: "Development",
        description: "Implemented the core functionality using Web Audio API for sound analysis and Canvas API for visualization, with React for the UI components.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      },
      {
        title: "Testing & Refinement",
        description: "Conducted usability testing with different user groups and refined the interface based on feedback, focusing on performance optimization and accessibility.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
      },
    ],
  },
  {
    id: "adaptive-interface",
    title: "Adaptive Interface System",
    subtitle: "UI/UX Design System for Audio Software",
    overview: "The Adaptive Interface System was created to address inconsistencies in UI patterns across different audio software, aiming to create a cohesive, accessible design system that could adapt to different user skill levels.",
    challenge: "Audio software interfaces often prioritize functionality over usability, creating steep learning curves for new users while still needing to satisfy power users. Creating a system that could scale across different applications while maintaining consistency was complex.",
    solution: "I developed a component library with built-in adaptivity that could present simplified interfaces to beginners and more comprehensive controls to advanced users. The system includes intelligent defaults with progressive disclosure of complex features.",
    outcome: "The design system has been adopted by several small audio software companies, reducing their development time and improving user satisfaction scores. The project has been documented as a case study for adaptive interfaces in specialized software.",
    processes: [
      {
        title: "Interface Audit",
        description: "Analyzed existing audio software interfaces to identify common patterns, pain points, and opportunities for improvement.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        title: "User Persona Development",
        description: "Created detailed personas representing different user types, from beginners to professional audio engineers, to guide the adaptive design approach.",
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        title: "Component Design",
        description: "Designed a comprehensive library of UI components specifically optimized for audio software, with attention to precision, readability, and tactile feedback.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        title: "Documentation & Implementation",
        description: "Created extensive documentation for developers and implemented example applications showcasing the system's capabilities.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
    ],
  },
];

const CaseStudies = () => {
  const [activeStudy, setActiveStudy] = useState(caseStudies[0].id);

  return (
    <section id="case-studies" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Case Studies</h2>
        <p className="section-subtitle">
          In-depth examinations of selected projects, detailing the problems, processes, and solutions.
        </p>

        <Tabs
          defaultValue={caseStudies[0].id}
          value={activeStudy}
          onValueChange={setActiveStudy}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 mb-8">
            {caseStudies.map((study) => (
              <TabsTrigger
                key={study.id}
                value={study.id}
                className="text-sm md:text-base"
              >
                {study.title}
                <span className="ml-2 text-xs text-muted-foreground hidden md:inline">
                  {study.subtitle}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {caseStudies.map((study) => (
            <TabsContent
              key={study.id}
              value={study.id}
              className="animate-fade-in"
            >
              <div className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold">Overview</h3>
                      <p className="mt-2 text-muted-foreground">
                        {study.overview}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Challenge</h3>
                      <p className="mt-2 text-muted-foreground">
                        {study.challenge}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold">Solution</h3>
                      <p className="mt-2 text-muted-foreground">
                        {study.solution}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Outcome</h3>
                      <p className="mt-2 text-muted-foreground">
                        {study.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="text-2xl font-bold mb-6">Design Process</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {study.processes.map((process, index) => (
                      <Card
                        key={process.title}
                        className="overflow-hidden card-hover animate-slide-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {process.image && (
                          <div className="aspect-video w-full overflow-hidden">
                            <img
                              src={process.image}
                              alt={process.title}
                              className="w-full h-full object-cover transition-transform hover:scale-105"
                            />
                          </div>
                        )}
                        <CardContent className="p-4">
                          <h4 className="font-bold text-lg mb-2">
                            {process.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {process.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CaseStudies;
