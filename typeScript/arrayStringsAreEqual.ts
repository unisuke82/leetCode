function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    const word1Str = word1.join('');
    const word2Str = word2.join('');

    return word1Str === word2Str
};

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]))