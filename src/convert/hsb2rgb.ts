import { RGBType } from "../types";
export function hsb2rgb(hsb: [number, number, number]): RGBType {
  let h = hsb[0] / 60,
    s = hsb[1] / 100,
    v = hsb[2] / 100,
    hi = Math.floor(h) % 6;

  let f = h - Math.floor(h),
    p = 255 * v * (1 - s),
    q = 255 * v * (1 - s * f),
    t = 255 * v * (1 - s * (1 - f));

  v = 255 * v;

  switch (hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
    default:
      return [v, p, q];
  }
}
