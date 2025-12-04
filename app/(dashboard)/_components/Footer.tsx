"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <motion.section
      className="flex flex-col items-center justify-center bg-background text-foreground text-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full mb-4">
        Contact
      </div>

      <h2 className="text-4xl font-bold mb-2">Get in Touch</h2>

      <p className="text-muted-foreground text-lg flex gap-x-1 items-center">
        Want to contact? Email me at
        <Link
          href="mailto:chandanchaudhary3949@gmail.com"
          className="ml-2 text-primary hover:underline flex gap-x-2 items-center"
          aria-label="Send email to chandanchaudhary@gmail.com"
        >
          <Mail className="w-5 h-5" />
        </Link>
      </p>
    </motion.section>
  );
}
