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
});

export const mascotEyes = style({
  position: "absolute",
  width: "48px",
  height: "auto",
  left: "43px",
  zIndex: 10,
});

export const handLeft = style({
  position: "absolute",
  width: "48px",
  height: "auto",
  left: "18px",
  top: "38px",
  zIndex: 10,
  transform: "rotate(450deg)",
});
export const handRight = style({
  position: "absolute",
  width: "48px",
  height: "auto",
  right: "12px",
  top: "38px",
  zIndex: 10,
});
