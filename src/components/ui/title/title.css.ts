import { breakpoints } from "@/styles/cpnstructs/breakPoint";
import { themeColor } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const title = style({
  margin: 0,
  color: themeColor.text,
  fontWeight: 400,

  "@media": {
    [`${breakpoints.wide}`]: {
      fontSize: "48px",
      lineHeight: "72px",
    },
    [`${breakpoints.tablet}`]: {
      fontSize: "32px",
      lineHeight: "48px",
    },
    [`${breakpoints.mobile}`]: {
      fontSize: "26px",
      lineHeight: "36px",
    },
  },
});
