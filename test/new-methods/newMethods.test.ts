import { ColorConverter } from "../../src"


const color = new ColorConverter("red")

describe("New Methods", () => {
    describe('toRGBA', () => {
        it('returns the proper values as array', () => {
            const redRGB = color.toRGBA()
            expect(Array.isArray(redRGB)).toBeTruthy()
            const [red, green, blue, alpha] = redRGB
            expect(red).toBe(255)
            expect(green).toBe(0)
            expect(blue).toBe(0)
            expect(alpha).toBe(1)

        })
    })
    describe("toColorObject", () => {
        it('returns the proper color object', () => {
            const redObject = color.toColorObject()
            expect(redObject.hex).toBe('#ff0000')
            expect(redObject.rgb.red).toBe(255)
            expect(redObject.rgb.green).toBe(0)
            expect(redObject.rgb.blue).toBe(0)
            expect(redObject.hsb.hue).toBe(0)
            expect(redObject.hsb.saturation).toBe(100)
            expect(redObject.hsb.brightness).toBe(100)
            expect(redObject.hsl.hue).toBe(0)
            expect(redObject.hsl.saturation).toBe(100)
            expect(redObject.hsl.lightness).toBe(50)
        })
    })
})