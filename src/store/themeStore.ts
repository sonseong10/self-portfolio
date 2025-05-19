import { create } from "zustand";

type Theme = "light" | "dark";
interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: "light",
  setTheme: (theme) => {
    set({ theme });
    localStorage.setItem("user-theme", theme);
    document.cookie = `theme=${theme}; path=/; max-age=31536000`;
  },
  toggleTheme: () => {
    const current = get().theme;
    const next = current === "light" ? "dark" : "light";
    set({ theme: next });
    localStorage.setItem("user-theme", next);
    document.cookie = `theme=${next}; path=/; max-age=31536000`;
  },
}));
