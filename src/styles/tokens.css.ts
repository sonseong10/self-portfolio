import { createThemeContract } from "@vanilla-extract/css";

export const themeColor = createThemeContract({
  background: null,
  primary: null,
  text: null,
  subText: null,
  border: null,
  card: null,
  buttonHover: null,
});

export const themeBreakPoint = createThemeContract({
  viewport: {
    mobile: null,
    tablet: null,
    desktop: null,
    wide: null,
  },
  spacing: {
    sm: null,
    md: null,
    lg: null,
  },
});
