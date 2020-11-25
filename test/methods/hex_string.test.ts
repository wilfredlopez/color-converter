import { ColorConverter } from "../../src";
const execTest = (input: any, output: any) =>
  it(`${input} -> ${output}`, () =>
    expect(new ColorConverter(input).hexString()).toEqual(output));

describe("methods / hexString", () => {
  const hex = "#ff0000";
  const hex0 = "#ff000000";
  const hex25 = "#ff000040";
  const hex50 = "#ff000080";
  const hex75 = "#ff0000bf";

  execTest("red", hex);

  execTest("#f00", hex);
  execTest("#f000", hex0);
  execTest("#ff000040", hex25);
  execTest("#ff000080", hex50);
  execTest("#ff0000bf", hex75);
  execTest("#f00f", hex);

  execTest("rgb(255 0 0)", hex);
  execTest("rgb(255 0 0 / 0.25)", hex25);
  execTest("rgb(255, 0, 0, 25%)", hex25);
  execTest("rgb(255 0 0 / 0.5)", hex50);
  execTest("rgba(255, 0, 0, 50%)", hex50);
  execTest("rgb(255 0 0 / 0.75)", hex75);
  execTest("rgb(255 0 0 / 75%)", hex75);

  execTest("hsl(0 100% 50%)", hex);
  execTest("hsl(0 100% 50% / 0.25)", hex25);
  execTest("hsla(0 100% 50% / 25%)", hex25);
  execTest("hsl(0deg 100% 50% / 0.5)", hex50);
  execTest("hsla(0turn, 100%, 50%, 50%)", hex50);
  execTest("hsl(0rad 100% 50% / 0.75)", hex75);
  execTest("hsl(0 100% 50% / 75%)", hex75);
});
