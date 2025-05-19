import { useThemeStore } from "@/store/themeStore";
import { darkTheme, lightTheme } from "@/styles/theme.css";
import { useEffect } from "react";

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

export const useInitTheme = () => {
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    const cookieTheme = getCookie("theme");
    const storedTheme = localStorage.getItem("user-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const theme =
      cookieTheme === "dark" || cookieTheme === "light"
        ? cookieTheme
        : storedTheme === "dark" || storedTheme === "light"
        ? storedTheme
        : prefersDark
        ? "dark"
        : "light";

    setTheme(theme);
    document.documentElement.classList.add(
      theme === "dark" ? darkTheme : lightTheme
    );
  }, [setTheme]);
};
