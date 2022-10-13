const TenKey = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
}

export function letterCombinations(digits: string): string[] {
    let letterCombinations: string[] = [];
    for (let i = 0; i < digits.length; i++) {
        let letterCombinations_tmp = [];
        if (digits[i] in TenKey) {
            if(i === 0) {
                letterCombinations = TenKey[digits[i]]
                continue
            }
            letterCombinations.forEach((val1) => {
                TenKey[digits[i]].forEach((val2) => {
                    letterCombinations_tmp.push(val1+val2);
                })
            })
        }

        letterCombinations = letterCombinations_tmp
    }
    return letterCombinations;
};