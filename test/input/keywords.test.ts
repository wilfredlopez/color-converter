import { ColorConverter } from "../../src";

const execTest = (keyword: any, h: any, r: any) => {
  it(keyword, () => {
    const color = new ColorConverter(keyword);
    const { hex, rgb, alpha } = color;
    expect(hex).toBe(h);
    expect(rgb).toEqual(r);
    expect(alpha).toBe(1);
    expect(color.hexString()).toBe(`#${h}`);
  });
};

describe("keywords", () => {
  execTest("red", "ff0000", [255, 0, 0]);
  execTest("purple", "800080", [128, 0, 128]);
  execTest("fuchsia", "ff00ff", [255, 0, 255]);
  execTest("aliceblue", "f0f8ff", [240, 248, 255]);
  execTest("blanchedalmond", "ffebcd", [255, 235, 205]);
  execTest("cornflowerblue", "6495ed", [100, 149, 237]);
  execTest("fuchsia", "ff00ff", [255, 0, 255]);
  execTest("indigo", "4b0082", [75, 0, 130]);
  execTest("lightgoldenrodyellow", "fafad2", [250, 250, 210]);
  execTest("mediumslateblue", "7b68ee", [123, 104, 238]);
  execTest("springgreen", "00ff7f", [0, 255, 127]);
  execTest("tomato", "ff6347", [255, 99, 71]);
  execTest("rebeccapurple", "663399", [102, 51, 153]);
});
