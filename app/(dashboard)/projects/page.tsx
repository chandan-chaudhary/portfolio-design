"use client";
import developerImg from "@/public/development.png";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { projects } from "./projects";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpand = (i: number) => {
    setExpanded((s) => ({ ...s, [i]: !s[i] }));
  };

  return (
    <main className="flex flex-col gap-y-8">
      <div>
        <h1 className="font-bold text-3xl">Projects</h1>
        <p className="text-lg">
          Here are some of the projects I have worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-stretch">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.04 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col cursor-pointer pb-2 hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-start flex-1">
                <div className="w-full overflow-hidden rounded-md relative aspect-[3/2]">
                  <Image
                    src={project.projectImage || developerImg}
                    alt={`${project.title} image`}
                    fill
                    className="object-cover"
                  />
                </div>

                <CardHeader className="font-bold text-xl text-center px-0 mt-3 w-full">
                  {project.title}
                </CardHeader>

                <div className="w-full mt-2">
                  <p
                    className="text-lg text-muted-foreground"
                    style={
                      expanded[idx]
                        ? { overflow: "visible" }
                        : {
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }
                    }
                  >
                    {project.description}
                  </p>

                  <button
                    onClick={() => toggleExpand(idx)}
                    className="mt-2 text-sm text-primary underline"
                    aria-expanded={!!expanded[idx]}
                  >
                    {expanded[idx] ? "View less" : "View more"}
                  </button>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-y-3 items-start pt-3">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 w-full">
                  {project.techStack?.map((tech, j) => (
                    <span
                      key={j}
                      className="text-sm bg-muted px-2 py-1 rounded-md text-center text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 w-full">
                  <Button className="w-full sm:w-auto" variant="outline">
                    <Globe />
                    Website
                  </Button>
                  <Button className="w-full sm:w-auto" variant="outline">
                    <GitHubLogoIcon />
                    Github
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
