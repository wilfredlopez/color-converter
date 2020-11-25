import { ColorConverter } from "../../src";
describe("methods / getBrightness", () => {
  const color = new ColorConverter("#00ffff");

  it("should return brightness", () => {
    expect(color.getBrightness()).toBe(67);
  });
});
