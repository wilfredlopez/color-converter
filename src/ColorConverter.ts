import { mix } from "./mix"
import { RGBType, RGBAType, ColorConverterType, RgbObject, RgbaObject, HslObject, HsbObject } from './types'
import { parse } from "./parse"
import { colorContrast, defaultNumberParam, invertHex } from "./utils"
import { hsl2rgb, rgb2hex, rgb2hsl, hsl2string, rgb2hsb } from "./convert"
import { ERROR_NON_STRING_MSG, ERROR_STRING_MSG } from "./constants"
import { toColorObject } from './canvas-utils/toColorObject'

export default class ColorConverter {
  static VERSION: string = "";
  constructor(
    color: string | number = "#000",
    alpha = 1,
    type: ColorConverterType = "base",
    weight = 0
  ) {
    [this.rgb, this.alpha, this.type, this.weight] = [
      [0, 0, 0],
      alpha,
      type,
      weight
    ]

    if (typeof color === "number") {
      //handle hexadecimal cases 0xff0000 > #FFFFFF
      let hexaColor = "#" + (color as number).toString(16).toUpperCase()
      if (hexaColor.length !== 7) {
        throw new TypeError(`${ERROR_NON_STRING_MSG} ${color}`)
      } else {
        color = hexaColor
      }
    }
    let colorToParse = color === null ? "#000" : color
    if (typeof colorToParse !== "string") {
      throw new TypeError(`${ERROR_NON_STRING_MSG} ${colorToParse}`)
      // colorToParse = '#000'
    }

    const parsed = parse(colorToParse)
    if (!parsed) throw new Error(`${ERROR_STRING_MSG} ${colorToParse}`)
    if (parsed.type === "rgb") {
      return this._setFromRGB([...parsed.values, parsed.alpha])
    }

    return this._setFromHSL([...parsed.values, parsed.alpha])
  }

  /*-------------------------------
 * ************PROPERTIES & GETTERS ************
 * ---------------------------- -*/
  rgb: RGBType
  alpha: number
  type: ColorConverterType
  weight: number
  get hex() {
    // return this.hexString().replace(/^#/, "");
    return this.hexString().replace(/^#/, "")
  }

  get hsl() {
    return this.hlsString().replace(/,/g, " ")
  }

  get hexInverted() {
    return invertHex(this.hex)
  }

  get hslObject(): HslObject {
    return rgb2hsl(this.rgb)
  }
  get hsbObject(): HsbObject {
    return rgb2hsb(this.rgb)
  }
  get rgbObject(): RgbObject {
    const [red, green, blue] = this.rgb
    return {
      red, green, blue
    }
  }
  get rgbaObject(): RgbaObject {
    const [red, green, blue] = this.rgb
    return {
      red, green, blue, alpha: this.alpha
    }
  }

  /*-------------------------------
   * ************METHODS************
   * ---------------------------- -*/

  getContrast(threshold?: number) {
    return new ColorConverter(colorContrast(this.hex, threshold)) //Returns #000000 | #ffffff;
  }


  setColor(color: string) {
    const parsed = parse(color)
    if (!parsed) return null
    if (parsed.type === "rgb") {
      return this._setFromRGB([...parsed.values, parsed.alpha])
    }
    return this._setFromHSL([...parsed.values, parsed.alpha])
  }

  tint(weight?: number, w = defaultNumberParam(weight, 50)) {
    return new ColorConverter(
      `rgb(${mix("#fff", this.rgbString(), w).rgba})`,
      this.alpha,
      "tint",
      w
    )
  }

  shade(weight?: number, w = defaultNumberParam(weight, 50)) {
    return new ColorConverter(
      `rgb(${mix("#000", this.rgbString(), w).rgba})`,
      this.alpha,
      "shade",
      w
    )
  }

  tints(weight?: number, w = defaultNumberParam(weight, 10)) {
    return Array.from({ length: 100 / w }, (_, i) => this.tint((i + 1) * w))
  }

  shades(weight?: number, w = defaultNumberParam(weight, 10)) {
    return Array.from({ length: 100 / w }, (_, i) => this.shade((i + 1) * w))
  }

  all(weight = 10) {
    return [
      ...this.tints(weight).reverse(),
      Object.assign(this),
      ...this.shades(weight)
    ] as ColorConverter[]
  }

  hexString() {
    return rgb2hex(this.alpha >= 1 ? this.rgb : [...this.rgb, this.alpha])
  }

  hlsString() {
    const { hue, saturation, lightness } = rgb2hsl(this.rgb)
    return hsl2string([hue, saturation, lightness])
  }

  rgbString() {
    const channels = (this.alpha >= 1
      ? this.rgb
      : [...this.rgb, this.alpha]
    ).join(", ")
    return `${this.alpha >= 1 ? "rgb" : "rgba"}(${channels})`
  }

  getBrightness() {
    return Math.round((this.rgb.reduce((a, b) => a + b) / (255 * 3)) * 100)
  }

  private _setFromRGB([r, g, b, a]: RGBAType) {
    [this.rgb, this.alpha] = [[r, g, b], a]
    return this
  }

  private _setFromHSL([h, s, l, a]: RGBAType) {
    [this.rgb, this.alpha] = [hsl2rgb([h, s, l]).map(Math.round) as RGBType, a]
    return this
  }


  toRGBA(): RGBAType {
    return [...this.rgb, this.alpha]
  }
  toColorObject() {
    return toColorObject('hex', this.hexString())
  }
}

ColorConverter.VERSION = "__VERSION__"
