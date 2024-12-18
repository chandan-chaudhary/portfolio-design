"use Client";
import { motion } from 'framer-motion';
import Image from "next/image";
import { skills, skillProps } from './skills';

export default function Skills() {
  return (
    <main className="flex flex-col gap-y-8 items-center justify-center">
      {/* <h1 className="text-4xl font-normal font-landingPageFont">Skills</h1> */}
      <motion.div
        className="box"
        // Animate when this value changes:
        animate={{ scale: 2 }}
        // Fade in when the element enters the viewport:
        whileInView={{ opacity: 1 }}
        // Animate the component when its layout changes:
        layout
        // Style now supports indepedent transforms:
        style={{ x: 100 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 xl:gap-24 p-5 ">
          {skills.map((skill: skillProps, idx: number) => (
            <div key={idx} className="flex flex-col items-center justify-center ">
              <div className="border-4 border-blue-600 rounded-full w-fit p-5">
                <Image src={skill.skillIcon} alt={skill.skill} className="w-16" />
              </div>
              <h4 className="text-xl font-paragraphFont text-center">{skill.skill}</h4>
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
