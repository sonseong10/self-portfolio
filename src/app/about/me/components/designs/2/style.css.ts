import { themeColor } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const button = style({
  padding: "8px 12px",
  border: `1px solid ${themeColor.background}`,
  borderRadius: "4px",
  background: themeColor.background,
  color: themeColor.text,
  cursor: "pointer",
});
