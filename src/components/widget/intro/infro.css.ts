import { breakpoints } from "@/styles/cpnstructs/breakPoint";
import { themeColor } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const widgetBox = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  borderRadius: "24px",
  width: "100%",
  backgroundColor: themeColor.primary,
  color: "#FFF",
  textAlign: "center",
  boxSizing: "border-box",
  textDecoration: "none",

  "@media": {
    [breakpoints.wide]: {
      height: "178px",
      fontSize: "18px",
    },
    [breakpoints.desktop]: {
      height: "86px",
      fontSize: "16px",
    },
    [breakpoints.tablet]: {
      minHeight: "232px",
      fontSize: "18px",
    },
    [breakpoints.mobile]: {
      minHeight: "160px",
      fontSize: "18px",
    },
  },
});
