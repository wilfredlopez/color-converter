import { RGBType } from "../types";

export function lch2lab(lch: RGBType): RGBType {
  var l = lch[0],
    c = lch[1],
    h = lch[2],
    a,
    b,
    hr;

  hr = (h / 360) * 2 * Math.PI;
  a = c * Math.cos(hr);
  b = c * Math.sin(hr);
  return [l, a, b];
}
