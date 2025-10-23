import { breakpoints } from "@/styles/cpnstructs/breakPoint";
import SVG from "@/styles/svgIcon";
import { themeColor } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const areaBanner = style({
  flex: 1,
  margin: "0 auto",
  borderRadius: "2.4rem",
  overflow: "hidden",
  position: "relative",
  aspectRatio: "16 / 9",

  "@media": {
    [breakpoints.wide]: {
      maxWidth: "70vw",
    },
    [breakpoints.desktop]: {
      maxWidth: "80vw",
    },
    [breakpoints.tablet]: {
      maxWidth: "95vw",
      aspectRatio: "4 / 3",
    },
    [breakpoints.mobile]: {
      width: "100%",
      borderRadius: "0 0 2rem 0",
      aspectRatio: "3 / 4",
    },
  },
});

export const box = style({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: themeColor.text,
  fontSize: "clamp(1rem, 1.2vw, 1.5rem)",
});

export const video = style({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  zIndex: 0,
});

export const visualTitle = style({
  position: "absolute",
  top: "12%",
  left: "50%",
  transform: "translateX(-50%)",
  color: "#fff",
  fontSize: "clamp(1.8rem, 2.3vw, 2.8rem)",
  fontWeight: 400,
  lineHeight: 1.4,
  textAlign: "center",
  zIndex: 2,

  "@media": {
    [breakpoints.tablet]: {
      top: "10%",
      fontSize: "clamp(1.6rem, 2vw, 2.4rem)",
    },
    [breakpoints.mobile]: {
      top: "15%",
      fontSize: "1.4rem",
      lineHeight: 1.3,
    },
  },
});

export const pointText = style({
  color: "#00caff",
  fontWeight: 700,
});

export const innerTop = style({
  position: "absolute",
  right: 0,
  top: 0,
  backgroundColor: themeColor.background,
  borderBottomLeftRadius: "2rem",
  zIndex: 3,
});

export const githubLink = style({
  display: "block",
  width: "4rem",
  height: "4rem",
  padding: "0.6rem",
  borderBottomLeftRadius: "2rem",
  backgroundColor: themeColor.background,
  textDecoration: "none",
  zIndex: 3,

  "@media": {
    [breakpoints.mobile]: {
      width: "3rem",
      height: "3rem",
    },
  },

  selectors: {
    "&::after": {
      position: "absolute",
      right: "4.8rem",
      top: "-4px",
      width: "40px",
      height: "38px",
      backgroundColor: themeColor.background,
      maskImage: `url(${SVG.RoundEdge()})`,
      maskRepeat: "no-repeat",
      maskSize: "36px",
      zIndex: 1,
      content: "",
    },

    "&::before": {
      position: "absolute",
      right: "-6px",
      bottom: "-2.1rem",
      width: "40px",
      height: "38px",
      backgroundColor: themeColor.background,
      maskImage: `url(${SVG.RoundEdge()})`,
      maskRepeat: "no-repeat",
      maskSize: "36px",
      zIndex: 1,
      content: "",
    },
  },
});

export const altText = style({
  display: "block",
  width: "100%",
  height: "100%",
  mask: `url(${SVG.GithubIcon()}) no-repeat center center`,
  maskSize: "contain",
  backgroundColor: themeColor.text,
  color: "transparent",
});

export const innerBottom = style({
  position: "absolute",
  bottom: 0,
  left: 0,
  backgroundColor: themeColor.background,
  padding: "1.2rem 1.5rem",
  borderTopRightRadius: "2rem",
  zIndex: 2,

  "@media": {
    [breakpoints.mobile]: {
      padding: "0.8rem 1rem",
    },
  },

  selectors: {
    "&::after": {
      position: "absolute",
      right: "8rem",
      top: "-35px",
      width: "40px",
      height: "38px",
      backgroundColor: themeColor.background,
      maskImage: `url(${SVG.RoundEdge()})`,
      maskRepeat: "no-repeat",
      maskSize: "36px",
      zIndex: 1,
      transform: "rotate(180deg)",
      content: "",
    },

    "&::before": {
      position: "absolute",
      right: "-32px",
      bottom: "-0.2rem",
      width: "40px",
      height: "38px",
      backgroundColor: themeColor.background,
      maskImage: `url(${SVG.RoundEdge()})`,
      maskRepeat: "no-repeat",
      maskSize: "36px",
      zIndex: 1,
      content: "",
      transform: "rotate(180deg)",
    },
  },
});

export const moveToNext = style({
  fontSize: "0.9rem",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  color: themeColor.text,

  selectors: {
    "&::after": {
      display: "inline-block",
      width: "1rem",
      height: "1rem",
      maskImage: `url(${SVG.CrossArrow()})`,
      maskSize: "contain",
      maskRepeat: "no-repeat",
      backgroundColor: themeColor.text,
      transform: "rotate(135deg)",
      content: "",
    },
  },
});
