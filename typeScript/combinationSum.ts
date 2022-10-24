function combinationSum(candidates: number[], target: number): number[][] {
    const candidateDuplication:number[] = []
    candidates.forEach(val => {
        for (let i = 0; i <= target / val - 1; i++) {
            candidateDuplication.push(val)
        }
    })
    console.log(candidateDuplication)

    for (let i = 0; i <= candidateDuplication.length; i++) {
        
    }
    return [[]];
}

combinationSum([2, 3, 6, 7], 7);
export default combinationSum;