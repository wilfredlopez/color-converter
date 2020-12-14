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
})