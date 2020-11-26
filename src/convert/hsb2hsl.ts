import { HslObject } from "../types";
export function hsb2hsl(hsb: [number, number, number]): HslObject {
  var h = hsb[0],
    s = hsb[1] / 100,
    v = hsb[2] / 100,
    sl,
    l;

  l = (2 - s) * v;
  sl = s * v;
  sl /= l <= 1 ? l : 2 - l;
  sl = sl || 0;
  l /= 2;
  return {
    hue: h,
    saturation: sl * 100,
    lightness: l * 100
  };
}
