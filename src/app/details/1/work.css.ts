import { breakpoints } from "@/styles/cpnstructs/breakPoint";
import SVG from "@/styles/svgIcon";
import { themeColor } from "@/styles/tokens.css";
import { globalStyle, style } from "@vanilla-extract/css";

const layout = style({
  display: "flex",
  maxWidth: "1200px",
  margin: "0 auto",

  selectors: {
    "&.col": {
      flexDirection: "column",
    },
  },

  "@media": {
    [breakpoints.wide]: {
      maxWidth: "1316px",
    },
    [breakpoints.desktop]: {
      maxWidth: "952px",
    },
    [breakpoints.tablet]: {
      maxWidth: "712px",
    },
    [breakpoints.mobile]: {
      maxWidth: "412px",
    },
  },
});

export const codeBox = style({
  "@media": {
    [breakpoints.wide]: {
      width: "calc(1316px - 20px) ",
    },
    [breakpoints.desktop]: {
      width: "calc(952px - 20px)",
    },
    [breakpoints.tablet]: {
      width: "calc(712px - 20px)",
    },
    [breakpoints.mobile]: {
      width: "calc(412px - 20px)",
    },
  },
});

const lnbWrapper = style({
  position: "sticky",
  top: "100px",
  marginTop: "18px",
  scrollMarginTop: "80px",
  alignSelf: "start",
  flex: 2,

  "@media": {
    [breakpoints.desktop]: {
      display: "block",
    },
    [breakpoints.tablet]: {
      display: "none",
    },
    [breakpoints.mobile]: {
      display: "none",
    },
  },
});

globalStyle(`${lnbWrapper} ul`, {
  margin: 0,
  padding: 0,
});

globalStyle(`${lnbWrapper} ul > li`, {
  marginBottom: "4px",
});

globalStyle(`${lnbWrapper} ul.inner`, {
  marginTop: "4px",
  padding: "0 14px",
});

globalStyle(`${lnbWrapper} a`, {
  color: themeColor.text,
  fontSize: "13px",
  textDecoration: "none",
});

const contents = style({
  flex: 8,
  fontSize: "14px",
  color: themeColor.text,
});

const outLink = style({
  display: "block",
  margin: "8px 0",
  color: themeColor.text,
  textDecoration: "none",
  cursor: "pointer",

  selectors: {
    "&:focus": {
      opacity: 0.6,
      outline: `2px solid ${themeColor.text}`,
      borderRadius: "2px",
    },

    "&:hover": {
      opacity: 0.6,
    },

    "&::after": {
      display: "inline-block",
      width: "12px",
      height: "12px",
      mask: `url(${SVG.CrossArrow()}) no-repeat center center`,
      maskSize: "12px",
      backgroundColor: themeColor.text,
      content: "",
    },
  },
});

globalStyle(`${contents} h3`, {
  fontSize: "18px",
});

globalStyle(`${contents} h4`, {
  fontSize: "16px",
});

globalStyle(`${contents} dl, ${contents} ul,${contents} ol`, {
  margin: 0,
  padding: 0,
  listStyle: "none",
});

globalStyle(`${contents} dl > div > dt, ${contents} dl > div > dd`, {
  display: "inline-block",
});

globalStyle(`${contents} dl > div`, {
  marginBottom: "8px",
});

globalStyle(`${contents} dl > div > dd`, {
  display: "inline-block",
  marginLeft: "10px",
  lineHeight: "22px",
});

globalStyle(`${contents} p`, {
  margin: "0",
  lineHeight: "22px",
});

globalStyle(`${contents} dl div dd.long_text`, {
  display: "block",
  marginLeft: "0",
});

globalStyle(`${contents} dt`, {
  color: themeColor.subText,
});
export { layout, outLink, lnbWrapper, contents };

export const linkGroup = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    [breakpoints.wide]: {
      margin: "80px auto",
      maxWidth: "1316px",
    },
    [breakpoints.desktop]: {
      margin: "40px auto",
      maxWidth: "952px",
    },
    [breakpoints.tablet]: {
      margin: "40px auto",
      maxWidth: "712px",
    },
    [breakpoints.mobile]: {
      margin: "20px auto",
      maxWidth: "412px",
    },
  },
});

export const navigationLink = style({
  display: "inline-block",
  margin: "0 8px",
  padding: " 4px 8px",
  width: "130px",
  height: "44px",
  backgroundColor: `${themeColor.card}`,
  borderRadius: "8px",
  lineHeight: " 36px",
  color: themeColor.text,
  textAlign: "center",
  textDecoration: "none",
  boxSizing: "border-box",
  cursor: "pointer",

  selectors: {
    "&:hover": {
      opacity: 0.6,
    },
  },
});

export const gradientTitle = style({
  fontSize: "80px",
  fontWeight: 800,
  background: "linear-gradient(90deg, #4facfe, #00f2fe)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textAlign: "center",
  marginBottom: "1rem",
});

export const threeDContainer = style({
  width: "100%",
  height: "500px",
  borderRadius: "24px",
  overflow: "hidden",
  background: "linear-gradient(to top, #80d0f0, #e0f7ff)",
  position: "relative",
  margin: "0 auto",
});

export const displayText = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "block",
  color: "white",
  fontSize: "28px",
  fontWeight: "bold",
  pointerEvents: "none",
  transform: "translate(-50%, -50%)",
  textShadow: "1px 1px 4px rgba(161, 161, 161, 0.5)",
  zIndex: 10,
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