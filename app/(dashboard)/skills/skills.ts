import { StaticImageData } from "next/image";
// import webDevelopmentImg from '@/public/web development.png';
import typescript from "@/public/typescript.png";

import javascript from "@/public/js.png";

export interface skillProps {
  skill: string;
  description: string;
  skillIcon: StaticImageData;
  backgroundColor?: string;
  textColour?: string;
}

export const skills: skillProps[] = [
  {
    skill: "TypeScript",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: typescript,
    backgroundColor: "bg-blue-600",
    textColour: "text-white",
  },
  {
    skill: "JavaScript",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: javascript,
    backgroundColor: "bg-yellow-400",
    textColour: "text-black",
  },
  {
    skill: "React",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: typescript,
    backgroundColor: "bg-blue-600",
    textColour: "text-white",
  },
  {
    skill: "Node.js",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: javascript,
    backgroundColor: "bg-yellow-400",
    textColour: "text-black",
  },
  {
    skill: "MongoDB",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: typescript,
    backgroundColor: "bg-blue-600",
    textColour: "text-white",
  },
  {
    skill: "Express.js",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: javascript,
    backgroundColor: "bg-yellow-400",
    textColour: "text-black",
  },
  {
    skill: "RESTful API development",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: typescript,
    backgroundColor: "bg-blue-600",
    textColour: "text-white",
  },
  {
    skill: "State Management",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: javascript,
    backgroundColor: "bg-yellow-400",
    textColour: "text-black",
  },
  {
    skill: "Deployment Strategies",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: typescript,
    backgroundColor: "bg-blue-600",
    textColour: "text-white",
  },
];
