import { ColorConverter } from "../../src";

describe("input special cases: transparent", () => {
  it('new ColorConverter(<"transparent">)', () => {
    const color = new ColorConverter("transparent");
    const { hex, rgb, alpha, type, weight } = color;
    expect(rgb).toEqual([0, 0, 0]);
    expect(hex).toEqual("00000000");
    expect(alpha).toEqual(0);
    expect(type).toEqual("base");
    expect(weight).toEqual(0);
    expect(color.hexString()).toEqual("#00000000");
    expect(color.rgbString()).toEqual("rgba(0, 0, 0, 0)");
  });
});
