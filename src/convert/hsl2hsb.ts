import { HsbObject } from "../types";
export function hsl2hsb(hsl: [number, number, number]): HsbObject {
  let h = hsl[0],
    s = hsl[1] / 100,
    l = hsl[2] / 100,
    sv,
    v;

  if (l === 0) {
    // no need to do calc on black
    // also avoids divide by 0 error
    return {
      hue: 0,
      saturation: 0,
      brightness: 0
    };
  }

  l *= 2;
  s *= l <= 1 ? l : 2 - l;
  v = (l + s) / 2;
  sv = (2 * s) / (l + s);
  return {
    hue: h,
    saturation: sv * 100,
    brightness: v * 100
  };
}
