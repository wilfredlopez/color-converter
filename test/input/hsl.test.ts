import { ColorConverter } from "../../src";

describe("input HSL", () => {
  it('new ColorConverter("hsl(0, 100%, 50%)")', () => {
    const color = new ColorConverter("hsl(0, 100%, 50%)");
    const { hex, rgb, alpha, type, weight } = color;
    expect(hex).toEqual("ff0000");
    expect(rgb).toEqual([255, 0, 0]);
    expect(alpha).toEqual(1);
    expect(type).toEqual("base");
    expect(weight).toEqual(0);
    expect(color.hexString()).toEqual("#ff0000");
    expect(color.rgbString()).toEqual("rgb(255, 0, 0)");
  });

  it('new ColorConverter("hsl(-240, 100%, 50%)")', () => {
    const { hex, rgb } = new ColorConverter("hsl(-240, 100%, 50%)");
    expect(hex).toEqual("00ff00");
    expect(rgb).toEqual([0, 255, 0]);
  });

  it('new ColorConverter("hsl(120, -100%, 50%)")', () => {
    const { hex, rgb } = new ColorConverter("hsl(120, -100%, 50%)");
    expect(hex).toEqual("808080");
    expect(rgb).toEqual([128, 128, 128]);
  });

  it('new ColorConverter("hsl(120, 100%, -50%)")', () => {
    const { rgb, hex } = new ColorConverter("hsl(120, 100%, -50%)");
    expect(hex).toEqual("000000");
    expect(rgb).toEqual([0, 0, 0]);
  });

  it('new ColorConverter("hsl(120, 200%, 50%)")', () => {
    const { rgb, hex } = new ColorConverter("hsl(120, 200%, 50%)");
    expect(hex).toEqual("00ff00");
    expect(rgb).toEqual([0, 255, 0]);
  });

  it('new ColorConverter("hsl(120, 100%, 200%)")', () => {
    const { rgb, hex } = new ColorConverter("hsl(120, 100%, 200%)");
    expect(hex).toEqual("ffffff");
    expect(rgb).toEqual([255, 255, 255]);
  });

  // hsla --------------------------------------------
  it('new ColorConverter("hsla(0, 100%, 50%, 0.5)")', () => {
    const { rgb, hex, alpha } = new ColorConverter("hsla(0, 100%, 50%, 0.5)");
    expect(hex).toEqual("ff000080");
    expect(rgb).toEqual([255, 0, 0]);
    expect(alpha).toEqual(0.5);
  });

  it('new ColorConverter("hsla(0, 100%, 50%, 50%)")', () => {
    const { rgb, hex, alpha } = new ColorConverter("hsla(0, 100%, 50%, 50%)");
    expect(hex).toEqual("ff000080");
    expect(rgb).toEqual([255, 0, 0]);
    expect(alpha).toBe(0.5);
  });

  it('new ColorConverter("hsla(0, 100%, 50%, 0)")', () => {
    const { rgb, hex, alpha } = new ColorConverter("hsla(0, 100%, 50%, 0)");
    expect(hex).toBe("ff000000");
    expect(rgb).toEqual([255, 0, 0]);
    expect(alpha).toBe(0);
  });

  it('new ColorConverter("hsla(0, 100%, 50%, 50)")', () => {
    const { rgb, hex, alpha } = new ColorConverter("hsla(0, 100%, 50%, 50)");
    expect(hex).toBe("ff0000");
    expect(rgb).toEqual([255, 0, 0]);
    expect(alpha).toBe(1);
  });

  it('new ColorConverter("hsla(0, -100%, 50%, 1)")', () => {
    const { rgb, hex } = new ColorConverter("hsla(0, -100%, 50%, 1)");
    expect(hex).toBe("808080");
    expect(rgb).toEqual([128, 128, 128]);
  });

  it('new ColorConverter("hsla(0, 100%, -50%, 1)")', () => {
    const { rgb, hex } = new ColorConverter("hsla(0, 100%, -50%, 1)");
    expect(hex).toBe("000000");
    expect(rgb).toEqual([0, 0, 0]);
  });

  it('new ColorConverter("hsla(0, 100%, 50%, 200%)")', () => {
    const { rgb, hex } = new ColorConverter("hsla(0, 100%, 50%, 200%)");
    expect(hex).toBe("ff0000");
    expect(rgb).toEqual([255, 0, 0]);
  });

  it('new ColorConverter("hsla(0, 100%, 50%, -200%)")', () => {
    const { rgb, hex } = new ColorConverter("hsla(0, 100%, 50%, -200%)");
    expect(hex).toBe("ff000000");
    expect(rgb).toEqual([255, 0, 0]);
  });

  // hsl level 4 ----------------------------------------
  it('new ColorConverter("hsl(0deg 100% 50%)")', () => {
    const { rgb, hex } = new ColorConverter("hsl(0deg 100% 50%)");
    expect(hex).toBe("ff0000");
    expect(rgb).toEqual([255, 0, 0]);
  });

  it('new ColorConverter("hsla(0deg 100% 50%)")', () => {
    const { rgb, hex } = new ColorConverter("hsla(0deg 100% 50%)");
    expect(hex).toBe("ff0000");
    expect(rgb).toEqual([255, 0, 0]);
  });

  it('new ColorConverter("hsl(0deg -100% 50%)")', () => {
    const { rgb, hex } = new ColorConverter("hsl(0deg -100% 50%)");
    expect(hex).toBe("808080");
    expect(rgb).toEqual([128, 128, 128]);
  });

  it('new ColorConverter("hsl(0deg 100% -50%)")', () => {
    const { rgb, hex } = new ColorConverter("hsl(0deg 100% -50%)");
    expect(hex).toBe("000000");
    expect(rgb).toEqual([0, 0, 0]);
  });

  it('new ColorConverter("hsl(0deg 100% 200%)")', () => {
    const { rgb, hex } = new ColorConverter("hsl(0deg 100% 200%)");
    expect(hex).toBe("ffffff");
    expect(rgb).toEqual([255, 255, 255]);
  });

  it('new ColorConverter("hsl(0deg 100% 50% / 100%)")', () => {
    const { rgb, hex } = new ColorConverter("hsl(0deg 100% 50% / 100%)");
    expect(hex).toBe("ff0000");
    expect(rgb).toEqual([255, 0, 0]);
  });

  it('new ColorConverter("hsl(0deg 100% 50% / 1)")', () => {
    const { rgb, hex } = new ColorConverter("hsl(0deg 100% 50% / 1)");
    expect(hex).toBe("ff0000");
    expect(rgb).toEqual([255, 0, 0]);
  });

  it('new ColorConverter("hsl(0deg 100% 50% / 50%)")', () => {
    const { rgb, hex, alpha } = new ColorConverter("hsl(0deg 100% 50% / 50%)");
    expect(hex).toBe("ff000080");
    expect(rgb).toEqual([255, 0, 0]);
    expect(alpha).toBe(0.5);
  });

  it('new ColorConverter("hsl(0deg 100% 50% / 0.5)")', () => {
    const { rgb, hex, alpha } = new ColorConverter("hsl(0deg 100% 50% / 0.5)");
    expect(hex).toBe("ff000080");
    expect(rgb).toEqual([255, 0, 0]);
    expect(alpha).toBe(0.5);
  });

  it('new ColorConverter("hsla(0deg 100% 50% / 50)")', () => {
    const { rgb, hex, alpha } = new ColorConverter("hsla(0deg 100% 50% / 50)");
    expect(hex).toBe("ff0000");
    expect(rgb).toEqual([255, 0, 0]);
    expect(alpha).toBe(1);
  });

  it('new ColorConverter("hsla(0deg 100% 50% / 200%)")', () => {
    const { rgb, hex } = new ColorConverter("hsla(0deg 100% 50% / 200%)");
    expect(hex).toBe("ff0000");
    expect(rgb).toEqual([255, 0, 0]);
  });

  it('new ColorConverter("hsla(0deg 100% 50% / -200)")', () => {
    const { rgb, hex } = new ColorConverter("hsla(0deg 100% 50% / -200)");
    expect(hex).toBe("ff000000");
    expect(rgb).toEqual([255, 0, 0]);
  });
});
