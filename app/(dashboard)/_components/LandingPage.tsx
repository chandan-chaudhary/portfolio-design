"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GitHubLogoIcon,
//   InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
// import { User2Icon } from "lucide-react";
import Image from "next/image";
import profilePic from "@/public/pp.jpg";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      <div className="w-full min-h-[40vh] flex items-center justify-center py-6 px-6 rounded-lg">
        <div className="max-w-6xl w-full">
          <div className="flex flex-col md:flex-row gap-x-8 gap-y-8 items-center justify-center md:pt-0">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="flex items-center justify-center rounded-full h-40 w-40 sm:h-56 sm:w-56 md:h-60 md:w-60 p-2">
                <CardContent className="flex items-center justify-center w-full h-full p-0">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={profilePic}
                      alt="Chandan Chaudhary"
                      fill
                      sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 240px"
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <div className="flex flex-col gap-y-6 max-w-3xl">
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.05, duration: 0.5 }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
                  Hi, I&apos;m{" "}
                  <span className="text-primary font-landingPageFont">
                    Chandan Chaudhary
                  </span>
                </h1>
                <p className="mt-2 text-base text-muted-foreground">
                  I am a Software Developer focused on
                  building reliable, maintainable web applications. I am
                  particularly interested in Mern Stack, Web3 and data analytics and enjoy
                  working on practical problems that bring measurable results.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row sm:items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                <div className="flex flex-row flex-wrap gap-2">
                  <a href="#" aria-label="Resume" className="inline-block">
                    <Button variant="custom">Resume</Button>
                  </a>
                  <a href="#contact" aria-label="Hire" className="inline-block">
                    <Button variant="custom">Hire</Button>
                  </a>
                </div>

                <div className="mt-2 sm:mt-0 sm:ml-4 flex items-center gap-3 text-muted-foreground">
                  <a
                    href="https://github.com/chandan-chaudhary"
                    aria-label="github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubLogoIcon className="w-7 h-7" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/chandan-chaudhary-73308224b"
                    aria-label="linkedin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInLogoIcon className="w-7 h-7" />
                  </a>
                  {/* <a
                    href="https://instagram.com"
                    aria-label="instagram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramLogoIcon className="w-6 h-6" />
                  </a> */}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
