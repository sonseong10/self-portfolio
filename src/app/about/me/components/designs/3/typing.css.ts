import { themeColor } from "@/styles/tokens.css";
import { keyframes, style } from "@vanilla-extract/css";

const blink = keyframes({
  "50%": {
    opacity: 0,
  },
});

export const text = style({
  fontFamily: "monospace",
  fontSize: "48px",
  fontWeight: "bold",
  color: themeColor.text,
  whiteSpace: "pre",
});

export const cursor = style({
  position: "relative",
  top: -4,
  animation: `${blink} 1s step-start infinite`,
});
