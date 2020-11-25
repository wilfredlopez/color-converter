//FROM DIST
import { ColorConverter } from "../../";

const pkg = require("../../package.json");

describe("version", () => {
  it("should include static prop VERSION", () =>
    expect(ColorConverter.VERSION).toBeDefined());
  it("version should be equal to pkg.version", () =>
    expect(ColorConverter.VERSION).toEqual(`v${pkg.version}`));
});
