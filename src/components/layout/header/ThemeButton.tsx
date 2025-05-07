"use client";

import { useEffect, useState } from "react";
import { themeButton } from "./header.css";
import { darkTheme, lightTheme } from "@/styles/theme.css";

function ThemeButton() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const theme = prefersDark ? darkTheme : lightTheme;

    // 기존 클래스 초기화
    document.body.classList.remove(darkTheme, lightTheme);
    document.body.classList.add(theme);

    setIsDark(prefersDark);
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? lightTheme : darkTheme;

    // 기존 클래스 제거
    document.body.classList.remove(darkTheme, lightTheme);
    document.body.classList.add(nextTheme);

    setIsDark(!isDark);
  };

  return (
    <button
      className={`${themeButton} ${isDark ? "light" : "dark"}`}
      onClick={toggleTheme}
    ></button>
  );
}

export default ThemeButton;
