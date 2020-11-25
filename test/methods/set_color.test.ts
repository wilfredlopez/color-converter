import { ColorConverter } from "../../src";
const isEqual = (what: any, isEqualTo: any) => {
  expect(what).toEqual(isEqualTo);
};

const execTest = (str: string) => {
  const color = new ColorConverter("#bada55").setColor(str)!;
  let { hex, rgb, alpha, type, weight } = color;

  it(`${str}`, () => {
    isEqual(hex, "ff0000");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 1);
    isEqual(type, "base");
    isEqual(weight, 0);
    isEqual(color.hexString(), "#ff0000");
    isEqual(color.rgbString(), "rgb(255, 0, 0)");
  });

  it(`should calc 50% tint based on ${str}`, () => {
    const tint = color.tint();
    ({ hex, rgb, alpha, type, weight } = tint);
    isEqual(hex, "ff8080");
    isEqual(rgb, [255, 128, 128]);
    isEqual(alpha, 1);
    isEqual(type, "tint");
    isEqual(weight, 50);
    isEqual(tint.hexString(), "#ff8080");
    isEqual(tint.rgbString(), "rgb(255, 128, 128)");
  });

  it(`should calc 50% shade based on ${str}`, () => {
    const shade = color.shade();
    ({ hex, rgb, alpha, type, weight } = shade);
    isEqual(hex, "800000");
    isEqual(rgb, [128, 0, 0]);
    isEqual(alpha, 1);
    isEqual(type, "shade");
    isEqual(weight, 50);
    isEqual(shade.hexString(), "#800000");
    isEqual(shade.rgbString(), "rgb(128, 0, 0)");
  });
};

describe("methods / setColor", () => {
  execTest("red");
  execTest("#f00");
  execTest("rgb(255 0 0)");
  execTest("rgb(255 0 0 / 1)");
  execTest("rgba(255, 0, 0, 1)");
  execTest("rgba(255, 0, 0, 100%)");
  execTest("hsl(0 100% 50%)");
  execTest("hsl(0 100% 50% / 1.0)");
  execTest("hsl(0 100% 50% / 5.0)");
  execTest("hsl(0, 100%, 50%, 100%)");
  execTest("hsl(0, 100%, 50%, 500%)");
  execTest("hsla(0, 100%, 50%, 1)");

  it("should return null for not recognized input", () => {
    //@ts-expect-error
    isEqual(new ColorConverter("red").setColor(), null);
    //@ts-ignore
    isEqual(new ColorConverter("red").setColor(null), null);
    //@ts-ignore
    isEqual(new ColorConverter("red").setColor(undefined), null); // eslint-disable-line no-undefined
    isEqual(new ColorConverter("red").setColor("lkajsf"), null);
    isEqual(new ColorConverter("red").setColor("255 255 255"), null);
    isEqual(new ColorConverter("red").setColor("rgb()"), null);
    isEqual(new ColorConverter("red").setColor("hsl()"), null);
  });
});
