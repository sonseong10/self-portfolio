import { themeColor } from "@/styles/tokens.css";
import { globalStyle, style } from "@vanilla-extract/css";

const box = style({
  padding: "10px",
  backgroundColor: themeColor.primary,
  color: "#fff",
  borderRadius: "24px",
});

const slideItem = style({
  backgroundColor: themeColor.primary,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "120px",
  fontSize: "16px",
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
    },
  },
});

globalStyle(`${box} .swiper-pagination-bullet-active`, {
  background: "#eee",
  width: "16px",
  borderRadius: "4px",
});

export { box, slideItem, sildeImage };
