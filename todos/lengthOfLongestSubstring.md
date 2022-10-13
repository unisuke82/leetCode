# todo
- [ ] longestSubstring
  - [ ] 一つの文字の繰り返しからなる文字列を受け取ったときその文字を返すこと
    - [ ] 'aaa'を受け取ったとき'a'を返す
    - [ ] 'bbbbbb'を受け取ったとき'b'を返す
  - [ ] 一つの単語の繰り返しからなる文字列を受け取ったときにその単語を返すこと
    - [ ] 'abcabc'を受け取ったとき'abcを返す
    - [ ] 'sdfgsdfgsdfgsdfg'を受け取ったとき'sdfg'を返す

# 整理
Given a string s, find the length of the longest substring without repeating characters.

文字列 s が与えられたとき、文字の繰り返しのない最長の部分文字列の長さを求めよ。

"abcabcbb" -> 'abc' length 3
"bbbbb" -> 'b' length 1
"pwwkew" -> 'wke' length 3

0,2 b      
0,3 bb
0,4 bbb
0,5 bbbb
0,6 bbbbb