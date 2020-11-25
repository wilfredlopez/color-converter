import { ColorConverter } from "../../src";

const setDefaultValue = (input?: any) => {
  const color = new ColorConverter(input);
  const { hex, rgb, alpha, type, weight } = color;
  it("should set default value #000", () => {
    expect(color instanceof ColorConverter).toBeTruthy();
    expect(hex).toEqual("000000");
    expect(rgb).toEqual([0, 0, 0]);
    expect(alpha).toEqual(1);
    expect(type).toEqual("base");
    expect(weight).toEqual(0);
    expect(color.hexString()).toEqual("#000000");
    expect(color.rgbString()).toEqual("rgb(0, 0, 0)");
  });
};

describe("input / use default", () => {
  describe("new ColorConverter(<empty>)", () => setDefaultValue());
  describe("new ColorConverter(<null>)", () => setDefaultValue(null));
  describe("new ColorConverter(<undefined>)", () => setDefaultValue(undefined)); // eslint-disable-line no-undefined
});
