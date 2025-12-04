import { StaticImageData } from "next/image";

import typescript from "@/public/typescript.png";
import javascript from "@/public/js.png";
import nextjs from "@/public/nextjs.png";
import prisma from "@/public/prisma.png";
import nestjs from "@/public/nestjs.png";
import mongodb from "@/public/MongoDBSquareLogo.png";
import postgreSql from "@/public/PostgreSQL.png";
import react from "@/public/react.webp";
import nodejs from "@/public/nodejs.png";
import c from "@/public/c.png";
import cPlus from "@/public/C++.png";
import solidity from "@/public/solidity.jpg";
import python from "@/public/python.png";


export interface skillProps {
  skill: string;
  skillIcon: StaticImageData;
}

export const skills: skillProps[] = [
  // Foundational languages (computer science fundamentals)
  { skill: "C", skillIcon: c },
  { skill: "C++", skillIcon: cPlus },
  { skill: "Python", skillIcon: python },

  // Core web development
  { skill: "JavaScript", skillIcon: javascript },
  { skill: "TypeScript", skillIcon: typescript },

  // Backend runtime and frameworks
  { skill: "Node.js", skillIcon: nodejs },
  { skill: "Nestjs", skillIcon: nestjs },

  // Frontend
  { skill: "React", skillIcon: react },
  { skill: "Nextjs", skillIcon: nextjs },

  // Databases & ORM
  { skill: "MongoDB", skillIcon: mongodb },
  { skill: "PostgreSQL", skillIcon: postgreSql },
  { skill: "Prisma ORM", skillIcon: prisma },

  // Web3
  { skill: "Solidity", skillIcon: solidity },
];
