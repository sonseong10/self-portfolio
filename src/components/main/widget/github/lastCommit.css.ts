import { breakpoints } from "@/styles/cpnstructs/breakPoint";
import SVG from "@/styles/svgIcon";
import { themeColor } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

const linkBox = style({
  position: "relative",
  display: "block",
  textDecoration: "none",
  padding: "20px",
  backgroundColor: themeColor.card,

  fontSize: "14px",
  color: themeColor.text,
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
      mask: `url(${SVG.CrossArrow()}) no-repeat center center`,
      backgroundColor: themeColor.text,
      zIndex: 1,
    },
  },

  "@media": {
    [breakpoints.wide]: {
      marginTop: "16px",
      minHeight: "230px",
    },
    [breakpoints.desktop]: {
      marginTop: "16px",
      minHeight: "210px",
    },
    [breakpoints.tablet]: {
      marginTop: "0",
      marginLeft: "8px",
    },
    [breakpoints.mobile]: {
      marginTop: "16px",
      marginLeft: "0",
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
      bottom: "20px",
      right: "20px",
      marginBottom: "0",
      color: themeColor.subText,
      fontSize: "12px",
    },
  },
});

export { linkBox, badge, historyList, listTitle, listItem };
