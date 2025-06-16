
import React from "react";
import { ArrowDown } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[60vh] bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl opacity-50"></div>
      </div>
      <div className="section-container z-10">
        <div className="max-w-4xl mx-auto text-center animate-blur-in">
          <div className="pill mb-6">Sergio Alejandro Ramirez</div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Audio Software Engineering
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Crafting innovative software experiences at the intersection of visual design and audio technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              View Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Contact Me
            </ScrollLink>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="inline-flex items-center justify-center text-sm text-muted-foreground hover:text-foreground"
          >
            <span className="mr-2">Scroll Down</span>
            <ArrowDown size={16} />
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
