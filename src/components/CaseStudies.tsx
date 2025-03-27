
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";

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

// Using only the first two case studies (removing the English Courses one)
const caseStudies: CaseStudy[] = [
  {
    id: "chexho-vsti",
    title: "Chexho VSTi Synth",
    subtitle: "DSP-based VSTi synthesizer",
    overview: "Developed a professional-grade VSTi synthesizer compatible with all DAWs and platforms. Focused on creating an intuitive interface while maintaining complex sound design capabilities.",
    challenge: "Creating a VST instrument that balances powerful sound design features with an intuitive user interface. Additionally, ensuring cross-platform compatibility across different DAWs posed significant technical challenges.",
    solution: "Implemented a clean, modern UI design using JUCE framework while working with HISE for the audio engine. Created a modular architecture that separates the audio processing from the interface, allowing for optimized performance.",
    outcome: "The synthesizer has been successfully deployed and is now available for music producers. It provides a streamlined workflow while maintaining professional sound quality and features expected in high-end synthesizers.",
    processes: [
      {
        title: "DSP Development",
        description: "Designed and implemented the digital signal processing modules for oscillators, filters, and modulators.",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        title: "UI/UX Design",
        description: "Created an intuitive interface design that allows quick access to sound design parameters without overwhelming users.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        title: "Cross-Platform Testing",
        description: "Conducted extensive testing across multiple DAWs and operating systems to ensure compatibility and performance.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      },
      {
        title: "Deployment",
        description: "Packaged and distributed the final product with comprehensive documentation and preset libraries.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
      },
    ],
  },
  {
    id: "audio-processor",
    title: "Audio Processor",
    subtitle: "Web-based Audio Processing Tool",
    overview: "Developed a comprehensive web-based audio processing tool that provides music producers with quick access to essential tools like EQ and compression, along with real-time recording capabilities.",
    challenge: "Building a responsive, low-latency audio processing application for the web while maintaining professional-grade sound quality. Additionally, creating an accessible interface that works across different devices was a significant challenge.",
    solution: "Leveraged the Web Audio API for processing and implemented a custom design system that ensures accessibility and responsive design. Created a modular architecture that allows features to be added without disrupting existing functionality.",
    outcome: "The Audio Processor is now being used by producers for quick editing and processing tasks, providing a seamless experience across devices without requiring local software installation.",
    processes: [
      {
        title: "Requirements Analysis",
        description: "Identified essential audio processing features through research and feedback from music producers.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        title: "Interface Prototyping",
        description: "Created interactive prototypes to test the usability of the processing controls and workflow.",
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        title: "Audio Engine Development",
        description: "Built a custom audio processing engine for the web that handles EQ, compression, and recording with minimal latency.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        title: "Responsive Implementation",
        description: "Implemented a fully responsive design that works seamlessly across desktop and mobile devices.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
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
