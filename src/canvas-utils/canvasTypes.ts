import { HsbObject, RgbObject } from "../types";

export interface ColorObject {
  hsb: HsbObject;
  rgb: RgbObject;
  hex: string;
}

export type ColorModels = "hex" | "rgb" | "hsb";
