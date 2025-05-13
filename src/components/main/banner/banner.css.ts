import { breakpoints } from "@/styles/cpnstructs/breakPoint";
import { vars } from "@/styles/global.css";
import SVG from "@/styles/svgIcon";
import { themeColor } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const areaBanner = style({
  "@media": {
    [breakpoints.wide]: {
      width: "1094px",
      height: "621px",
      borderTopLeftRadius: "38px",
      borderBottomRightRadius: "38px",
      overflow: "hidden",
    },
    [breakpoints.desktop]: {
      width: "755px",
      height: "486px",
    },
    [breakpoints.tablet]: {
      width: "100%",
      height: "405px",
    },
    [breakpoints.mobile]: {
      borderBottomLeftRadius: "38px",
      height: "auto",
    },
  },
});

export const box = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: vars.fontSize.large,
  color: themeColor.text,

  "@media": {
    [breakpoints.wide]: {
      width: "1094px",
      height: "621px",
    },
    [breakpoints.desktop]: {
      width: "755px",
      height: "486px",
    },
    [breakpoints.tablet]: {
      width: "100%",
      height: "405px",
    },
    [breakpoints.mobile]: {
      height: "299px",
    },
  },
});

export const video = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100%",
  height: "100%",
  display: "inline-block",
  verticalAlign: "top",
  objectFit: "cover",
  transform: "translate3d(-50%, -50%, 0)",
});

export const visualTitle = style({
  position: "absolute",
  left: "50%",
  top: "48px",
  color: "#fff",
  fontSize: "32px",
  fontWeight: 400,
  transform: "translateX(-50%)",
  zIndex: 100,

  "@media": {
    [breakpoints.mobile]: {
      zIndex: -1,
    },
  },
});

export const pointText = style({
  color: "#00caff",
  fontWeight: 700,
});

export const innerTop = style({
  position: "absolute",
  right: -1,
  top: 0,
  backgroundColor: themeColor.background,

  selectors: {
    "&::before": {
      position: "absolute",
      right: "100px",
      top: "-4px",
      width: "41px",
      height: "38px",
      backgroundColor: themeColor.background,
      maskImage: `url(${SVG.BannerLeftTop()})`,
      maskRepeat: "no-repeat",
      maskSize: "46px",
      zIndex: 100,
      content: "",
    },

    "&::after": {
      position: "absolute",
      right: "1px",
      bottom: "-34px",
      width: "41px",
      height: "38px",
      backgroundColor: themeColor.background,
      maskImage: `url(${SVG.BannerLeftTop()})`,
      maskRepeat: "no-repeat",
      maskSize: "46px",
      zIndex: 100,
      content: "",
    },
  },
});

export const githubLink = style({
  position: "relative",
  display: "block",
  width: "80px",
  height: "80px",
  padding: "10px",
  borderBottomLeftRadius: "32px",
  backgroundColor: themeColor.background,
  textDecoration: "none",
  zIndex: 100,
});

export const altText = style({
  display: "block",
  mask: `url(${SVG.GithubIcon()}) no-repeat center center`,
  maskSize: "64px",
  backgroundColor: themeColor.text,
  color: "transparent",
});

export const innerBottom = style({
  position: "absolute",
  bottom: 0,
  left: 0,
  backgroundColor: themeColor.background,
  padding: "23px 23px 28px",
  borderTopRightRadius: "38px",

  selectors: {
    "&::before": {
      position: "absolute",
      left: "0px",
      bottom: "76px",
      width: "41px",
      height: "38px",
      backgroundColor: themeColor.background,
      maskImage: `url(${SVG.BannerLeftTop()})`,
      maskRepeat: "no-repeat",
      maskSize: "46px",
      zIndex: 100,
      transform: "rotate(180deg)",
      content: "",
    },

    "&::after": {
      position: "absolute",
      left: 197,
      bottom: -4,
      width: "41px",
      height: "38px",
      backgroundColor: themeColor.background,
      maskImage: `url(${SVG.BannerLeftTop()})`,
      maskRepeat: "no-repeat",
      maskSize: "46px",
      zIndex: 100,
      transform: "rotate(180deg)",
      content: "",
    },
  },

  "@media": {
    [breakpoints.mobile]: {
      zIndex: -1,
    },
  },
});

export const moveToNext = style({
  selectors: {
    "&::after": {
      position: "relative",
      bottom: "-3px",
      right: "-8px",
      display: "inline-block",
      width: "20px",
      height: "20px",
      maskImage: `url(${SVG.CrossArrow()})`,
      maskRepeat: "no-repeat",
      backgroundColor: themeColor.text,
      transform: "rotate(135deg)",
      content: "",
    },
  },
});
