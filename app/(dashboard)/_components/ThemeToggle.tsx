// ThemeToggle.tsx
"use client";

import { LightbulbIcon, MoonIcon } from "lucide-react";
import { useTheme } from "./ThemeContext";
// import { Switch } from "@/components/ui/switch"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex gap-2 cursor-pointer">
      {/* <Switch onClick={toggleTheme} /> */}
      {
        theme === 'light'? <MoonIcon onClick={toggleTheme}  className="size-7"/> :<LightbulbIcon onClick={toggleTheme} className="size-7"/> 
      }
    </div>
  );
};

export default ThemeToggle;
