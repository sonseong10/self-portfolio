import { breakpoints } from "@/styles/cpnstructs/breakPoint";
import SVG from "@/styles/svgIcon";
import { themeColor } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  position: "fixed",
  top: 0,
  right: 0,
  left: 0,
  backgroundColor: themeColor.background,
  borderBottom: `1px solid ${themeColor.border}`,
  zIndex: 1000,
});

export const logo = style({
  display: "block",
  width: "36px",
  height: "36px",
  background: 'url("/portfolio-logo.svg") no-repeat center center',
  backgroundSize: "32px",
});

export const wrapper = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  margin: "0 auto",

  "@media": {
    [breakpoints.wide]: {
      maxWidth: "1316px",
      height: "91px",
      justifyContent: "space-between",
    },
    [breakpoints.desktop]: {
      maxWidth: "952px",
      height: "84px",
    },
    [breakpoints.tablet]: {
      maxWidth: "712px",
      height: "72px",
    },
    [breakpoints.mobile]: {
      maxWidth: "412px",
    },
  },
});

export const themeButton = style({
  display: "block",
  width: "36px",
  height: "36px",
  border: "0",
  borderRadius: "18px",
  cursor: "pointer",

  selectors: {
    "&.light": {
      background: `url(${SVG.LightMode()}) no-repeat center center`,
      backgroundSize: "22px",
    },

    "&.dark": {
      background: `url(${SVG.Darkmode()}) no-repeat center center`,
      backgroundSize: "18px",
    },

    "&:hover": {
      backgroundColor: themeColor.buttonHover,
    },
  },
});
