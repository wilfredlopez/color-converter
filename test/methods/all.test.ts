import { ColorConverter } from "../../src";
const { round } = Math;

const defaultWeight = (w?: any) => {
  it(`${w} should default to 10% weight`, () => {
    const { length } = new ColorConverter("hsl(0 100% 50%)").all(w);
    expect(length).toBe(21);
  });
};

describe("methods / all", () => {
  defaultWeight();
  defaultWeight("");
  defaultWeight("foo");
  defaultWeight(NaN);
  defaultWeight(null);
  defaultWeight(undefined); // eslint-disable-line no-undefined

  const color = new ColorConverter("#00ffff");

  describe("default weight 10", () => {
    const all = color.all();
    const { length } = all;

    it("should get all", () => {
      const {
        0: first,
        [round(length / 2) - 1]: middle,
        [length - 1]: last
      } = all;

      expect(length).toBe(21);

      let { hex, rgb, alpha, type, weight } = first;
      expect(hex).toBe("ffffff");
      expect(rgb).toEqual([255, 255, 255]);
      expect(alpha).toEqual(1);
      expect(type).toEqual("tint");
      expect(weight).toEqual(100);
      expect(first.hexString()).toEqual("#ffffff");
      expect(first.rgbString()).toEqual("rgb(255, 255, 255)");

      ({ hex, rgb, alpha, type, weight } = middle);
      expect(hex).toBe("00ffff");
      expect(rgb).toEqual([0, 255, 255]);
      expect(alpha).toEqual(1);
      expect(type).toEqual("base");
      expect(weight).toEqual(0);
      expect(middle.hexString()).toEqual("#00ffff");
      expect(middle.rgbString()).toEqual("rgb(0, 255, 255)");

      ({ hex, rgb, alpha, type, weight } = last);
      expect(hex).toBe("000000");
      expect(rgb).toEqual([0, 0, 0]);
      expect(alpha).toEqual(1);
      expect(type).toEqual("shade");
      expect(weight).toEqual(100);
      expect(last.hexString()).toEqual("#000000");
      expect(last.rgbString()).toEqual("rgb(0, 0, 0)");
    });

    it('tints should be of type "tint"', () => {
      const start = 0;
      const end = round(length / 2 - 1);
      for (let i = start; i < end; i++) expect(all[i].type).toEqual("tint");
    });

    it('base color should be of type "base"', () => {
      // get the base color, located in the middle of the array
      const index = round(length / 2 - 1);
      expect(all[index].type).toEqual("base");
    });

    it('shades should be of type "shade"', () => {
      const start = round(length / 2);
      const end = all.length;
      for (let i = start; i < end; i++) expect(all[i].type).toBe("shade");
    });
  });
});
