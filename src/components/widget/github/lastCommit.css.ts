import SVG from "@/styles/svgIcon";
import { themeColor } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

const linkBox = style({
  position: "relative",
  display: "block",
  textDecoration: "none",
  padding: "20px",
  backgroundColor: "#f3f3f3",
  fontSize: "14px",
  color: "#000",
  borderRadius: " 24px",
  boxSizing: "border-box",

  selectors: {
    "&::before": {
      position: "absolute",
      right: "12px",
      content: "",
      display: "block",
      width: "24px",
      height: "24px",
      background: `url(${SVG.CrossArrow()}) no-repeat center center`,
      zIndex: 1,
    },
  },
});

const badge = style({
  display: "inline-block",
  marginBottom: "12px",
  padding: "4px 12px",
  borderRadius: "8px",
  backgroundColor: themeColor.primary,
  color: "#fff",
  lineHeight: "1.78",
  letterSpacing: "-.2px",
});

const historyList = style({
  margin: 0,
});

const listTitle = style({
  color: themeColor.subText,
});

const listItem = style({
  margin: 0,
  marginBottom: "8px",
  fontSize: "16px",

  selectors: {
    "&.date": {
      position: "absolute",
      bottom: "4px",
      right: "16px",
      marginBottom: "0",
      color: themeColor.subText,
      fontSize: "12px",
    },
  },
});

export { linkBox, badge, historyList, listTitle, listItem };
