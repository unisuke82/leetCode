function isSubsequence(s: string, t: string): boolean {
    let subsequenceIndex = 0;
    for (let i = 0; i < t.length; i++) {
        if (s[subsequenceIndex] === t[i]) {
            subsequenceIndex++;
        }
    }
    return subsequenceIndex === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"))