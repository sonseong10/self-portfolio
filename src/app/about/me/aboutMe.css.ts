import { breakpoints } from "@/styles/cpnstructs/breakPoint";
import { themeColor } from "@/styles/tokens.css";
import { globalStyle, keyframes, style } from "@vanilla-extract/css";

export const subTitle = style({
  display: "block",
  marginBottom: "20px",
  fontSize: "20px",
  color: themeColor.text,
});

export const titleIcon = style({
  display: "inline-block",
  marginBottom: "12px",
  fontSize: "40px",
});

export const list = style({
  width: "552px",
  listStyle: "none",
  padding: 0,
  margin: "0 auto",

  "@media": {
    [breakpoints.mobile]: {
      width: "100vw",
      padding: "0 10px",
      boxSizing: "border-box",
    },
  },
});

globalStyle(`${list} > li > p`, {
  display: "block",
  opacity: "1",
  transition: "transform 0.4s ease, opacity 0.4s ease",
});

globalStyle(`${list} > li:not(.isActive) > p`, {
  width: "0%",
  display: "none",
  opacity: "0",
  pointerEvents: "none",
  position: "absolute",
});

globalStyle(`${list} > li:not(.isActive) > button`, {
  color: themeColor.text,
});

globalStyle(`${list} > li:nth-child(1).isActive`, {
  background: `linear-gradient(180deg, #fac6ac 0, transparent 100%)`,
});
globalStyle(`${list} > li:nth-child(2).isActive`, {
  background: "linear-gradient(180deg, #ffe596 0, transparent 100%)",
});
globalStyle(`${list} > li:nth-child(3).isActive`, {
  background: "linear-gradient(180deg, #c7fbc4 0, transparent 100%)",
});
globalStyle(`${list} > li:nth-child(4).isActive`, {
  background: "linear-gradient(180deg,#b7ecffff 0, transparent 100%)",
});

export const listItem = style({
  padding: "20px 28px",
  boxSizing: "border-box",
  backgroundColor: themeColor.card,
  borderRadius: "16px",
  textAlign: "left",
  fontSize: "16px",

  selectors: {
    "&.isActive": {
      color: "#000",
      height: "200px",
    },
    "&:not(:last-child)": {
      marginBottom: "10px",
    },
  },
});

export const dropDownBtn = style({
  padding: "0",
  width: "100%",
  border: "0",
  backgroundColor: "transparent",
  fontSize: "18px",
  textAlign: "left",
  fontWeight: "700",
  cursor: "pointer",
});

export const innserSection = style({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  maxWidth: "640px",
  margin: "0 auto",
});

export const innerBox = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  borderRadius: "24px",
  backgroundColor: themeColor.card,
});

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const earthBox = style({
  position: "relative",

  selectors: {
    "&::before": {
      position: "absolute",
      display: "block",
      top: "0px",
      right: "-128px",
      padding: "16px",
      borderRadius: "12px",
      background: themeColor.card,
      fontSize: "32px",
      color: themeColor.text,
      content: `${"W3C & i18n"}`,
      zIndex: 7,

      "@media": {
        [breakpoints.tablet]: {
          right: "0px",
        },
        [breakpoints.mobile]: {
          position: "static",
          order: 2,
          marginTop: "8px",
          fontSize: "20px",
        },
      },
    },

    "&::after": {
      position: "absolute",
      display: "block",
      left: "-120px",
      bottom: "10px",
      padding: "16px",
      borderRadius: "12px",
      background: themeColor.card,
      fontSize: "32px",
      color: themeColor.text,
      content: `${"Attr: aria-label & role"}`,
      zIndex: 10,

      "@media": {
        [breakpoints.tablet]: {
          left: "0px",
        },
        [breakpoints.mobile]: {
          position: "static",
          fontSize: "20px",
        },
      },
    },
  },

  "@media": {
    [breakpoints.mobile]: {
      display: "flex",
      flexDirection: "column",
    },
  },
});

export const earth = style({
  position: "relative",
  animation: `${spin} 12s infinite linear`,
  zIndex: 8,

  "@media": {
    [breakpoints.mobile]: {
      width: "280px",
      height: "280px",
    },
  },
});

export const graphicWrapper = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
});

export const graphicItem = style({
  width: "300px",
  height: "300px",

  "@media": {
    [breakpoints.mobile]: {
      width: "160px",
      height: "160px",
    },
  },
});