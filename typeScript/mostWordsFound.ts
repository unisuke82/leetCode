function mostWordsFound(sentences: string[]): number {
    let mostWordsCount = 0;

    for (let sentence of sentences) {
        if (mostWordsCount < sentence.split(' ').length) {
            mostWordsCount = sentence.split(' ').length;
        }
    }

    return mostWordsCount;
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))