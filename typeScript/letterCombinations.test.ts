import { letterCombinations } from "./letterCombinations";

it('空文字を受け取ったときに[]を返すこと', () => {
    expect(letterCombinations('')).toEqual([])
})

describe('長さ1の文字列を受け取ったときにその数字が表しうるすべての文字を返すこと', () => {
    it('\'2\'を受け取ったときに["a", "b", "c"]を返すこと', () => {
        expect(letterCombinations('2')).toEqual(["a", "b", "c"])
    })

    it('\'6\'を受け取ったときに["m", "n", "o"]を返すこと', () => {
        expect(letterCombinations('6')).toEqual(["m", "n", "o"])
    })
})

describe('長さ2以上の文字列を受け取ったときにその数字が著しうるすべての文字を返すこと', () => {
    it('\'23\'を受け取ったとき["ad","ae","af","bd","be","bf","cd","ce","cf"]を返すこと', () => {
        expect(letterCombinations('23')).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"])
    })
})