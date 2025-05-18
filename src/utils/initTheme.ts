import { useThemeStore } from "@/store/themeStore";
import { darkTheme, lightTheme } from "@/styles/theme.css";
import { useEffect } from "react";

export const useInitTheme = () => {
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    const stored = localStorage.getItem("user-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const theme =
      stored === "dark" || stored === "light"
        ? stored
        : prefersDark
        ? "dark"
        : "light";

    setTheme(theme);
    document.documentElement.classList.add(
      theme === "dark" ? darkTheme : lightTheme
    );
  }, [setTheme]);
};
