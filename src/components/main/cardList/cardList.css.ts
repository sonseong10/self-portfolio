import { breakpoints } from "@/styles/cpnstructs/breakPoint";
import { themeColor } from "@/styles/tokens.css";
import { globalStyle, keyframes, style } from "@vanilla-extract/css";

const marqueeAnim = keyframes({
  "0%": { transform: "translateX(0)" },
  "100%": { transform: "translateX(-50%)" },
});

const list = style({
  display: "inline-flex",
  flexWrap: "nowrap",
  margin: 0,
  padding: 0,
  listStyle: "none",
  animation: `${marqueeAnim} 70s linear infinite`,
  willChange: "transform",

  selectors: {
    [`&:hover`]: {
      animationPlayState: "paused",
    },
  },

  "@media": {
    [breakpoints.wide]: {
      marginTop: "43px",
    },
    [breakpoints.desktop]: {
      marginTop: "24px",
    },
    [breakpoints.mobile]: {
      animation: `${marqueeAnim} 70s linear infinite`,
    },
  },
});

const listItem = style({
  display: "flex",

  "@media": {
    [breakpoints.wide]: {
      width: "317px",
      height: "439px",
      padding: "0 8px",
    },
    [breakpoints.desktop]: {
      width: "308px",
      height: "365px",
      padding: "0 6px",
    },
    [breakpoints.tablet]: {
      width: "232px",
      height: "328px",
      padding: "0 4px",
    },
    [breakpoints.mobile]: {
      width: "252px",
      height: "309px",
      padding: "0 6px",
    },
  },
});

const listLink = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  borderRadius: "24px",
  overflow: "hidden",
  background: themeColor.card,
  color: themeColor.text,
  textDecoration: "none",
  boxSizing: "border-box",
});

const areaContent = style({
  flex: 6,
  boxSizing: "border-box",

  "@media": {
    [breakpoints.wide]: {
      height: "260px",
      padding: "30px 30px 28px",
    },
    [breakpoints.desktop]: {
      height: "365px",
      padding: "24px 24px 12px",
    },
    [breakpoints.tablet]: {
      height: "328px",
      padding: "18px 18px 6px",
    },
    [breakpoints.mobile]: {
      height: "309px",
      padding: "16px 16px 10px",
    },
  },
});

const infoType = style({
  display: "block",
  padding: "0 12px",
  width: "fit-content",
  height: "32px",
  borderRadius: "8px",
  background: themeColor.subText,
  lineHeight: "34px",
  color: "#fff",
  fontSize: "14px",
});

const infoTitle = style({
  display: "inline-block",
  height: "108px",
  marginTop: "16px",
  fontSize: "26px",
  lineHeight: "1.38",
  letterSpacing: "-.6px",

  "@media": {
    [breakpoints.desktop]: {
      height: "56px",
      marginTop: "16px",
      fontSize: "18px",
      lineHeight: "1.55",
    },
  },
});

const infoTag = style({
  display: "block",
  overflow: "hidden",
  height: "26px",
  fontSize: "16px",
  lineHeight: "1.73",
  color: themeColor.subText,
  whiteSpace: "normal",
});

const areaThumbnail = style({
  width: "100%",
  flex: 4,

  selectors: {
    "&.logo": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: themeColor.primary,
      objectFit: "contain",
    },

    "&.image": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      height: "auto",
      objectFit: "cover",
    },
  },
});

const itemImage = style({
  display: "block",
});

globalStyle(`${list} > li:nth-child(even) > a`, {
  flexDirection: "column-reverse",
  justifyContent: "flex-end",
});

globalStyle(`${list} > li.row`, {
  "@media": {
    [breakpoints.wide]: {
      width: "560px",
    },
    [breakpoints.desktop]: {
      width: "308px",
    },
    [breakpoints.tablet]: {
      width: "232px",
    },
    [breakpoints.mobile]: {
      width: "252px",
    },
  },
});

globalStyle(`${list} > li.row > a`, {
  "@media": {
    [breakpoints.wide]: {
      flexDirection: "row",
      alignItems: "center",
    },
    [breakpoints.desktop]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
});

globalStyle(`${list} > li.row img`, {
  "@media": {
    [breakpoints.wide]: {
      flex: "7",
      height: "max-content",
      width: "100%",
    },
    [breakpoints.desktop]: {
      flexDirection: "column",
      width: "100%",
      height: "100px",
    },
  },
});

export {
  list,
  listItem,
  listLink,
  itemImage,
  areaContent,
  infoType,
  infoTitle,
  infoTag,
  areaThumbnail,
};
