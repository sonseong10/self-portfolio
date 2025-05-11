import { breakpoints } from "@/styles/cpnstructs/breakPoint";
import { themeColor } from "@/styles/tokens.css";
import { globalStyle, style } from "@vanilla-extract/css";

const box = style({
  padding: "20px",
  backgroundColor: themeColor.primary,
  color: "#fff",
  borderRadius: "24px",
  width: "100%",
  boxSizing: "border-box",

  "@media": {
    [breakpoints.wide]: {
      marginTop: "16px",
    },
    [breakpoints.desktop]: {
      marginTop: "16px",
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

const slideItem = style({
  backgroundColor: themeColor.primary,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "146px",
  fontSize: "16px",

  "@media": {
    [breakpoints.tablet]: {
      minHeight: "180px",
    },
    [breakpoints.mobile]: {
      minHeight: "120px",
    },
  },
});

const sildeImage = style({
  borderRadius: "40px",
  objectFit: "cover",
  display: "block",
  fontSize: "32px",
  marginBottom: "4px",

  selectors: {
    "&.font": {
      fontStyle: "italic",
      fontWeight: "700",
    },
  },
});

globalStyle(`${box} .swiper-pagination-bullet-active`, {
  background: "#eee",
  width: "16px",
  borderRadius: "4px",
});

export { box, slideItem, sildeImage };
