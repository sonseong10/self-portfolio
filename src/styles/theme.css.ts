import { createTheme } from "@vanilla-extract/css";
import { themeBreakPoint, themeColor } from "@/styles/tokens.css";

const lightColors = {
  background: "#fff",
  primary: "#3b82f6",
  text: "#1d1d1d",
  subText: "#6b7280",
  border: "#e5e7eb",
  buttonHover: "#eeeeee",
};

const darkColors = {
  background: "#000",
  primary: "#60a5fa",
  text: "#f4f6f8",
  subText: "#9ca3af",
  border: "#374151",
  buttonHover: "#222224",
};

export const baseTheme = createTheme(themeBreakPoint, {
  viewport: {
    mobile: "767px",
    tablet: "1023px",
    desktop: "1439px",
    wide: "1902px",
  },
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "24px",
  },
});

export const lightTheme = createTheme(themeColor, lightColors);
export const darkTheme = createTheme(themeColor, darkColors);
