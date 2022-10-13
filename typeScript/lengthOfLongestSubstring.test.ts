import { lengthOfLongestSubstring, longestSubstring } from "./lengthOfLongestSubstring";

describe('longestSubstring', () => {
    describe('一つの文字の繰り返しからなる文字列を受け取ったとき\'a\'を返すこと', () => {
        it('\'aaa\'を受け取ったとき\'a\'を返す', () => {
            expect(longestSubstring('aaa')).toBe('a')
        })

        it('\'bbbbbb\'を受け取ったとき\'b\'を返す', () => {
            expect(longestSubstring('bbbbbb')).toBe('b')
        })
    })

    describe('一つの単語の繰り返しからなる文字列を受け取ったときにその単語を返すこと', () => {
        it('\'abcabc\'を受け取ったとき\'abc\'を返す', () => {
            expect(longestSubstring('abcabc')).toBe('abc')
        })
    })
})

