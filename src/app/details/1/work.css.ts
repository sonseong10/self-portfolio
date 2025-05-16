import { style } from "@vanilla-extract/css";

const layout = style({
  display: "flex",
});

const lnbWrapper = style({
  position: "sticky",
  top: "100px",
  alignSelf: "start",
  scrollMarginTop: "80px",
});
export { layout, lnbWrapper };
