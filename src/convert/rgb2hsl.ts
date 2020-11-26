import { HslObject, RGBType } from "../types";

export function rgb2hsl(rgb: RGBType): HslObject {
  var r = rgb[0] / 255,
    g = rgb[1] / 255,
    b = rgb[2] / 255,
    min = Math.min(r, g, b),
    max = Math.max(r, g, b),
    delta = max - min,
    hue: number = 0,
    saturation,
    lightness;

  if (max == min) hue = 0;
  else if (r == max) hue = (g - b) / delta;
  else if (g == max) hue = 2 + (b - r) / delta;
  else if (b == max) hue = 4 + (r - g) / delta;

  hue = Math.min(hue * 60, 360);

  if (hue < 0) hue += 360;

  lightness = (min + max) / 2;

  if (max == min) saturation = 0;
  else if (lightness <= 0.5) saturation = delta / (max + min);
  else saturation = delta / (2 - max - min);

  return {
    hue,
    saturation: saturation * 100,
    lightness: lightness * 100
  };
}
