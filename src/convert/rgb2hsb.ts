import { RGBType, HsbObject } from "../types";
export function rgb2hsb(rgb: RGBType): HsbObject {
  var r = rgb[0],
    g = rgb[1],
    b = rgb[2],
    min = Math.min(r, g, b),
    max = Math.max(r, g, b),
    delta = max - min,
    hue = 0,
    saturation,
    brightness;

  if (max == 0) saturation = 0;
  else saturation = ((delta / max) * 1000) / 10;

  if (max == min) hue = 0;
  else if (r == max) hue = (g - b) / delta;
  else if (g == max) hue = 2 + (b - r) / delta;
  else if (b == max) hue = 4 + (r - g) / delta;

  hue = Math.min(hue * 60, 360);

  if (hue < 0) hue += 360;

  brightness = ((max / 255) * 1000) / 10;

  return {
    hue,
    saturation,
    brightness
  };
}
