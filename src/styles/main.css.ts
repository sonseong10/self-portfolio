import { style } from "@vanilla-extract/css";
import { breakpoints } from "./cpnstructs/breakPoint";
import { themeColor } from "./tokens.css";

export const container = style({
  position: "relative",
  marginInline: "auto",
  width: "100%",
  boxSizing: "border-box",

  "@media": {
    [breakpoints.wide]: {
      maxWidth: "min(90%, 1316px)",
    },
    [breakpoints.desktop]: {
      maxWidth: "min(92%, 952px)",
    },
    [breakpoints.tablet]: {
      maxWidth: "min(95%, 712px)",
    },
    [breakpoints.mobile]: {
      maxWidth: "min(100%, 412px)",
      paddingInline: "1rem",
    },
  },
});

export const contentWrapper = style({
  paddingBlock: "clamp(4rem, 8vw, 7rem)",
});

export const areaBanner = style({
  display: "flex",
  alignItems: "flex-start",
  gap: "clamp(1.5rem, 3vw, 2.5rem)",

  "@media": {
    [breakpoints.tablet]: {
      flexDirection: "column",
    },
  },
});

export const areaWidget = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  "@media": {
    [breakpoints.wide]: {
      width: "200px",
      height: "100%",
    },
    [breakpoints.desktop]: {
      width: "180px",
    },
    [breakpoints.tablet]: {
      width: "100%",
      marginTop: "1.25rem",
    },
    [breakpoints.mobile]: {
      gridTemplateColumns: "1fr",
      width: "100%",
      gap: "0.75rem",
    },
  },
});

export const areaContent = style({
  marginTop: "clamp(4rem, 8vw, 7.5rem)",
});

export const notFoundContainer = style({
  display: "grid",
  placeItems: "center",
  height: "100vh",
  textAlign: "center",
  color: themeColor.text,
});

export const linkBadge = style({
  display: "inline-block",
  padding: "0.5rem 0.75rem",
  backgroundColor: themeColor.buttonHover,
  fontSize: "1rem",
  color: themeColor.text,
  textDecoration: "none",
  margin: "0 0.8rem",
  boxSizing: "border-box",
  borderRadius: "20px",
  transition: "opacity 0.2s ease",

  selectors: {
    "&.home": {
      marginTop: "2.5rem",
      padding: 0,
      width: "150px",
      height: "52px",
      lineHeight: "52px",
      fontWeight: 700,
      fontSize: "1.125rem",
      borderRadius: "26px",
      backgroundColor: themeColor.border,
      textAlign: "center",
    },

    "&:hover": {
      opacity: "0.7",
    },
  },
});
