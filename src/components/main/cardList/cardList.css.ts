import { themeColor } from "@/styles/tokens.css";
import { globalStyle, keyframes, style } from "@vanilla-extract/css";

const marqueeAnim = keyframes({
  "0%": { transform: "translateX(0)" },
  "100%": { transform: "translateX(-50%)" },
});

export const list = style({
  display: "inline-flex",
  flexWrap: "nowrap",
  margin: 0,
  padding: 0,
  listStyle: "none",
  animation: `${marqueeAnim} 70s linear infinite`,
  willChange: "transform",

  selectors: {
    [`&:hover`]: { animationPlayState: "paused" },
  },
});

export const listItem = style({
  display: "flex",
  flexDirection: "column",
  flex: "0 0 auto",
  aspectRatio: "3 / 4", // ← 카드 비율 고정
  padding: "0 0.5rem",
  boxSizing: "border-box",
  minWidth: "clamp(220px, 25vw, 320px)",
  maxWidth: "320px",
});

export const listLink = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  borderRadius: "1.5rem",
  overflow: "hidden",
  background: themeColor.card,
  color: themeColor.text,
  textDecoration: "none",
  boxSizing: "border-box",
  transition: "transform 0.3s ease",
  ":hover": { transform: "translateY(-4px)" },
});

export const areaContent = style({
  flex: "6 1 0",
  padding: "1.5rem",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const infoType = style({
  display: "inline-block",
  padding: "0 0.75rem",
  height: "2rem",
  borderRadius: "0.5rem",
  background: themeColor.subText,
  color: "#fff",
  fontSize: "0.875rem",
  lineHeight: "2rem",
});

export const infoTitle = style({
  marginTop: "1rem",
  fontSize: "clamp(1rem, 2vw, 1.5rem)",
  lineHeight: "1.4",
  fontWeight: 600,
});

export const infoTag = style({
  fontSize: "0.9rem",
  color: themeColor.subText,
  display: "flex",
  flexWrap: "wrap",
  gap: "0.25rem",
  marginTop: "0.5rem",
});

export const areaThumbnail = style({
  flex: "4 1 0",
  position: "relative",
  width: "100%",
  aspectRatio: "1 / 1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  selectors: {
    "&.logo": { background: themeColor.primary },
    "&.image": {},
  },
});

globalStyle(`${list} > li:nth-child(even) > a`, {
  flexDirection: "column-reverse",
});

globalStyle(`${list} > li.row > a`, {
  flexDirection: "row",
  alignItems: "center",
  gap: "1rem",
});

globalStyle(`${list} > li.row img`, {
  width: "100%",
  height: "auto",
  objectFit: "contain",
});
