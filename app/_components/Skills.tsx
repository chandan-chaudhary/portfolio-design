"use Client";

import Image from "next/image";
import {skills, skillProps} from '@/app/_components/skills';

export default function Skills() {
  return (
    <main className="">
      <h3>My Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:">
        {skills.map((skill: skillProps, idx: number) => (
          <div key={idx}>
            <Image src={skill.skillIcon} alt={skill.skill} className="" />
            <h4>{skill.skill}</h4>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
