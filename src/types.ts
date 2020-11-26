export type RGBType = [r:number, g:number, b:number];

export type RGBAType = [r:number, g:number, b:number, a:number, ...rest:unknown[]]

export type KindOfColor = "rgb" | "hsl";

export interface HexRgbOptions {
    readonly format?: "object" | "array" | "css";
}

export interface RgbObject {
    red: number;
    green: number;
    blue: number;
  }
  export interface HsbObject {
    hue: number;
    saturation: number;
    brightness: number;
  }

  export interface HslObject {
    hue: number;
    saturation: number;
    lightness: number;
  }
  
export interface RgbaObject {
    red: number;
    green: number;
    blue: number;
    alpha: number;
  }
  

  export type ColorConverterType = "shade" | "base" | "tint";
