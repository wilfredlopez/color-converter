import { ColorConverter } from "../../src";
const ERROR_STRING_MSG = "Unable to parse color from string:";
const ERROR_NON_STRING_MSG = "Input should be a string:";

const handleStringError = (input: any) => {
  it(`should throw error: ${ERROR_STRING_MSG} ${input}`, () =>
    expect(() => new ColorConverter(input)).toThrow(
      new RegExp(`^${ERROR_STRING_MSG} ${input}$`)
    ));
};
const handleNonStringError = (input: any) => {
  it(`should throw error: ${ERROR_NON_STRING_MSG} ${input}`, () =>
    expect(() => new ColorConverter(input)).toThrow(
      `${ERROR_NON_STRING_MSG} ${input}`
    ));
};

describe("input / exceptions", () => {
  describe('new ColorConverter(<"undefined">)', () =>
    handleStringError("undefined"));
  describe('new ColorConverter(<"currentColor">)', () =>
    handleStringError("currentColor"));
  describe('new ColorConverter(<"inherit">)', () =>
    handleStringError("inherit"));
  describe('new ColorConverter(<"f000">)', () => handleStringError("f000"));
  describe("new ColorConverter(<0>)", () => handleNonStringError(0));
  describe("new ColorConverter(<1>)", () => handleNonStringError(1));
  describe("new ColorConverter(<1234>)", () => handleNonStringError(1234));
  describe("new ColorConverter(<true>)", () => handleNonStringError(true));
  describe("new ColorConverter(<false>)", () => handleNonStringError(false));
  // describe("new ColorConverter(<0xFFF>)", () =>
  //   handleNonStringError(0xffffff));
});
