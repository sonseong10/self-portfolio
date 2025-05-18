"use client";

import { useEffect } from "react";
import { themeButton } from "./header.css";
import { darkTheme, lightTheme } from "@/styles/theme.css";
import { useThemeStore } from "@/store/themeStore";
import { useInitTheme } from "@/utils/initTheme";

function ThemeButton() {
  useInitTheme();

  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  useEffect(() => {
    document.documentElement.classList.remove(darkTheme, lightTheme);
    document.documentElement.classList.add(
      theme === "dark" ? darkTheme : lightTheme
    );
  }, [theme]);

  return (
    <button
      className={`${themeButton} ${theme === "dark" ? "light" : "dark"}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    />
  );
}

export default ThemeButton;
