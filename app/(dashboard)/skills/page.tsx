"use Client";
import Image from "next/image";
import { skills, skillProps } from './skills';

export default function Skills() {
  return (
    <main className="flex flex-col gap-y-8">
      <h1 className="text-start text-3xl font-semibold pl-60 underline decoration-wavy decoration-white">Skills</h1>
      <section className="flex flex-col gap-y-5 items-center justify-center pb-24">
        <div className="grid grid-cols-4 place-items-center gap-x-4 ">
          {skills.slice(0, 4).map((skill: skillProps, idx: number) => (
            <div key={idx} className={`flex items-end justify-center gap-x-1 rounded-sm px-0.5 ${skill.backgroundColor}`}>
              <Image src={skill.skillIcon} alt={skill.skill} width={30} height={20} className="w-fit h-fit " />
              <h4 className={`text-xl font-paragraphFont text-center ${skill.textColour}`}>{skill.skill}</h4>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 place-items-center gap-x-4">
          {skills.slice(4, 7).map((skill: skillProps, idx: number) => (
            <div key={idx} className={`flex items-end justify-center gap-x-1 rounded-sm px-0.5 ${skill.backgroundColor}`}>
              <Image src={skill.skillIcon} alt={skill.skill} width={30} height={20} className="w-fit h-fit " />
              <h4 className={`text-xl font-paragraphFont text-center ${skill.textColour}`}>{skill.skill}</h4>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 place-items-center gap-x-2">
          {skills.slice(7).map((skill: skillProps, idx: number) => (
            <div key={idx} className={`flex items-end justify-center gap-x-1 rounded-sm px-0.5 ${skill.backgroundColor}`}>
              <Image src={skill.skillIcon} alt={skill.skill} width={30} height={20} className="w-fit h-fit " />
              <h4 className={`text-xl font-paragraphFont text-center ${skill.textColour}`}>{skill.skill}</h4>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
