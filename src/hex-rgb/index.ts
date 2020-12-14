import { RGBAType, HexRgbOptions, RgbaObject } from "../types"
const hexCharacters = "a-f\\d"
const match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`
const match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`
const nonHexChars = new RegExp(`[^#${hexCharacters}]`, "gi")
const validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, "i")



function errorFallback(format: 'array' | 'css' | 'object') {
  const red = 50
  const green = 50
  const blue = 50
  const alpha = 1
  if (format === "array") {
    return [red, green, blue, alpha] as RGBAType
  }

  if (format === "css") {
    const alphaString =
      alpha === 1 ? "" : ` / ${Number((alpha * 100).toFixed(2))}%`
    return `rgb(${red} ${green} ${blue}${alphaString})`
  }

  return { red, green, blue, alpha }
}

export function hex2Rgb(hex: string): RgbaObject
export function hex2Rgb(
  hex: string,
  options: HexRgbOptions & { format: "object" }
): RgbaObject
export function hex2Rgb(
  hex: string,
  options: HexRgbOptions & { format: "array" }
): RGBAType
export function hex2Rgb(
  hex: string,
  options: HexRgbOptions & { format: "css" }
): string
export function hex2Rgb(hex: string, options: HexRgbOptions = {}) {
  if (
    typeof hex !== "string" ||
    nonHexChars.test(hex) ||
    !validHexSize.test(hex)
  ) {
    // return errorFallback(options.format || 'object')
    throw new TypeError("Expected a valid hex string")
  }

  hex = hex.replace(/^#/, "")
  let alpha = 1

  if (hex.length === 8) {
    alpha = Number.parseInt(hex.slice(6, 8), 16) / 255
    hex = hex.slice(0, 6)
  }

  if (hex.length === 4) {
    alpha = Number.parseInt(hex.slice(3, 4).repeat(2), 16) / 255
    hex = hex.slice(0, 3)
  }

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }

  const number = Number.parseInt(hex, 16)
  const red = number >> 16
  const green = (number >> 8) & 255
  const blue = number & 255

  if (options.format === "array") {
    return [red, green, blue, alpha] as RGBAType
  }

  if (options.format === "css") {
    const alphaString =
      alpha === 1 ? "" : ` / ${Number((alpha * 100).toFixed(2))}%`
    return `rgb(${red} ${green} ${blue}${alphaString})`
  }

  return { red, green, blue, alpha }
}
