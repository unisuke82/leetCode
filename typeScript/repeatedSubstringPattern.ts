function repeatedSubstringPattern(s: string): boolean {
    for (let i = 1; i <= s.length / 2; i++) {
        if (s.split(s.slice(0, i)).join('') === '') return true;
    }
    return false;
};

console.log(repeatedSubstringPattern("abcabcabcabc"))