import { RGBType } from "../types";
export function rgb2grayscale(rgb: RGBType) {
  return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
}
