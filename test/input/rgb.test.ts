import { ColorConverter } from "../../src";

const isEqual = (what: any, isEqualTo: any) => {
  expect(what).toEqual(isEqualTo);
};

describe("input RGB", () => {
  it('new ColorConverter("rgb(255, 0, 0)")', () => {
    const color = new ColorConverter("rgb(255, 0, 0)");
    isEqual(color.rgb, [255, 0, 0]);
    isEqual(color.alpha, 1);
    isEqual(color.hexString(), "#ff0000");
  });

  it('new ColorConverter("rgb(100%, 0%, 0%)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(100%, 0%, 0%)");
    isEqual(hex, "ff0000");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 1);
  });

  it('new ColorConverter("rgb(200%, 0%, 0%)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(200%, 0%, 0%)");
    isEqual(hex, "ff0000");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 1);
  });

  it('new ColorConverter("rgb(100%, -10%, 0%)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(100%, -10%, 0%)");
    isEqual(hex, "ff0000");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 1);
  });

  it('new ColorConverter("rgb(100%, 0%, -10%)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(100%, 0%, -10%)");
    isEqual(hex, "ff0000");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 1);
  });

  it('new ColorConverter("rgb(100%, 101%, 0%)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(100%, 101%, 0%)");
    isEqual(hex, "ffff00");
    isEqual(rgb, [255, 255, 0]);
    isEqual(alpha, 1);
  });

  it('new ColorConverter("rgb(100%, 0%, 200%)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(100%, 0%, 200%)");
    isEqual(hex, "ff00ff");
    isEqual(rgb, [255, 0, 255]);
    isEqual(alpha, 1);
  });

  it('new ColorConverter("rgb(500, 0, 0)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(500, 0, 0)");
    isEqual(hex, "ff0000");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 1);
  });

  it('new ColorConverter("rgb(255, 500, 0)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(255, 500, 0)");
    isEqual(hex, "ffff00");
    isEqual(rgb, [255, 255, 0]);
    isEqual(alpha, 1);
  });

  it('new ColorConverter("rgb(255, 0, 500)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(255, 0, 500)");
    isEqual(hex, "ff00ff");
    isEqual(rgb, [255, 0, 255]);
    isEqual(alpha, 1);
  });

  it('new ColorConverter("rgb(-255, 0, 500)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(-255, 0, 500)");
    isEqual(hex, "0000ff");
    isEqual(rgb, [0, 0, 255]);
    isEqual(alpha, 1);
  });

  it('new ColorConverter("rgb(0, -2, 500)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(0, -2, 500)");
    isEqual(hex, "0000ff");
    isEqual(rgb, [0, 0, 255]);
    isEqual(alpha, 1);
  });

  it('new ColorConverter("rgb(255, 0, -500)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(255, 0, -500)");
    isEqual(hex, "ff0000");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 1);
  });

  it('new ColorConverter("rgba(255, 0, 0, 0.5)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgba(255, 0, 0, 0.5)");
    isEqual(hex, "ff000080");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 0.5);
  });

  it('new ColorConverter("rgba(255, 0, 0, 50%)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgba(255, 0, 0, 50%)");
    isEqual(hex, "ff000080");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 0.5);
  });

  it('new ColorConverter("rgba(100%, 0%, 0%, 50%)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgba(100%, 0%, 0%, 50%)");
    isEqual(hex, "ff000080");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 0.5);
  });

  it('new ColorConverter("rgba(100%, 0%, 0%, 0.5)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgba(100%, 0%, 0%, 0.5)");
    isEqual(hex, "ff000080");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 0.5);
  });

  it('new ColorConverter("rgb(255 0 0)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(255 0 0)");
    isEqual(hex, "ff0000");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 1);
  });

  it('new ColorConverter("rgb(255 0 0 / 100%)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(255 0 0 / 100%)");
    isEqual(hex, "ff0000");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 1);
  });

  it('new ColorConverter("rgb(255 0 0 / 50%)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(255 0 0 / 50%)");
    isEqual(hex, "ff000080");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 0.5);
  });

  it('new ColorConverter("rgb(255 0 0 / 0%)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(255 0 0 / 0%)");
    isEqual(hex, "ff000000");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 0);
  });

  it('new ColorConverter("rgb(255 0 0 / 0)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(255 0 0 / 0)");
    isEqual(hex, "ff000000");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 0);
  });

  it('new ColorConverter("rgb(255 0 0 / 0.5)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(255 0 0 / 0.5)");
    isEqual(hex, "ff000080");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 0.5);
  });

  it('new ColorConverter("rgb(255 0 0 / 1)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(255 0 0 / 1)");
    isEqual(hex, "ff0000");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 1);
  });

  it('new ColorConverter("rgb(100% 0% 0% / 100%)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(100% 0% 0% / 100%)");
    isEqual(hex, "ff0000");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 1);
  });

  it('new ColorConverter("rgb(100% 0% 0% / 50%)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(100% 0% 0% / 50%)");
    isEqual(hex, "ff000080");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 0.5);
  });

  it('new ColorConverter("rgb(100% 0% 0% / 1)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(100% 0% 0% / 1)");
    isEqual(hex, "ff0000");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 1);
  });

  it('new ColorConverter("rgb(100% 0% 0% / 0.5)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(100% 0% 0% / 0.5)");
    isEqual(hex, "ff000080");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 0.5);
  });

  it('new ColorConverter("rgb(100% 0% 0% / 0)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(100% 0% 0% / 0)");
    isEqual(hex, "ff000000");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 0);
  });

  it('new ColorConverter("rgb(200% 0% 0% / 0)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(200% 0% 0% / 0)");
    isEqual(hex, "ff000000");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 0);
  });

  it('new ColorConverter("rgb(200% 200% 0% / 0.5)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(200% 200% 0% / 0.5)");
    isEqual(hex, "ffff0080");
    isEqual(rgb, [255, 255, 0]);
    isEqual(alpha, 0.5);
  });

  it('new ColorConverter("rgb(100% 0% 101% / 1)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgb(100% 0% 101% / 1)");
    isEqual(hex, "ff00ff");
    isEqual(rgb, [255, 0, 255]);
    isEqual(alpha, 1);
  });

  it('new ColorConverter("rgba(255 0 0 / 50%)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgba(255 0 0  / 50%)");
    isEqual(hex, "ff000080");
    isEqual(rgb, [255, 0, 0]);
    isEqual(alpha, 0.5);
  });

  it('new ColorConverter("rgba(255 500 0 / 25%)")', () => {
    const { hex, rgb, alpha } = new ColorConverter("rgba(255 500 0  / 25%)");
    isEqual(hex, "ffff0040");
    isEqual(rgb, [255, 255, 0]);
    isEqual(alpha, 0.25);
  });
});
