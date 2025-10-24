import { breakpoints } from "@/styles/cpnstructs/breakPoint";
import SVG from "@/styles/svgIcon";
import { themeColor } from "@/styles/tokens.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const list = style({
  display: "flex",
  margin: 0,
  padding: 0,
  flexWrap: "wrap",
  listStyle: "none",

  "@media": {
    [breakpoints.wide]: {
      marginTop: "43px",
    },
    [breakpoints.desktop]: {
      marginTop: "24px",
    },
  },
});

export const listItem = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "12px 0 0 0",
  padding: "32px 36px",
  borderRadius: "24px",
  height: "110px",
  backgroundColor: themeColor.card,
  fontWeight: "500",
  color: themeColor.text,
  flex: "1 1 40%",
  boxSizing: "border-box",

  selectors: {
    "&:nth-child(even)": {
      marginLeft: "12px",
    },
  },

  "@media": {
    [breakpoints.wide]: {
      fontSize: "30px",
    },
    [breakpoints.desktop]: {
      fontSize: "18px",
    },
    [breakpoints.tablet]: {
      fontSize: "18px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "16px 16px",
      height: "auto",
      fontSize: "16px",
    },
  },
});

export const icon = style({
  display: "block",
  backgroundColor: "#fff",
  padding: "6px",
  boxSizing: "border-box",
  borderRadius: "12px",

  "@media": {
    [breakpoints.mobile]: {
      marginTop: "8px",
    },
  },
});

globalStyle(`${icon} > img`, {
  borderRadius: "12px",
  display: "block",
});

export const btnGroup = style({
  textAlign: "center",
  "@media": {
    [breakpoints.wide]: {
      marginTop: "40px",
    },
    [breakpoints.desktop]: {
      marginTop: "24px",
    },
  },
});

globalStyle(`${btnGroup} > a`, {
  display: "inline-block",
  color: themeColor.text,
  backgroundColor: themeColor.card,
  textAlign: "center",
  textDecoration: "none",

  "@media": {
    [breakpoints.wide]: {
      width: "316px",
      height: "76px",
      lineHeight: "76px",
      borderRadius: "38px",
      fontSize: "22px",
      letterSpacing: "-.6px",
    },
    [breakpoints.tablet]: {
      width: "280px",
      height: "60px",
      lineHeight: "60px",
      borderRadius: "30px",
      fontSize: "15px",
      letterSpacing: "-.2px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "48px",
      lineHeight: "48px",
      borderRadius: "24px",
    },
  },
});

globalStyle(`${btnGroup} > a::after`, {
  position: "relative",
  top: "4px",
  display: "inline-block",
  width: "24px",
  height: "24px",
  mask: `url(${SVG.CrossArrow()}) no-repeat center center`,
  backgroundColor: themeColor.text,
  color: themeColor.text,
  content: "",

  "@media": {
    [breakpoints.desktop]: {
      width: "24px",
      height: "24px",
    },
    [breakpoints.tablet]: {
      backgroundSize: "16px",
      top: "6px",
    },
    [breakpoints.mobile]: {
      display: "none",
    },
  },
});
