/**
 * parse-css-color
 * @version __VERSION__
 * @link http://github.com/noeldelgado/parse-css-color/
 * @license MIT
 */
import colorName from "./color-name";

import {
  hexRe,
  hsl3Re,
  hsl4Re,
  rgb3NumberRe,
  rgb3PercentageRe,
  rgb4NumberRe,
  rgb4PercentageRe,
  transparentRe
} from "./regexes";
import { getHEX, getRGB, getHSL } from "../utils";
import { ColorKey } from "./color-name";
import { RGBType, KindOfColor } from "../types";

export const parse = (
  str: string
): {
  type: KindOfColor;
  values: RGBType;
  alpha: number;
} | null => {
  if (typeof str !== "string") return null;

  const hex = hexRe.exec(str);
  if (hex) return getHEX(hex[0]);

  const hsl = hsl4Re.exec(str) || hsl3Re.exec(str);
  if (hsl) return getHSL(hsl as any);

  const rgb =
    rgb4NumberRe.exec(str) ||
    rgb4PercentageRe.exec(str) ||
    rgb3NumberRe.exec(str) ||
    rgb3PercentageRe.exec(str);
  if (rgb) return getRGB(rgb as any);

  if (transparentRe.exec(str)) return getRGB([null, 0, 0, 0, 0]);

  const cn = colorName[str.toLowerCase() as ColorKey];
  if (cn) return getRGB([null, cn[0], cn[1], cn[2], 1]);

  return null;
};
