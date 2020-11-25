import { ColorConverter } from "../../src";
function equal(value: any, expected: any) {
  expect(value).toEqual(expected);
}

const defaultWeight = (w?: any) => {
  it(`${w} should default to 10% weight tints`, () => {
    const { length } = new ColorConverter("hsl(0 100% 50%)").tints(w);
    equal(length, 10);
  });
};

describe("methods / tints", () => {
  defaultWeight();
  defaultWeight("");
  defaultWeight("foo");
  defaultWeight(NaN);
  defaultWeight(null);
  defaultWeight(undefined); // eslint-disable-line no-undefined

  it("should calculate tints", () => {
    const tints = new ColorConverter("#00ffff").tints();
    equal(tints.length, 10);
    equal(tints[0].hexString(), "#19ffff");
    equal(tints[2].hexString(), "#4dffff");
    equal(tints[4].hexString(), "#80ffff");
    equal(tints[6].hexString(), "#b3ffff");
    equal(tints[8].hexString(), "#e6ffff");
    equal(tints[9].hexString(), "#ffffff");
  });

  it("should include tints weight", () => {
    const tints = new ColorConverter("#00ffff").tints();
    equal(tints[0].weight, 10);
    equal(tints[2].weight, 30);
    equal(tints[4].weight, 50);
    equal(tints[6].weight, 70);
    equal(tints[8].weight, 90);
    equal(tints[9].weight, 100);
  });
});
