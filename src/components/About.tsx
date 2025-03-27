
import React from "react";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import sampleResume from "@/assets/Resume-2025.pdf";

const About = () => {
  const handleDownloadResume = () => {
    // Create an anchor element and trigger download
    const link = document.createElement("a");
    link.href = sampleResume;
    link.download = "Sergio's-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          I'm passionate about creating elegant, user-centered software experiences that span both visual and auditory domains.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-4">Personal Statement</h3>
            <p className="text-lg">
              As a software engineer focused on UI/UX design and audio software engineering, I combine technical expertise with a deep appreciation for how users interact with technology. My background in both visual and auditory design gives me a unique perspective on creating intuitive, engaging experiences.
            </p>
            <p className="text-lg">
              I'm driven by the challenge of making complex systems accessible and enjoyable to use. Whether designing interfaces for audio applications or creating visualizations of sound, I'm passionate about the intersection of technology and human experience.
            </p>
            <p className="text-lg">
              My goal is to continue pushing the boundaries of what's possible in audio software and UI/UX design, creating tools that empower others to express their creativity and achieve their goals efficiently.
            </p>
            
            <div className="pt-4">
              <Button variant="outline" className="group" onClick={handleDownloadResume}>
                <FileDown className="mr-2 h-4 w-4 group-hover:text-primary" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="relative aspect-square animate-slide-in-right lg:w-[80%] lg:ml-auto">
            <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-2xl transform rotate-3 scale-95 opacity-20"></div>
            <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-2xl transform -rotate-2 scale-90 opacity-40"></div>
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 shadow-xl flex items-center justify-center">
              <Avatar className="w-4/5 h-4/5">
                <AvatarImage 
                  src="/Profile.jpg" 
                  alt="Profile photo" 
                  className="object-cover"
                />
                <AvatarFallback className="text-xl">
                  SR
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
