function findRelativeRanks(score: number[]): string[] {
    const rankDist: {[key: number]: string} = {
        1 : "Gold Medal",
        2 : "Silver Medal",
        3 : "Bronze Medal",
    }

    const rearrangeScore: number[] = [...score].sort((a, b) => b - a);
    console.log(rearrangeScore)

    let ranks: string[] = [];
    for (let i = 0; i < score.length; i++) {
        const rankNum = rearrangeScore.findIndex((val) => val === score[i]) + 1;
        console.log(`score[i] = ${score[i]}, rankNum = ${rankNum}`)
        ranks.push(rankNum <= 3 ? rankDist[rankNum] : rankNum.toString())
    }

    return ranks;
};

console.log(findRelativeRanks([5,4,3,2,1]));