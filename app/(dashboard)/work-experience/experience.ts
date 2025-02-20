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
        position: "Senior Software Developer",
        company: "Altodel",
        location: "India",
        type: "Full-Time",
        duration: "Nov 2024 - Present",
        responsibilities: [
            "Developed and maintained web applications.",
            "Collaborated with cross-functional teams to define and design new features.",
            "Ensured the performance, quality, and responsiveness of applications.",
            "Identified and corrected bottlenecks and fix bugs.",
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
