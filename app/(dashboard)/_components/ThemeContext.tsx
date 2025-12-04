"use client";

// Replaced the custom theme context with `next-themes`-backed provider.
// This uses the `class` attribute on <html> to toggle dark mode (Tailwind `darkMode: ['class']`).

import {
  ThemeProvider as NextThemeProvider,
  useTheme as useNextTheme,
} from "next-themes";
import { ReactNode } from "react";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Use a stable server default to avoid hydration mismatches. We pick 'light'
  // as the server-rendered theme. The client can still toggle to dark.
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
    >
      {children}
    </NextThemeProvider>
  );
};

// Adapter hook so existing components can continue to call `useTheme()`.
export const useTheme = () => {
  const { theme, setTheme, resolvedTheme } = useNextTheme();
  const current = resolvedTheme ?? theme ?? "light";

  return {
    theme: current as "light" | "dark" | string,
    setTheme,
    toggleTheme: () => setTheme(current === "dark" ? "light" : "dark"),
  };
};
