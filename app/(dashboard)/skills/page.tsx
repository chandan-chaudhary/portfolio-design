"use Client";
import Image from "next/image";
import { skills, skillProps } from './skills';

export default function Skills() {
  return (
    <main className="flex flex-col gap-y-8 ">
      <div>
        <h1 className="font-bold text-3xl">Skills</h1>
        <p className="text-lg">Here are some of the frameworks, tools, services and tech stack I have experience with. I am constantly gaining new skills.</p>
      </div>
      <section className="grid grid-cols-4 gap-4 place-items-center ">
        {skills.map((skill: skillProps, idx: number) => (
          <div key={idx} className={`flex items-end gap-x-2`}>
            <Image src={skill.skillIcon} alt={skill.skill} width={10} height={20} className="w-6 h-fit " />
            <h4 className={``}>{skill.skill}</h4>
          </div>
        ))}
      </section>
    </main>
  );
}
