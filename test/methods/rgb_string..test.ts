import { ColorConverter } from "../../src";
const execTest = (input: any, output: any) =>
  it(`${input} -> ${output}`, () =>
    expect(new ColorConverter(input).rgbString()).toEqual(output));

describe("methods / rgbString", () => {
  const rgb = "rgb(255, 0, 0)";
  const rgb0 = "rgba(255, 0, 0, 0)";
  const rgb25 = "rgba(255, 0, 0, 0.25)";
  const rgb50 = "rgba(255, 0, 0, 0.5)";
  const rgb75 = "rgba(255, 0, 0, 0.75)";

  execTest("red", rgb);

  execTest("#f00", rgb);
  execTest("#f000", rgb0);
  execTest("#ff000040", "rgba(255, 0, 0, 0.25098039215686274)");
  execTest("#ff000080", "rgba(255, 0, 0, 0.5019607843137255)");
  execTest("#ff0000bf", "rgba(255, 0, 0, 0.7490196078431373)");
  execTest("#f00f", rgb);

  execTest("rgb(255 0 0)", rgb);
  execTest("rgba(255 0 0 / 1)", rgb);
  execTest("rgb(255 0 0 / 0.25)", rgb25);
  execTest("rgb(255 0 0 / 25%)", rgb25);
  execTest("rgb(255 0 0 / 0.5)", rgb50);
  execTest("rgb(255 0 0 / 50%)", rgb50);
  execTest("rgb(255 0 0 / 0.75)", rgb75);
  execTest("rgb(255 0 0 / 75%)", rgb75);

  execTest("hsl(0 100% 50%)", rgb);
  execTest("hsl(0 100% 50% / 1)", rgb);
  execTest("hsl(0, 100%, 50%, 1.0)", rgb);
  execTest("hsla(0, 100%, 50%, 0.25)", rgb25);
  execTest("hsl(0 100% 50% / 25%)", rgb25);
  execTest("hsl(0deg 100% 50% / 0.5)", rgb50);
  execTest("hsl(0turn 100% 50% / 50%)", rgb50);
  execTest("hsl(0rad 100% 50% / 0.75)", rgb75);
  execTest("hsl(0 100% 50% / 75%)", rgb75);
});
