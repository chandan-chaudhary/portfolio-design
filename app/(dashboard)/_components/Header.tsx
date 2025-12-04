"use client";

import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="w-full flex justify-end items-center">
      <div className="p-2">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-white/6 dark:bg-black/25 backdrop-blur rounded-full"
        >
          {/* Only render the enhanced ThemeToggle to avoid duplicate/icons clutter */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </motion.div>
      </div>
    </header>
  );
}
