import { ColorConverter } from "../../src"
import { ERROR_NON_STRING_MSG, ERROR_STRING_MSG } from '../../src/constants'

const handleStringError = (input: any) => {
  it(`should throw error: ${ERROR_STRING_MSG} ${input}`, () =>
    expect(() => new ColorConverter(input)).toThrow(
      new RegExp(`^${ERROR_STRING_MSG} ${input}$`)
    ))
}
const handleNonStringError = (input: any) => {
  it(`should throw error: ${ERROR_NON_STRING_MSG} ${input}`, () =>
    expect(() => new ColorConverter(input)).toThrow(
      `${ERROR_NON_STRING_MSG} ${input}`
    ))
}


//ERRORS REMOVED FOR CONVENICE
describe("input / exceptions", () => {
  describe('new ColorConverter(<"undefined">)', () =>
    handleStringError("undefined"))
  describe('new ColorConverter(<"currentColor">)', () =>
    handleStringError("currentColor"))
  describe('new ColorConverter(<"inherit">)', () =>
    handleStringError("inherit"))
  describe('new ColorConverter(<"f000">)', () => handleStringError("f000"))
  describe("new ColorConverter(<0>)", () => handleNonStringError(0))
  describe("new ColorConverter(<1>)", () => handleNonStringError(1))
  describe("new ColorConverter(<1234>)", () => handleNonStringError(1234))
  describe("new ColorConverter(<true>)", () => handleNonStringError(true))
  describe("new ColorConverter(<false>)", () => handleNonStringError(false))
})
