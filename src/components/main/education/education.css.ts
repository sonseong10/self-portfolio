import { breakpoints } from "@/styles/cpnstructs/breakPoint";
import SVG from "@/styles/svgIcon";
import { themeColor } from "@/styles/tokens.css";
import { globalStyle, keyframes, style } from "@vanilla-extract/css";

const container = style({
  display: "flex",
  flexDirection: "row",
  gap: "24px",
  marginTop: "42px",

  "@media": {
    [breakpoints.desktop]: {},
    [breakpoints.desktop]: {
      gap: "8px",
    },
    [breakpoints.mobile]: {
      flexDirection: "column",
      gap: "24px",
    },
  },
});

const card = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "calc(100% / 3)",
  borderRadius: "24px",
  height: "569px",

  selectors: {
    "&.blue": {
      backgroundColor: "#89dcff",
    },

    "&.black": {
      backgroundColor: "#333",
      color: "#fff",
    },

    "&.green": {
      backgroundColor: "#03502b",
      color: "#fff",
    },
  },

  "@media": {
    [breakpoints.desktop]: {
      height: "390px",
    },
    [breakpoints.tablet]: {
      height: "360px",
    },
    [breakpoints.mobile]: {
      width: "100%",
      height: "324px",
    },
  },
});

const cardTitleWrap = style({
  position: "absolute",
  right: 0,
  top: 0,
  padding: "0 0 12px 12px",
  borderBottomLeftRadius: "24px",
  backgroundColor: themeColor.background,

  selectors: {
    "&::before": {
      position: "absolute",
      right: "164px",
      top: "-4px",
      width: "40px",
      height: "38px",
      backgroundColor: themeColor.background,
      maskImage: `url(${SVG.BannerLeftTop()})`,
      maskRepeat: "no-repeat",
      maskSize: "36px",
      zIndex: 1,
      content: "",

      "@media": {
        [breakpoints.desktop]: {},
        [breakpoints.tablet]: {
          right: "124px",
        },
        [breakpoints.mobile]: {
          right: "102px",
        },
      },
    },

    "&::after": {
      position: "absolute",
      right: "-8px",
      bottom: "-34px",
      width: "41px",
      height: "38px",
      backgroundColor: themeColor.background,
      maskImage: `url(${SVG.BannerLeftTop()})`,
      maskRepeat: "no-repeat",
      maskSize: "36px",
      zIndex: 1,
      content: "",
    },
  },
});

const cardTitle = style({
  display: "inline-block",
  width: "160px",
  height: "50px",
  borderRadius: "25px",
  fontSize: "18px",
  lineHeight: "50px",
  textAlign: "center",
  boxSizing: "border-box",

  selectors: {
    "&.blue": {
      backgroundColor: "#89dcff",
    },

    "&.black": {
      backgroundColor: "#333",
      color: "#fff",
    },

    "&.green": {
      backgroundColor: "#03502b",
      color: "#fff",
    },
  },

  "@media": {
    [breakpoints.desktop]: {},
    [breakpoints.tablet]: {
      height: "40px",
      width: "120px",
      fontSize: "14px",
      lineHeight: "40px",
    },
    [breakpoints.mobile]: {
      width: "100px",
      height: "32px",
      fontSize: "14px",
      lineHeight: "32px",
    },
  },
});

const cardContent = style({
  position: "absolute",
  maxWidth: "348px",
  bottom: "20px",
  left: "20px",
  fontSize: "24px",

  "@media": {
    [breakpoints.desktop]: {
      maxWidth: "216px",
      fontSize: "18px",
    },
    [breakpoints.tablet]: {
      bottom: "0px",
      left: "16px",
      maxWidth: "180px",
      fontSize: "16px",
    },
    [breakpoints.mobile]: {
      bottom: "12px",
      left: "32px",
      maxWidth: "216px",
      fontSize: "14px",
    },
  },
});

const float = keyframes({
  "0%": {
    transform: "translateY(0px)",
  },
  "50%": {
    transform: "translateY(-16px)",
  },
  "100%": {
    transform: "translateY(0px)",
  },
});

const imgList = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",

  "@media": {
    [breakpoints.tablet]: {
      gap: "8px",
    },
    [breakpoints.mobile]: {
      gap: "16px",
    },
  },
});

globalStyle(`${imgList} > img`, {
  width: "88px",
  height: "88px",

  "@media": {
    [breakpoints.desktop]: {
      width: "64px",
      height: "64px",
    },
    [breakpoints.mobile]: {
      width: "88px",
      height: "88px",
    },
  },
});

const imgContainer = style({
  position: "relative",
  width: "160px",
  height: "160px",
  margin: "0 auto",
  animation: `${float} 2s ease-in-out infinite`,
  transform: "rotateY(44deg)",

  selectors: {
    "&::before": {
      position: "absolute",
      right: "-12px",
      top: 0,
      bottom: 0,
      display: "inline-block",
      width: "160px",
      height: "160px",
      background: "#ECECEC",
      borderRadius: "8px",
      content: "",
      zIndex: -1,

      "@media": {
        [breakpoints.desktop]: {
          width: "120px",
          height: "120px",
        },
      },
    },
  },

  "@media": {
    [breakpoints.desktop]: {
      width: "120px",
      height: "120px",
    },
  },
});

const img = style({
  padding: "14px",
  width: "100%",
  height: "160px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxSizing: "border-box",

  selectors: {
    "&.bg-none": {
      background: "transparent",
    },
  },

  "@media": {
    [breakpoints.desktop]: {
      width: "120px",
      height: "120px",
    },
  },
});

const styles = {
  card,
  cardTitleWrap,
  cardContent,
  cardTitle,
  imgContainer,
  imgList,
  img,
  container,
};

export default styles;
