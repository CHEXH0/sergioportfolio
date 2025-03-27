
export interface Process {
  title: string;
  description: string;
  image?: string;
}

export interface CaseStudy {
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
export const caseStudies: CaseStudy[] = [
  {
    id: "chexho-vsti",
    title: "Chexho VSTi Synth",
    subtitle: "DSP-based VSTi synthesizer",
    overview: "Developed a professional-grade VSTi synthesizer compatible with all DAWs and platforms. Focused on creating an intuitive interface while maintaining complex sound design capabilities.",
    challenge: "Creating a VST instrument that balances powerful sound design features with an intuitive user interface. Additionally, ensuring cross-platform compatibility across different DAWs posed significant technical challenges.",
    solution: "Implemented a clean, modern UI design using Figma while working with JUCE for the audio engine. Using HISE's modular architecture that allows for audio processing and UI design, allowing for optimized performance.",
    outcome: "The synthesizer has been successfully deployed and is now available for music producers. It provides a streamlined workflow while maintaining professional sound quality and features expected in high-end synthesizers.",
    processes: [
      {
        title: "DSP Development",
        description: "Designed and implemented the digital signal processing modules for oscillators, filters, and modulators.",
        image: "/vst-1.png",
      },
      {
        title: "UI/UX Design",
        description: "Created an intuitive interface design that allows quick access to sound design parameters without overwhelming users.",
        image: "vst-2.png",
      },
      {
        title: "Cross-Platform Testing",
        description: "Conducted extensive testing across multiple DAWs and operating systems to ensure compatibility and performance.",
        image: "vst-3.png",
      },
      {
        title: "Deployment",
        description: "Packaged and distributed the final product with comprehensive documentation and preset libraries.",
        image: "vst-4.png",
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
        image: "audio-1.png",
      },
      {
        title: "Interface Prototyping",
        description: "Created interactive prototypes to test the usability of the processing controls and workflow.",
        image: "audio-2.png",
      },
      {
        title: "Audio Engine Development",
        description: "Built a custom audio processing engine for the web that handles EQ, compression, and recording with minimal latency.",
        image: "audio-3.png",
      },
      {
        title: "Responsive Implementation",
        description: "Implemented a fully responsive design that works seamlessly across desktop and mobile devices.",
        image: "audio-4.png",
      },
    ],
  },
];
