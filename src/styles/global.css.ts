import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";
import { themeColor } from "./tokens.css";

globalStyle("html body", {
  margin: 0,
  padding: 0,
  fontSize: "62.5%",
});

globalStyle("*.screen_out", {
  position: "absolute",
  top: 0,
  left: 0,
  width: 1,
  height: 1,
  fontSize: 1,
  opacity: 0,
  zIndex: -999,
});

globalStyle("body", {
  backgroundColor: themeColor.background,
});

export const vars = createGlobalTheme(":root", {
  fontFamily: {},

  viewport: {
    viewport1440: "1440px",
    viewport768: "768px",
    viewport320: "320px",
    vwPercent: "100vw",
  },
  fontSize: {
    xLarge: "48px",
    large: "24px",
    medium: "18px",
    regular: "16px",
    small: "14px",
    micro: "12px",
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    bold: "700",
  },
});
