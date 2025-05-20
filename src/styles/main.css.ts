import { globalStyle, style } from "@vanilla-extract/css";
import { breakpoints } from "./cpnstructs/breakPoint";
import { themeColor } from "./tokens.css";

export const container = style({
  position: "relative",
  margin: "0 auto",

  "@media": {
    [breakpoints.wide]: {
      maxWidth: "1316px",
      justifyContent: "space-between",
    },
    [breakpoints.desktop]: {
      maxWidth: "952px",
    },
    [breakpoints.tablet]: {
      maxWidth: "712px",
    },
    [breakpoints.mobile]: {
      maxWidth: "412px",
      paddingLeft: "14px",
      paddingRight: "14px",
    },
  },
});

export const contentWrapper = style({
  "@media": {
    [breakpoints.wide]: {
      paddingTop: "91px",
      paddingBottom: "123px",
    },
    [breakpoints.desktop]: {
      paddingTop: "84px",
      paddingBottom: "80px",
    },
    [breakpoints.tablet]: {
      paddingTop: "72px",
    },
  },
});

export const areaBanner = style({
  display: "flex",
  justifyContent: "space-between",

  "@media": {
    [breakpoints.tablet]: {
      flexDirection: "column",
    },
  },
});

export const areaWidget = style({
  "@media": {
    [breakpoints.wide]: {
      width: "206px",
      height: "621px",
    },
    [breakpoints.desktop]: {
      width: "180px",
      height: "486px",
    },
    [breakpoints.tablet]: {
      display: "flex",
      width: "100%",
      height: "232px",
      marginTop: "20px",
    },
    [breakpoints.mobile]: {
      display: "flex",
      height: "auto",
      flexDirection: "column",
      width: "100%",
    },
  },
});

globalStyle(`${areaWidget} > div, ${areaWidget} > a `, {
  "@media": {
    [breakpoints.tablet]: {
      width: "calc((100% / 3) - 8px)",
    },
    [breakpoints.mobile]: {
      width: "100%",
    },
  },
});

export const areaContent = style({
  "@media": {
    [breakpoints.wide]: {
      marginTop: "120px",
    },
    [breakpoints.desktop]: {
      marginTop: "80px",
    },
    [breakpoints.mobile]: {
      marginTop: "80px",
    },
  },
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
  padding: "8px 12px",
  backgroundColor: themeColor.buttonHover,
  fontSize: "16px",
  color: themeColor.text,
  textDecoration: "none",
  margin: "0 0.8rem",
  boxSizing: "border-box",
  borderRadius: "20px",

  selectors: {
    "&.home": {
      marginTop: "40px",
      width: "150px",
      height: "52px",
      lineHeight: "38px",
      fontWeight: 700,
      fontSize: "18px",
      borderRadius: "26px",
      backgroundColor: themeColor.border,
    },

    "&:hover": {
      opacity: "0.6",
    },
  },
});