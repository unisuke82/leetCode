import { romanToInt } from "./romanToInt";

describe('各シンボルを対応する数字に変換すること', () => {
    it.each([
        {symbol: 'I', val: 1},
        {symbol: 'V', val: 5},
        {symbol: 'X', val: 10},
        {symbol: 'L', val: 50},
        {symbol: 'C', val: 100},
        {symbol: 'D', val: 500},
        {symbol: 'M', val: 1000},
    ])('\'$symbol\'を受け取って$valを返すこと', ({symbol, val}) => {
        expect(romanToInt(symbol)).toBe(val);
    })
})

describe('引き算式を含まない文字列を対応する数字に変更すること', () => {
    it.each([
        {roman: 'III', val: 3},
        {roman: 'LVIII', val: 58},
        {roman: 'MMDII', val: 2502},
    ])('\'$roman\'を受け取って$valを返すこと', ({ roman, val }) => {
        expect(romanToInt(roman)).toBe(val);
    })
})

describe('引き算式を含む文字列を対応する文字列に変換すること', () => {
    it.each([
        {roman: 'IV', val: 4},
        {roman: 'MCMXCIV', val: 1994},
    ])('\'$roman\'を受け取って$valを返すこと', ({ roman, val }) => {
        expect(romanToInt(roman)).toBe(val);
    })
})