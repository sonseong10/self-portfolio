import { breakpoints } from "@/styles/cpnstructs/breakPoint";
import { themeColor } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  marginTop: "12px",
  alignItems: "center",
});

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const input = style({
  marginBottom: "6px",
  padding: "8px 12px",
  border: "0",
  borderRadius: "4px",
  backgroundColor: themeColor.background,
  color: themeColor.text,

  "@media": {
    [breakpoints.mobile]: {
      padding: "4px 8px",
      width: "120px",
    },
  },
});

export const innerAnimal = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "130px",
  height: "130px",
  borderRadius: "65px",
  backgroundColor: "#cce08b",
  cursor: "grab",

  "@media": {
    [breakpoints.mobile]: {
      width: "80px",
      height: "80px",
    },
  },
});

export const mascotFace = style({
  "@media": {
    [breakpoints.mobile]: {
      width: "60px",
      height: "60px",
    },
  },
});

export const mascotEyes = style({
  position: "absolute",
  width: "48px",
  height: "auto",
  top: "62px",
  left: "43px",
  zIndex: 10,

  "@media": {
    [breakpoints.mobile]: {
      width: "28px",
      top: "38px",
      left: "28px",
    },
  },
});

export const handLeft = style({
  position: "absolute",
  width: "48px",
  height: "auto",
  left: "18px",
  top: "38px",
  zIndex: 10,
  transform: "rotate(450deg)",

  "@media": {
    [breakpoints.mobile]: {
      width: "28px",
      left: "16px",
      top: "28px",
    },
  },
});

export const handRight = style({
  position: "absolute",
  width: "48px",
  height: "auto",
  right: "12px",
  top: "38px",
  zIndex: 10,

  "@media": {
    [breakpoints.mobile]: {
      width: "28px",
      top: "28px",
    },
  },
});
