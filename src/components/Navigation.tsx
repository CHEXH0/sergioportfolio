
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Case Studies", to: "case-studies" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "py-1 backdrop-blur-md bg-white/90 dark:bg-black/90 shadow-sm" 
          : isMobile 
            ? "py-2 bg-white/90 dark:bg-black/90 backdrop-blur-md" 
            : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer font-display font-bold text-xl hover:text-primary"
            >
              Portfolio
            </ScrollLink>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer text-sm font-medium hover:text-primary"
                  activeClass="text-primary"
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-1 rounded-md hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="block h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={cn(
        "md:hidden transition-all duration-300 ease-in-out",
        isOpen 
          ? "max-h-screen opacity-100 pt-2" 
          : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
      )}>
        <div className="glass px-2 pt-2 pb-3 space-y-1 sm:px-3 mt-1 mx-4 rounded-lg shadow-lg">
          {menuItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800"
              activeClass="bg-gray-100 dark:bg-gray-800 text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
