import { RGBType, RGBAType } from "../types";
import { clamp } from "../utils";

function componentToHex(c: number) {
  var value = Math.round(clamp(c, 0, 255));
  var hex = value.toString(16);

  return hex.length == 1 ? "0" + hex : hex;
}

export function rgb2hex(rgb: RGBType | RGBAType) {
  var alpha = rgb.length === 4 ? componentToHex(rgb[3] * 255) : "";

  return (
    "#" +
    componentToHex(rgb[0]) +
    componentToHex(rgb[1]) +
    componentToHex(rgb[2]) +
    alpha
  );
}
