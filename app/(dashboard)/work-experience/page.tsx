"use client";
import { experiences, ExperienceProps } from "./experience";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function WorkExperience() {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
      {experiences.map((exp: ExperienceProps, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.04 }}
          className="relative mb-6"
        >
          <div className="relative flex gap-4">
            <div className="relative flex flex-col items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-0.5 bg-yellow-500 flex-1" />
            </div>

            <Card className="flex-1">
              <CardContent className="pb-4">
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <p className="text-muted-foreground flex items-center gap-2">
                  {exp.company} {exp.countryFlag} {exp.location} • {exp.type}
                </p>
                <p className="text-muted-foreground">{exp.duration}</p>
                <ul className="mt-2 list-disc list-inside text-muted-foreground">
                  {exp.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
