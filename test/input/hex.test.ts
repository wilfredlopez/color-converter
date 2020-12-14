import { ColorConverter } from "../../src"

describe("input / hex", () => {
  it("new ColorConverter(0xFF0000)", () => {
    const color = new ColorConverter(0xff0000)
    expect(color.hex).toBe("ff0000")
    expect(color.rgb).toEqual([255, 0, 0])
    expect(color.hsl).toEqual("hsl(0 100% 50%)")
  })

  it('new ColorConverter("#00f")', () => {
    const color = new ColorConverter("#00f")
    const { hex, rgb, alpha, type, weight } = color
    expect(hex).toEqual("0000ff")
    expect(rgb).toEqual([0, 0, 255])
    expect(alpha).toEqual(1)
    expect(type).toEqual("base")
    expect(weight).toEqual(0)
    expect(color.hexString()).toEqual("#0000ff")
    expect(color.rgbString()).toEqual("rgb(0, 0, 255)")
  })

  it('new ColorConverter("#00ff")', () => {
    const color = new ColorConverter("#00ff")
    const { hex, rgb, alpha, type, weight } = color
    expect(rgb).toEqual([0, 0, 255])
    expect(hex).toEqual("0000ff")
    expect(alpha).toEqual(1)
    expect(type).toEqual("base")
    expect(weight).toEqual(0)
    expect(color.hexString()).toEqual("#0000ff")
    expect(color.rgbString()).toEqual("rgb(0, 0, 255)")
  })

  it('new ColorConverter("#00f8")', () => {
    const color = new ColorConverter("#00f8")
    expect(color.rgb).toEqual([0, 0, 255])
    expect(color.alpha).toEqual(0.5333333333333333)
    expect(color.hexString()).toEqual("#0000ff88")
  })

  it('new ColorConverter("#0000ff")', () => {
    const color = new ColorConverter("#0000ff")
    expect(color.rgb).toEqual([0, 0, 255])
    expect(color.alpha).toEqual(1)
    expect(color.hexString()).toEqual("#0000ff")
  })

  it('new ColorConverter("#0000ffff")', () => {
    const color = new ColorConverter("#0000ffff")
    expect(color.rgb).toEqual([0, 0, 255])
    expect(color.alpha).toEqual(1)
    expect(color.hexString()).toEqual("#0000ff")
  })

  it('new ColorConverter("#0000ff80")', () => {
    const color = new ColorConverter("#0000ff80")
    expect(color.rgb).toEqual([0, 0, 255])
    expect(color.alpha).toEqual(0.5019607843137255)
    expect(color.hexString()).toEqual("#0000ff80")
  })

  it('new ColorConverter("#0000ff00")', () => {
    const { rgb, alpha } = new ColorConverter("#0000ff00")
    expect(rgb).toEqual([0, 0, 255])
    expect(alpha).toEqual(0)
  })
})
