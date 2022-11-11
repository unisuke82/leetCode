function numJewelsInStones(jewels: string, stones: string): number {
    let jewelCount = 0;

    for (let stone of stones) {
        console.log(stone)
        if (jewels.includes(stone)) {
            jewelCount++;
        }
    }

    return jewelCount;
};

console.log(numJewelsInStones("aA", "aAAbbb"))