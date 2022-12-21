function bestHand(ranks: number[], suits: string[]): string {
    if (Array.from(new Set(suits)).length === 1) {
        return "Flush"
    }

    let rankCount: {[rank: number]: number} = {};
    for (let rank of ranks) {
        if (rank in rankCount) {
            rankCount[rank]++;
        } else {
            rankCount[rank] = 1;
        }
    }

    let frequentRank = Object.values(rankCount).sort((a, b) => {return b-a;})[0];

    if (3 <= frequentRank) {
        return "Three of a Kind"
    } else if (frequentRank === 2) {
        return "Pair"
    }

    return "High Card"
};

console.log(bestHand([13,2,3,1,9], ["a","a","a","a","a"]))
console.log(bestHand([4,4,2,4,4], ["d","a","a","b","c"]))