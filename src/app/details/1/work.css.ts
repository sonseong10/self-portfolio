import { style, globalStyle } from "@vanilla-extract/css";
import { themeColor } from "@/styles/tokens.css";
import { breakpoints } from "@/styles/cpnstructs/breakPoint";
import SVG from "@/styles/svgIcon";

export const layout = style({
  display: "flex",
  gap: "2rem",
  maxWidth: "1200px",
  margin: "0 auto",
  "@media": {
    [breakpoints.tablet]: { flexDirection: "column", padding: "1rem" },
    [breakpoints.mobile]: { padding: "0.5rem" },
  },
});

/* LNB */
export const lnbWrapper = style({
  flex: "0 0 220px",
  position: "sticky",
  top: "140px",
  alignSelf: "flex-start",
  height: "fit-content",
  "@media": {
    [breakpoints.tablet]: { display: "none" },
    [breakpoints.mobile]: { display: "none" },
  },
});

export const lnbList = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

globalStyle(`${lnbList} ul.inner`, {
  marginTop: "4px",
  paddingLeft: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

globalStyle(`${lnbList} a`, {
  display: "inline-block",
  color: themeColor.text,
  fontSize: "14px",
  textDecoration: "none",
  lineHeight: 1.6,
  borderRadius: "4px",
  padding: "2px 4px",
  transition: "background 0.2s ease, color 0.2s ease",
});

/* 콘텐츠 */
export const contents = style({
  flex: 1,
  fontSize: "15px",
  color: themeColor.text,
  lineHeight: 1.7,
});

globalStyle(`${contents} h3`, {
  fontSize: "1.5rem",
  marginBottom: "1rem",
  borderBottom: `1px solid ${themeColor.border}`,
  paddingBottom: "0.5rem",
});
globalStyle(`${contents} h4`, { fontSize: "1.1rem", marginTop: "1rem" });
globalStyle(`${contents} p`, { marginBottom: "1rem" });
globalStyle(`${contents} dl`, { margin: "0.5rem 0" });

/* 외부 링크 */
export const outLink = style({
  display: "inline-block",
  margin: "0.5rem 0 0.5rem 0.5rem",
  textDecoration: "none",
  fontWeight: 600,
  color: themeColor.text,

  ":hover": { opacity: 0.8 },

  selectors: {
    "&::after": {
      display: "inline-block",
      width: "1rem",
      height: "1rem",
      mask: `url(${SVG.CrossArrow()}) no-repeat center center`,
      maskSize: "1rem",
      backgroundColor: themeColor.text,
      color: themeColor.text,
      content: "",
    },
  },
});

export const careerList = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const careerContent = style({
  //
});

export const careerContentWrap = style({
  display: "flex",
  gap: "1rem",
});

export const careerTitle = style({
  flex: "0 0 auto",
});

export const swapText = style({
  display: "inline-block",
  marginRight: "1rem",
});

/* 이전/다음 링크 */
export const linkGroup = style({
  display: "flex",
  justifyContent: "center",
  marginTop: "2rem",
  gap: "1rem",
  "@media": {
    [breakpoints.tablet]: { flexDirection: "column", alignItems: "center" },
  },
});

export const navigationLink = style({
  display: "inline-block",
  padding: "8px 16px",
  backgroundColor: themeColor.card,
  borderRadius: "8px",
  color: themeColor.text,
  textAlign: "center",
  textDecoration: "none",
  width: "4.4rem",
  height: "1.4rem",
  lineHeight: "1.4rem",
  ":hover": { opacity: 0.7, transform: "translateY(-2px)" },
  transition: "all 0.2s ease",
});
