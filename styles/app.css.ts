import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  padding: 10,
});

export const myStyle = style({
  // cast to pixels
  padding: 10,
  marginTop: 25,

  // unitless properties
  flexGrow: 1,
  opacity: 0.5,
});
globalStyle("body", {
  margin: 0,
});
