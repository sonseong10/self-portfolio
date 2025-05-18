"use client";

import { useEffect, useState } from "react";
import { themeButton } from "./header.css";
import { darkTheme, lightTheme } from "@/styles/theme.css";

function ThemeButton() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const currentTheme = document.documentElement.classList.contains(darkTheme)
      ? "dark"
      : "light";
    setIsDark(currentTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? lightTheme : darkTheme;
    document.documentElement.classList.remove(darkTheme, lightTheme);
    document.documentElement.classList.add(nextTheme);
    localStorage.setItem("user-theme", isDark ? "light" : "dark");
    setIsDark(!isDark);
  };
  if (isDark === null) return null;

  return (
    <button
      className={`${themeButton} ${isDark ? "light" : "dark"}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    />
  );
}

export default ThemeButton;
