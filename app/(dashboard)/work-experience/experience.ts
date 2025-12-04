export interface ExperienceProps {
  position: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  responsibilities: string[];
  countryFlag: string;
}

export const experiences: ExperienceProps[] = [
  {
    position: "Software Developer (Freelance)",
    company: "BricsHR Group",
    location: "Remote / India",
    type: "Freelance",
    duration: "Jul 2024 - Oct 2024",
    responsibilities: [
      "Designed and shipped full‑stack web apps with cross‑functional teams.",
      "Built a scalable job platform with advanced search and application tracking.",
      "Implemented e‑commerce workflows with payment integration and secure order handling.",
      "Delivered responsive UI components and optimized backend APIs for performance.",
    ],
    countryFlag: "🇮🇳",
  },
  {
    position: "Software Developer",
    company: "Werkbiz",
    location: "India",
    type: "Full-Time",
    duration: "Jul 2024 - Oct 2024",
    responsibilities: [
      "Developed and maintained web applications.",
      "Collaborated with cross-functional teams to define and design new features.",
      "Ensured the performance, quality, and responsiveness of applications.",
      "Identified and corrected bottlenecks and fix bugs.",
    ],
    countryFlag: "🇮🇳",
  },
];
