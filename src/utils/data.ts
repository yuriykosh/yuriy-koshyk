export const projects = [
  {
    title: "Gliese1",
    tags: "Desktop Web, B2C SaaS",
    description: "Finance SaaS solution for all kinds of businesses.",
    year: 2024,
    src: "gliese1.jpg",
    url: "/projects/gliese1",
    color: "#BBACAF",
  },
  {
    title: "DF Druckluft-Fachhandel",
    tags: "Web, B2C & B2B E-commerce",
    description:
      "Multimillion-dollar e-commerce for complete compressed air solutions (a part of Atlas Copco Group)",
    year: 2024,
    src: "df.webp",
    url: "/projects",
    color: "#977F6D",
  },
  {
    title: "EventPOS",
    tags: "iOS & Android, B2C SaaS",
    description:
      "A cutting-edge mobile payment app crafted specifically for events.",
    year: 2023,
    src: "event-pos.png",
    url: "/projects/eventpos",
    color: "#C2491D",
  },
  {
    title: "Heimdal Data",
    tags: "Desktop & Mobile Web, B2B",
    description:
      "Software development agency specializes in creating products for the payment, fintech, gamedev and other fields.",
    year: 2023,
    src: "heimdal-data.jpg",
    url: "/projects",
    color: "#B62429",
  },
  {
    title: "DreamNet Telecom.",
    tags: "iOS, B2C SaaS",
    description:
      "Telecommunication company that provides internet and television for thousands users.",
    year: 2022,
    src: "dream-net.png",
    url: "/projects",
    color: "#88A28D",
  },
];

// aboutData
export const stack = [
  {
    category: "Principles",
    skills: [
      "Interaction Design",
      "Visual Design",
      "Design Systems",
      "Prototyping",
      "Material Design",
      "Human-Centered Design",
      "Heuristic evaluation",
      "Product Thinking",
      "Usability Testing  &  A/B Testing",
      "User Research",
    ],
    color: "#2C37CD",
  },
  {
    category: "Tools",
    skills: [
      "Figma",
      "Protopie",
      "Hotjar",
      "Adobe Creative Suite",
      "Blender",
      "Google Analytics",
      "PowerBI",
      "Webflow",
      "Framer",
    ],
    color: "#2CCD67",
  },
  {
    category: "Stack",
    skills: [
      "HTML5",
      "CSS3, SASS",
      "JavaScript",
      "TypeScript",
      "SQL",
      "React",
      "Next.js",
      "GSAP",
      "Famer Motion",
      "Tailwind",
    ],
    color: "#CA2CCD",
  },
  {
    category: "Awards",
    skills: ["Best Innovation and Creativity (Big Pitch Competition)"],
    color: "#CD9F2C",
  },
];

// libraryData
export type LibraryItem = {
  title: string;
  author: string;
  description: string;
  status: "Finished" | "Not Started" | "In Progress";
  sourceLink: string;
  tags: string[];
};

export const tagList = [
  "All",
  "Design",
  "Engineering",
  "Product",
  "Tools",
  "Books",
];

export const libraryData: LibraryItem[] = [
  {
    title: "Designing Interfaces",
    author: "Jenifer Tidwell",
    description: "A comprehensive guide to UI patterns and design principles.",
    status: "Finished",
    sourceLink: "https://example.com/designing-interfaces",
    tags: ["Design", "Books"],
  },
  {
    title: "The Lean Product Playbook",
    author: "Dan Olsen",
    description: "A practical guide to building products that customers love.",
    status: "In Progress",
    sourceLink: "https://example.com/lean-product-playbook",
    tags: ["Product", "Books"],
  },
  {
    title: "Atomic Design",
    author: "Brad Frost",
    description:
      "A methodology for creating design systems with reusable components.",
    status: "Not Started",
    sourceLink: "https://example.com/atomic-design",
    tags: ["Design", "Tools", "Books"],
  },
  {
    title: "Figma Handbook",
    author: "Figma",
    description: "Official guide to mastering Figma for UI/UX design.",
    status: "Finished",
    sourceLink: "https://example.com/figma-handbook",
    tags: ["Tools", "Design"],
  },
  {
    title: "Refactoring UI",
    author: "Adam Wathan & Steve Schoger",
    description: "A guide to making your UI look great with practical tips.",
    status: "In Progress",
    sourceLink: "https://example.com/refactoring-ui",
    tags: ["Design", "Books", "Tools"],
  },
  {
    title: "Inspired: How To Create Products Customers Love",
    author: "Marty Cagan",
    description:
      "A guide for product managers on building successful products.",
    status: "Finished",
    sourceLink: "https://example.com/inspired",
    tags: ["Product", "Books"],
  },
  {
    title: "Don’t Make Me Think",
    author: "Steve Krug",
    description: "A common-sense approach to web usability.",
    status: "Finished",
    sourceLink: "https://example.com/dont-make-me-think",
    tags: ["Design", "Books"],
  },
  {
    title:
      "Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days",
    author: "Jake Knapp",
    description:
      "A unique five-day process for solving tough problems and testing new ideas.",
    status: "Not Started",
    sourceLink: "https://example.com/sprint",
    tags: ["Product", "Books"],
  },
  {
    title: "Hooked: How to Build Habit-Forming Products",
    author: "Nir Eyal",
    description:
      "A guide on creating products that engage customers by building habit-forming features.",
    status: "In Progress",
    sourceLink: "https://example.com/hooked",
    tags: ["Product", "Books"],
  },
  {
    title: "Lean UX: Applying Lean Principles to Improve User Experience",
    author: "Jeff Gothelf & Josh Seiden",
    description:
      "A guide to integrating lean principles into the UX design process.",
    status: "Finished",
    sourceLink: "https://example.com/lean-ux",
    tags: ["Design", "Engineering", "Books"],
  },
  {
    title: "Measure What Matters",
    author: "John Doerr",
    description:
      "A handbook for using objectives and key results (OKRs) to set and achieve goals.",
    status: "Not Started",
    sourceLink: "https://example.com/measure-what-matters",
    tags: ["Product", "Books", "Tools"],
  },
];
