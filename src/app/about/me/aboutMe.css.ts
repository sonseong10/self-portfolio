import { breakpoints } from "@/styles/cpnstructs/breakPoint";
import { themeColor } from "@/styles/tokens.css";
import { globalStyle, style } from "@vanilla-extract/css";

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
  width: "46%",
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
  backgroundColor: "#fac6ac",
});
globalStyle(`${list} > li:nth-child(2).isActive`, {
  backgroundColor: "#ffe596",
});
globalStyle(`${list} > li:nth-child(3).isActive`, {
  backgroundColor: "#c7fbc4",
});
globalStyle(`${list} > li:nth-child(4).isActive`, {
  backgroundColor: "#b7ecff",
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
  margin: "10px",
  width: "300px",
  height: "300px",
  borderRadius: "24px",
  backgroundColor: themeColor.card,
});
