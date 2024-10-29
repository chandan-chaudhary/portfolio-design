import { StaticImageData } from "next/image";
import webDevelopmentImg from '@/public/web development.png';
import blockChainDevelopmentImg from '@/public/blockchain.png';

export interface skillProps {
  skill: string;
  description: string;
  skillIcon: StaticImageData;
}

export const skills: skillProps[] = [
  {
    skill: "Web Development",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: webDevelopmentImg,
  },
  {
    skill: "Blockchain Development",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: blockChainDevelopmentImg,
  },
  {
    skill: "Blockchain Development",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: blockChainDevelopmentImg,
  },
  {
    skill: "Blockchain Development",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: blockChainDevelopmentImg,
  },
  {
    skill: "Blockchain Development",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: blockChainDevelopmentImg,
  },
  {
    skill: "Blockchain Development",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos explicabo consectetur sint totam et ipsam excepturi libero reprehenderit! Laboriosam,",
    skillIcon: blockChainDevelopmentImg,
  },
];
