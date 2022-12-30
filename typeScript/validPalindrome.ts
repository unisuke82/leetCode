function validPalindrome(s: string): boolean {
    if (isPalindrome(s)) return true;
    for (let i = 0; i <= s.length; i++) {
        const tmpS = s.slice(0, i) + s.slice(i + 1, s.length)
        if (isPalindrome(tmpS)) return true;
    }
    return false;
};

function isPalindrome(s: string): boolean {
    let result = true
    for (let i: number = 0; i < s.length / 2; i++) {
        result = result && s[i] === s[s.length - 1 - i];
    }

    return result
}

console.log(validPalindrome('abca'));