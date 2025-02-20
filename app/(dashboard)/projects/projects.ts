import { StaticImageData } from "next/image";
import projectImg from "@/public/projectImg.png";

interface projectProps {
  title: string;
  description: string;
  projectImage: StaticImageData;
  techStack?: string[];
  hostedUrl?: string;
  githubUrl?: string;
}

export const projects: projectProps[] = [
  {
    title: "Verse Ai",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    projectImage: projectImg,
    techStack: ["Nextjs", "PostgreSQL", "OpenAI"],
    hostedUrl: "https://verseai.com",
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    projectImage: projectImg,
    techStack: ["Nextjs", "PostgreSQL", "OpenAI"],
    hostedUrl: "https://verseai.com",
  },
];
