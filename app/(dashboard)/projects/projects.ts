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
    title: "UptimeGuard — Decentralized Website Monitoring Platform",
    description:
      "Decentralized uptime monitoring with distributed validators and Ethereum smart contracts for validator auth and payouts. Real-time Next.js dashboard with Node.js/WebSockets backend, Prisma/Postgres data layer, and PDF billing via jsPDF.",
    projectImage: projectImg,
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Clerk",
      "WebSockets",
      "Prisma",
      "PostgreSQL",
      "jsPDF",
      "Solidity",
    ],
    hostedUrl: "https://uptimeguard.example.com",
    githubUrl: "https://github.com/chandan-chaudhary/uptime-dpin",
  },
  {
    title: "Lottery dApp — Decentralized Lottery with Chainlink VRF",
    description:
      "Decentralized lottery with Chainlink VRF for provable randomness. Wallet-enabled Next.js frontend (Ethers.js) with Solidity contracts and Hardhat for testing and deployment.",
    projectImage: projectImg,
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Solidity",
      "Chainlink VRF",
      "Hardhat",
      "Prisma", 
    ],
    hostedUrl: "https://lottery-murex-delta.vercel.app/",
    githubUrl: "https://github.com/chandan-chaudhary/lottery",
  },
  {
    title: "BricsHR — Multilingual Job Seeking Platform",
    description:
      "Multilingual subscription job platform with AI resume analysis (OpenAI) and DeepL-powered translations. Scalable Next.js frontend and NestJS backend with Prisma/Postgres for data and subscriptions.",
    projectImage: projectImg,
    techStack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "OpenAI",
      "DeepL API",
      "Tailwind CSS",
    ],
    hostedUrl: "https://bricshr.com",
    githubUrl: "https://github.com/chandan-chaudhary/bricsHR",
  },
  {
    title: "Bestinsingapore — Premium Marketplace",
    description:
      "Global e-commerce marketplace for Singapore brands with seller onboarding, product management dashboard, secure payments and multi-currency support. Built with Next.js, Stripe, Prisma/Postgres and CDN optimizations for global scale.",
    projectImage: projectImg,
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe ",
      "Prisma",
      "PostgreSQL",
    ],
    hostedUrl: "https://bestinsingapore.vercel.app/",
    githubUrl: "https://github.com/chandan-chaudhary/bestinsingapore",
  },
];
