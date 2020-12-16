# ColorConverter

Get tints and shades of a CSS color and utility methods to work with colors in javascript.

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

### unpkg

```html
<!-- ReactColorPicker -->
<script src="https://unpkg.com/react-color-palette-picker@latest/build/index.umd.js"></script>
```

**Or**
From a unpkg as `ColorConverter`:

```html
<head>
  <script src="https://unpkg.com/@wilfredlopez/color-converter@latest/dist/index.umd.js"></script>
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
  rgb: RGBType // [255, 0, 0]
  alpha: number
  type: ColorConverterType
  weight: number
  get hex() string //without the #
  get hexInverted(): string
  get hsl():string
  get hslObject(): HslObject
  get hsbObject(): HsbObject
  get rgbObject(): RgbObject
  get rgbaObject(): RgbaObject
  setColor: ƒ setColor(color)
  tint: ƒ tint(weight=50)
  tints: ƒ tints(weight=10)
  shade: ƒ shade(weight=50)
  shades: ƒ shades(weight=10)
  all: ƒ all(weight=10)
  hexString: ƒ hexString() // #ffffff
  rgbString: ƒ rgbString()
  hlsString: ƒ hlsString()
  getBrightness: ƒ getBrightness()
  getContrast: ƒ getContrast(threshold?: number)
  toRGBA(): RGBAType
  toColorObject(): ColorObject
}
```

## Methods

### constructor

Throws if the color is not accepted.

- `@param {string} color` — a valid CSS color string (red, green, #fff, #000000)

- `@param {number} alpha` - between 0 and 1. defaults to 1

- `@param {ColorConverterType} type` - "shade" | "base" | "tint"

- `@param {number} weight` - defaults to 0

```ts
constructor ColorConverter(color?: string | number, alpha?: number, type?: ColorConverterType, weight?: number): ColorConverter
```

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

## Canvas Utililites (`HTMLCanvasElement`)

#### `example with React`

> Component with Canvas

```tsx
import React, { useRef, useMemo } from "react";
import {
  canvasUtils,
  ColorModels,
  ColorObject
} from "@wilfredlopez/color-converter";

const {
  getCoordinatesByHue,
  moveAt,
  getHueByCoordinates,
  changeHue
} = canvasUtils;

export interface SaturationProps {
  width: number;
  height: number;
  color: ColorObject;
  setColor: (color: ColorObject) => void;
}
// COMPONENT CONTAINING CANVAS
export const Saturation = ({
  width,
  height,
  color,
  setColor
}: SaturationProps) => {
  const paletteRef = useRef<HTMLCanvasElement>(null);

  const cursorPosition = useMemo(() => {
    const [x, y] = getCoordinatesByColor(color, width, height);

    return { x, y };
  }, [color, width, height]);

  useEffect(() => {
    const drawPalette = (): void => {
      if (paletteRef.current) {
        const ctx = paletteRef.current.getContext("2d");

        if (ctx) {
          const saturation = ctx.createLinearGradient(
            0,
            height / 2,
            width,
            height / 2
          );

          saturation.addColorStop(0, "white");
          saturation.addColorStop(1, `hsl(${color.hsb.hue}, 100%, 50%)`);

          ctx.fillStyle = saturation;
          ctx.fillRect(0, 0, width, height);

          const brightness = ctx.createLinearGradient(
            width / 2,
            0,
            width / 2,
            height
          );

          brightness.addColorStop(0, "transparent");
          brightness.addColorStop(1, "black");

          ctx.fillStyle = brightness;
          ctx.fillRect(0, 0, width, height);
        }
      }
    };

    if (paletteRef.current) drawPalette();
  }, [color.hsb.hue, width, height]);

  const moveCursor = (
    x: number,
    y: number,
    shiftX: number,
    shiftY: number
  ): void => {
    const [newX, newY] = moveAt(
      { value: x, shift: shiftX, min: 0, max: width },
      { value: y, shift: shiftY, min: 0, max: height }
    );

    const newColor = getColorByCoordinates(
      color.hsb.hue,
      newX,
      newY,
      width,
      height
    );

    setColor(newColor);
  };

  const onMouseDown = (e: React.MouseEvent): void => {
    if (paletteRef.current) {
      if (e.button !== 0) return;

      document.getSelection()?.empty();

      const {
        left: shiftX,
        top: shiftY
      } = paletteRef.current.getBoundingClientRect();

      moveCursor(e.clientX, e.clientY, shiftX, shiftY);

      const mouseMove = (e: MouseEvent): void => {
        moveCursor(e.clientX, e.clientY, shiftX, shiftY);
      };
      const mouseUp = (): void => {
        document.removeEventListener("mousemove", mouseMove, false);
        document.removeEventListener("mouseup", mouseUp, false);
      };

      document.addEventListener("mousemove", mouseMove, false);
      document.addEventListener("mouseup", mouseUp, false);
    }
  };

  return (
    <div className="saturation">
      <canvas
        ref={paletteRef}
        width={width}
        height={height}
        onMouseDown={onMouseDown}
      />
      <div
        className="saturation-cursor"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          backgroundColor: color.hex
        }}
      />
    </div>
  );
};
```

> BAR FOR SELECTING COLOR HUE

```tsx
export interface HueBarProps {
  width: number;
  color: ColorObject;
  setColor: (color: ColorObject) => void;
}
// BAR FOR SELECTING COLOR HUE
export const HueBar = ({
  width,
  color,
  setColor
}: HueBarProps): JSX.Element => {
  const hueBarRef = useRef<HTMLDivElement>(null);

  const cursorPosition = useMemo(() => {
    const x = getCoordinatesByHue(color.hsb.hue, width);

    return x;
  }, [color.hsb.hue, width]);

  const moveCursor = (x: number, shiftX: number): void => {
    const [newX] = moveAt({
      value: x,
      shift: shiftX,
      min: 0,
      max: width
    });

    const newHue = getHueByCoordinates(newX, width);

    setColor(changeHue(color, newHue));
  };

  const onMouseDown = (e: React.MouseEvent): void => {
    if (hueBarRef.current) {
      if (e.button !== 0) return;

      document.getSelection()?.empty();

      const { left: shiftX } = hueBarRef.current.getBoundingClientRect();

      moveCursor(e.clientX, shiftX);

      const mouseMove = (e: MouseEvent): void => {
        moveCursor(e.clientX, shiftX);
      };
      const mouseUp = (): void => {
        document.removeEventListener("mousemove", mouseMove, false);
        document.removeEventListener("mouseup", mouseUp, false);
      };

      document.addEventListener("mousemove", mouseMove, false);
      document.addEventListener("mouseup", mouseUp, false);
    }
  };

  return (
    <div
      className="hue-bar"
      ref={hueBarRef}
      style={{
        width: width
      }}
      onMouseDown={onMouseDown}
    >
      <div
        className="hue-bar-cursor"
        style={{
          left: cursorPosition,
          backgroundColor: `hsl(${color.hsb.hue}, 100%, 50%)`
        }}
      />
    </div>
  );
};
```

> Main Component

```tsx
export interface ColorPickerProps {
  /**
   * The width of the color picker.
   */
  width: number;
  /**
   * The height of the color picker.
   */
  height?: number;
  /**
   * Color in the `ColorObject`.
   */
  color: ColorObject;
  /**
   * The function that accepts the updated `ColorObject` as a single argument.
   */
  onChange: (color: ColorObject) => void;
}

export interface ColorPickerBodyProps {
  width: number;
}

//Main Component
export const ColorPicker = ({
  width,
  height = width,
  color,
  onChange
}: ColorPickerProps): JSX.Element => (
  <div className="color-picker">
    <Saturation
      width={width}
      height={height}
      color={color}
      setColor={onChange}
    />
    <div
      className="color-picker-body"
      style={{
        width: width + "px"
      }}
    >
      <HueBar width={width - 5} color={color} setColor={onChange} />
    </div>
  </div>
);
```

> APP Component

```tsx
import React, { useState, useEffect } from "react";
import { ColorConverter, ColorObject } from "@wilfredlopez/color-converter";
import { ColorPicker } from "./components/ColorPicker";

const DEFAULT_STYLE: React.CSSProperties = {
  width: 90,
  height: 80,
  textAlign: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column"
};

export function App() {
  const [color, setColor] = useState<ColorObject>({
    hex: "#a71f71",
    hsb: {
      hue: 323.8235294117647,
      saturation: 81.437125748503,
      brightness: 65.49019607843137
    },
    rgb: { red: 167, blue: 113, green: 31 }
  });
  const [converColor, setConvertColors] = useState(
    new ColorConverter(color.hex)
  );

  useEffect(() => {
    setConvertColors(new ColorConverter(color.hex));
  }, [color]);

  return (
    <div className="container">
      <ColorPicker
        width={400}
        color={color}
        height={250}
        onChange={e => {
          setColor(e);
        }}
      />

      <div
        style={{
          ...DEFAULT_STYLE,
          border: "1px solid",
          background: color.hex,
          color: converColor.getContrast().hexString()
        }}
      >
        {color.hex}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "1px"
        }}
      >
        {converColor.all().map(c => {
          return (
            <div
              style={{
                ...DEFAULT_STYLE,
                background: c.hexString(),
                color: c.getContrast().hexString()
              }}
            >
              {c.hexString()}
            </div>
          );
        })}
      </div>
    </div>
  );
}
```
