import { StaticImageData } from "next/image";
// import webDevelopmentImg from '@/public/web development.png';
import typescript from "@/public/typescript.png";
import javascript from "@/public/js.png";
import nextjs from "@/public/nextjs.png";
import prisma from "@/public/prisma.png";
import nestjs from "@/public/nestjs.png";
import mongodb from "@/public/MongoDBSquareLogo.png";
import postgreSql from "@/public/PostgreSQL.png";
import react from "@/public/react.webp";
import nodejs from "@/public/nodejs.png";

export interface skillProps {
  skill: string;
  description: string;
  skillIcon: StaticImageData;
  backgroundColor?: string;
  textColour?: string;
}

export const skills: skillProps[] = [
  {
    skill: "JavaScript",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: javascript,
    backgroundColor: "bg-[#ffdf00]",
    textColour: "text-black",
  },
  {
    skill: "Node.js",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: nodejs,
    backgroundColor: "bg-[#78b743]",
    textColour: "text-black",
  },
  {
    skill: "React",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: react,
    backgroundColor: "bg-[#001827]",
    textColour: "text-white",
  },
  {
    skill: "TypeScript",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: typescript,
    backgroundColor: "bg-[#3178c6]",
    textColour: "text-white",
  },
  {
    skill: "MongoDB",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: mongodb,
    backgroundColor: "bg-[#001827]",
    textColour: "text-white",
  },
  {
    skill: "Prisma ORM",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: prisma,
    backgroundColor: "bg-[#0c344b]",
    textColour: "text-white",
  },
  {
    skill: "PostgreSQL",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: postgreSql,
    backgroundColor: "bg-[#336791]",
    textColour: "text-white",
  },
  {
    skill: "Nextjs",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: nextjs,
    backgroundColor: "bg-black",
    textColour: "text-white",
  },
  {
    skill: "Nestjs",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: nestjs,
    backgroundColor: "bg-[#e0234e]",
    textColour: "text-white",
  },
];
