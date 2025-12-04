"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { useEffect, useState, KeyboardEvent } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default to light on the server to avoid hydration mismatch
  const isDark = mounted ? theme === "dark" : false;

  const handleKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleTheme();
    }
  };

  // Sizes: container w-14 (56px), knob w-7 (28px) -> travel x = 28
  const travel = 28;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={isDark}
      aria-label="Toggle theme"
      onClick={toggleTheme}
      onKeyDown={handleKey}
      className="inline-flex items-center"
    >
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isDark
            ? "rgba(15,23,42,0.6)"
            : "rgba(255,255,255,0.08)",
        }}
        transition={{ duration: 0.18 }}
        className="relative w-14 h-7 rounded-full p-0.5 cursor-pointer"
      >
        {/* static end icons */}
        <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none text-muted-foreground">
          <Sun className="w-4 h-4 text-yellow-400" />
          <Moon className="w-4 h-4 text-sky-400" />
        </div>

        {/* knob */}
        <motion.div
          className="absolute top-0 left-0 w-7 h-7 rounded-full shadow-md bg-background flex items-center justify-center"
          animate={{ x: isDark ? travel : 0 }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        >
          <motion.div
            key={isDark ? "moon" : "sun"}
            initial={{ rotate: isDark ? 0 : 0, opacity: 0 }}
            animate={{ rotate: isDark ? 360 : 0, opacity: 1 }}
            transition={{ duration: 0.45 }}
          >
            {isDark ? (
              <Moon className="w-4 h-4 text-sky-400" />
            ) : (
              <Sun className="w-4 h-4 text-yellow-400" />
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ThemeToggle;
