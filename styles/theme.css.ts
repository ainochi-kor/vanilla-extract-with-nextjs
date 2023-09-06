import { createThemeContract, style } from "@vanilla-extract/css";

export const themeVars = createThemeContract({
  color: {
    brand: null,
  },
  font: {
    body: null,
  },
});

export const container = style({
  background: themeVars.color.brand,
  fontFamily: themeVars.font.body,
});
