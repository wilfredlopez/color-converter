export type RGBType = [r:number, g:number, b:number];

export type RGBAType = [r:number, g:number, b:number, a:number]

export type KindOfColor = "rgb" | "hsl";

export interface HexRgbOptions {
    readonly format?: "object" | "array" | "css";
}
  
export interface RgbaObject {
    red: number;
    green: number;
    blue: number;
    alpha: number;
  }
  

  export type ColorConverterType = "shade" | "base" | "tint";
