// ThemeToggle.tsx
"use client";

import { LightbulbIcon, MoonIcon } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { Switch } from "@/components/ui/switch"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex gap-2">
      <Switch onClick={toggleTheme} />
      {
        theme === 'light'? <LightbulbIcon onClick={toggleTheme}/> : <MoonIcon onClick={toggleTheme} />
      }
    </div>
  );
};

export default ThemeToggle;
