import {getPercents} from './index'
import {repeatWord} from './index'
import {getMonth} from './index'

describe('test getPercents function', () => {
    it('input 30 and 200 to equal 60', () => {
        expect(getPercents(30, 200)).toBe(60)
    }),
    it('input "asda" and 200 to equal NaN', () => {
        expect(getPercents("asda", 200)).toBe(NaN)
    })
    it('input 30 and "asda" to equal NaN', () => {
        expect(getPercents(30, "asda")).toBe(NaN)
    })
})

describe('test repeatWord function', () => {
    it('input "слово" and 3 to equal "слово1, слово2, слово3, "', () => {
        expect(repeatWord("слово", 3)).toBe("слово1, слово2, слово3, ")
    }),
    it('input "слово" and "asd" to equal ""', () => {
        expect(repeatWord("слово", "asd")).toBe("")
    })
})

describe('test getMonth function', () => {
    it('input 3 to equal "март"', () => {
        expect(getMonth(3)).toBe("март")
    }),
    it('input 14 to equal "неизвестно"', () => {
        expect(getMonth(14)).toBe("неизвестно")
    }),
    it('input "asd" to equal "неизвестно"', () => {
        expect(getMonth("asd")).toBe("неизвестно")
    })
})