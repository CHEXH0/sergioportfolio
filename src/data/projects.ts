export interface Tag {
  name: string;
  color?: string;
}

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: Tag[];
  role: string;
  links: {
    demo?: string;
    github?: string;
    caseStudy?: string;
  };
  featured?: boolean;
}

export const projects: ProjectProps[] = [
  {
    title: "Chexho VSTi Synth",
    description: "A DSP-based VSTi synthesizer for music producters, available on all DAWs and platforms.",
    image: "/Chexho.PNG",
    tags: [
      { name: "JUCE", color: "blue" },
      { name: "HISE", color: "purple" },
      { name: "Canva", color: "green" },
      { name: "UI/UX", color: "orange" },
    ],
    role: "Lead Developer & UI Designer",
    links: {
      demo: "https://drive.google.com/file/d/14D73K9wcTIuUnnHW5tjaviSRHyy0Od6I/view?usp=sharing",
    },
    featured: true,
  },
  {
    title: "Audio Processor",
    description: "A web-based audio processor for music producers, with quick access to Equalizer and Compression along with real-time recording.",
    image: "Audio-Pros.PNG",
    tags: [
      { name: "Design System", color: "red" },
      { name: "Accessibility", color: "blue" },
      { name: "Lovable", color: "purple" },
      { name: "React", color: "green" },
    ],
    role: "UX Designer & Frontend Developer",
    links: {
      demo: "https://audio-processor.lovable.app/",
      github: "https://github.com/CHEXH0/audio-software-engineer",
    },
    featured: true,
  },
  {
    title: "HechoEnAmerica Studios",
    description: "My Audio Software Engineering studio website where I deal with hardware and online DSPs for recording, mixing, and mastering.",
    image: "HEA.PNG",
    tags: [
      { name: "Analog", color: "purple" },
      { name: "Sound-Design", color: "orange" },
      { name: "Recording", color: "blue" },
      { name: "Mastering", color: "green" },
    ],
    role: "Hardware & Software Developer",
    links: {
      demo: "https://hechoenamericastudio.com/",
      github: "https://github.com/CHEXH0/hechoenamerica",
    },
    featured: true,
  },
  {
    title: "NATIVO Holistico",
    description: "A Spanish e-commerce platform for a holistic wellness center, offering a wide range of products and services.",
    image: "NativoWeb.PNG",
    tags: [
      { name: "ECommerce", color: "purple" },
      { name: "Bilingual", color: "green" },
      { name: "React", color: "blue" },
      { name: "Memberships", color: "red" },
    ],
    role: "Full Stack Developer",
    links: {
      demo: "https://nativo.lovable.app/",
      github: "https://github.com/CHEXH0/nativo",
    },
  },
  {
    title: "English Courses - All About Me",
    description: "A web-based English Learning community where users can learn English through interactive lessons and exercises.",
    image: "allaboutme.PNG",
    tags: [
      { name: "Bilingual", color: "orange" },
      { name: "Machine Learning", color: "blue" },
      { name: "TypeScript", color: "yellow" },
      { name: "Industry Standard", color: "green" },
    ],
    role: "UI/UX Developer",
    links: {
      demo: "https://allaboutme.lovable.app/",
      github: "https://github.com/CHEXH0/tododemi",
    },
  },
];
