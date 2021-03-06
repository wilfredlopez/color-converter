import { RGBType } from "../types";
export function cmyk2rgb(cmyk: [number, number, number, number]): RGBType {
  let c = cmyk[0] / 100,
    m = cmyk[1] / 100,
    y = cmyk[2] / 100,
    k = cmyk[3] / 100,
    r,
    g,
    b;

  r = 1 - Math.min(1, c * (1 - k) + k);
  g = 1 - Math.min(1, m * (1 - k) + k);
  b = 1 - Math.min(1, y * (1 - k) + k);
  return [r * 255, g * 255, b * 255];
}
