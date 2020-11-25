# ColorConverter

Get tints and shades of a CSS color

### Supports

- [`hexadecimal RGB/A notation`]: #RGB #RRGGBB #RGBA #RRGGBBAA
- [`hex value`] : 0xff0000
- [`RGB/A`] - CSS Color Module Level 3 and 4 "rgba(255 500 0 / 25%)" "rgb(100% 0% 101% / 1)"
- [`HSL/A`] - CSS Color Module Level 3 and 4 (number, deg, rad, turn) eg. "hsl(0, 100%, 50%)"
- [`pre-defined`]: One of the [pre-defined color keywords](https://www.w3.org/wiki/CSS/Properties/color/keywords).
- [`transparent`]: Shorthand for transparent black, rgba(0,0,0,0).

## Install

**NPM**

```sh
npm install @wilfredlopez/color-converter --save
```

or

```
yarn add @wilfredlopez/color-converter
```

**Or**
from a CDN as `ColorConverter`:

```html
<head>
  <script src="https://unpkg.com/@wilfredlopez/color-converter"></script>
</head>
<body>
  <script>
    // The class is not the default export. in order to access the class you need to use this sintax
    const color = new ColorConverter.ColorConverter("#ffffff");
    console.log(color);
    //You can also access other methods like
    ColorConverter.parse("#ffffff"); // { alpha: 1, type: "rgb", values: (3) [255, 255, 255]}
    ColorConverter.convert.rgb.hex([255, 255, 255]); //"#ffffff"
    ColorConverter.hex2Rgb("#ffffff"); // {red: 255, green: 255, blue: 255, alpha: 1}
    ColorConverter.mix("red", "green"); // {hex: "#804000", hexa: "#804000ff", rgba: [128, 64, 0, 1], hsla:  [30, 100, 25, 1]}
  </script>
</body>
```

## Usage

```js
import {ColorConverter} from '@wilfredlopez/color-converter'
const color = new ColorConverter('hsl(204deg 100% 50% / 1)')

console.log(color.tint(25))
//> { rgb: [64, 179, 255], alpha: 1, type: "tint", weight: 25, ...methods }
console.log(color.shade(12))
//> { rgb: [0, 135, 224], alpha: 1, type: "shade", weight: 12, ...methods }
console.log(color.tints(8))
//> (12) [ColorConverter...]
console.log(color.shades(23))
//> (4) [ColorConverter...]
console.log(color.all(20))
//> (11) [ColorConverter...]

// example instance
ColorConverter {
  alpha: 1
  rgb: (3) [255, 0, 0]
  type: "base"
  weight: 0
  get hex: ƒ(...)
  get hsl: ƒ(...)
  setColor: ƒ setColor(color)
  tint: ƒ tint(weight=50)
  tints: ƒ tints(weight=10)
  shade: ƒ shade(weight=50)
  shades: ƒ shades(weight=10)
  all: ƒ all(weight=10)
  hexString: ƒ hexString()
  rgbString: ƒ rgbString()
  getBrightness: ƒ getBrightness()
}
```

## Methods

### constructor(color)

Throws if the color is not accepted.

- `@param {string} color` — a valid CSS color string

### setColor(color)

Sets a new base color, returns `null` if color has not been accepted.

- `@param {string} color` - a valid CSS color string
- `@return {ColorConverter|null}`

### tint([weight=50])

Lightens the base color by mixing it with white as specified by weight.

- `@param {number} [weight=50]`
- `@return {ColorConverter}`

### shade([weight=50)

Darkens the base color by mixing it with black as specified by weight.

- `@param {number} [weight=50]`
- `@return {ColorConverter}`

### tints([weight=10])

Generates the tints of the base color as specified by weight.

- `@param {number} [weight=10]`
- `@return {Array<ColorConverter>}`

### shades([percentage=10])

Generates the shades of the base color as specified by weight.

- `@param {number} [weight=10]`
- `@return {Array<ColorConverter>}`

### all([weight=10])

Generates the tints and shades of the base color as specified by weight.

- `@param {number} [weight=10]`
- `@return {Array<ColorConverter>}`

### hexString()

Returns the color in hexadecimal RGB notation.

- `@returns {string}` @example `#000000` or `#00000080`

### rgbString()

Returns the color in rgb() functional notation.

- `@returns {string}` @example `rgb(0, 0, 0)` or `rgba(0, 0, 0, 0.5)`

### getBrightness()

Calculates the brightness of the color.

- `@return {number}` — the base-color brightness.
