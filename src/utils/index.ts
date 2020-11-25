import {hex2Rgb} from "../hex-rgb";
import {RGBType} from '../types'

type InputRGAArray = [
    w:number | null,
    ...rest:number[]
  ]

  
type InputHSLArray = [w:null|number|string, h:string, s:string, l:string, ...rest: number[]]
export const defaultNumberParam = (v: number | null|undefined, d: number) =>
  typeof v === 'undefined' || v === null || isNaN(v) || typeof v === "string" ? d : v;

  
export const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(min, num), max);

/* 500 => 255, -10 => 0, 128 => 128 */
const parseRGB = (num: string | number) => {
  let n = num;
  if (typeof n !== "number")
    n = n.endsWith("%") ? (parseFloat(n) * 255) / 100 : parseFloat(n);
  return clamp(Math.round(n), 0, 255);
};

/* 200 => 100, -100 => 0, 50 => 50 */
const parsePercentage = (percentage: string) =>
  clamp(parseFloat(percentage), 0, 100);

/* '50%' => 5.0, 200 => 1, -10 => 0 */
function parseAlpha(alpha: string | number) {
  let a = alpha;
  if (typeof a !== "number")
    a = a.endsWith("%") ? parseFloat(a) / 100 : parseFloat(a);
  return clamp(a, 0, 1);
}

export function getHEX(hex: string) {
  const [r, g, b, a] = hex2Rgb(hex, { format: "array" });
  return getRGB([null, ...[r, g, b, a]]);
}

export function getHSL([, h, s, l, a = 1]:InputHSLArray):{
    type: "hsl",
    values: RGBType,
    alpha: number
} {
  let hh:string|number = h;
  if (hh.endsWith("turn")) {
    hh = (parseFloat(hh) * 360) / 1;
  } else if (hh.endsWith("rad")) {
    hh = Math.round((parseFloat(hh) * 180) / Math.PI);
  } else {
    hh = parseFloat(hh);
  }
  return {
    type: "hsl",
    values: [hh, parsePercentage(s), parsePercentage(l)] as RGBType,
    alpha: parseAlpha(a === null ? 1 : a)
  };
}

export function getRGB([, r, g, b, a = 1]: InputRGAArray):{
    type: "rgb",
    values: RGBType,
    alpha: number
} {
  return {
    type: "rgb",
    values: [r, g, b].map(parseRGB) as RGBType,
    alpha: parseAlpha(a === null ? 1 : a)
  };
}


