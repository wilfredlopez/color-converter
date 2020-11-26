import {hex2Rgb} from "../hex-rgb";
import {RGBType} from '../types'
import { RgbaObject } from '../../dist/types'

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




export function invertColor(hex: string, bw: number = 0) {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1)
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.')
  }
  var r: string | number = parseInt(hex.slice(0, 2), 16),
    g: string | number = parseInt(hex.slice(2, 4), 16),
    b: string | number = parseInt(hex.slice(4, 6), 16)
  if (bw) {
    // http://stackoverflow.com/a/3943023/112731
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF'
  }
  // invert color components
  r = (255 - r).toString(16)
  g = (255 - g).toString(16)
  b = (255 - b).toString(16)
  // pad each with zeros and return
  return '#' + padZero(r) + padZero(g) + padZero(b)
}

function padZero(str: string | number, len: number = 2) {
  len = len || 2
  const zeros = new Array(len).join('0')
  return (zeros + str).slice(-len)
}

export function invertHex(hex: string) {
  return '#' + (Number(`0x1${hex}`) ^ 0xffffff).toString(16).substr(1)
}

export function colorContrast(
  colorHex: string | undefined,
  threshold: number = 116
): string {
  if (colorHex === undefined) {
    return '#000000'
  }

  const rgb = hex2Rgb(colorHex, {format:'object'})

  if (rgb === undefined) {
    return '#000000'
  }

  return rgbToYIQ(rgb) >= threshold ? '#000000' : '#ffffff'
}

function rgbToYIQ({ red, green, blue }: RgbaObject): number {
  return (red * 299 + green * 587 + blue * 114) / 1000
}
