"use client";
import Image from "next/image";
import { skills, skillProps } from "./skills";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <main className="flex flex-col gap-y-8">
      <div>
        <h1 className="font-bold text-3xl">Skills</h1>
        <p className="text-lg">
          Here are some of the frameworks, tools, services and tech stack I have
          experience with. I am constantly gaining new skills.
        </p>
      </div>

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {skills.map((skill: skillProps, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.02 }}
          >
            <Card className="p-2 py-1 flex items-center gap-2 justify-start text-xs sm:text-sm w-full">
              <CardContent className="flex items-center gap-2 w-full">
                <Image
                  src={skill.skillIcon}
                  alt={skill.skill}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span className="font-medium text-xs sm:text-sm">
                  {skill.skill}
                </span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
