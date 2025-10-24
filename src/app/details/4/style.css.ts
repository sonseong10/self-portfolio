import { themeColor } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const threeDContainer = style({
  width: "100%",
  height: "500px",
  borderRadius: "24px",
  overflow: "hidden",
  // background: "linear-gradient(to top, #80d0f0, #e0f7ff)",
  position: "relative",
  margin: "0 auto",
});

export const downloadBtn = style({
  display: "block",
  marginTop: "16px",
  padding: "4px 12px",
  fontSize: "14px",
  backgroundColor: themeColor.buttonHover,
  width: "120px",
  textAlign: "center",
  color: themeColor.text,
  textDecoration: "none",
  borderRadius: "30px",
  height: "44px",
  lineHeight: "44px",
});

export const displayText = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "block",
  color: themeColor.text,
  fontSize: "28px",
  fontWeight: "bold",
  pointerEvents: "none",
  transform: "translate(-50%, -50%)",
  textShadow: "1px 1px 4px rgba(161, 161, 161, 0.5)",
  zIndex: 10,
});
