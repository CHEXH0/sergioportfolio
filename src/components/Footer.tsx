
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          <ScrollLink
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mb-8 p-4 rounded-full bg-primary/10 hover:bg-primary/20 cursor-pointer transition-colors"
          >
            <ArrowUp className="h-6 w-6 text-primary" />
          </ScrollLink>
          
          <div className="text-center max-w-md mb-8">
            <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
            <p className="text-sm text-muted-foreground">
              Specializing in UI/UX Design & Audio Software Engineering
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Email
            </a>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
