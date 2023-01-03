function lastStoneWeight(stones: number[]): number {
    while (1 < stones.length) {
        console.log(`stones = ${stones}`)

        let largestIndex = 0
        const largest = stones.reduce((previousValue, currentValue, currentIndex) => {
            if (previousValue < currentValue) {
                largestIndex = currentIndex
                return currentValue
            }
            return previousValue
        }, -1)

        stones.splice(largestIndex, 1)

        let secondLargestIndex = 0
        const secondLargest = stones.reduce((previousValue, currentValue, currentIndex) => {
            if (previousValue < currentValue) {
                secondLargestIndex = currentIndex
                return currentValue
            }
            return previousValue
        }, -1)

        console.log(`stones = ${stones}, max = ${largest}, largestIndex = ${largestIndex}, secondLargest = ${secondLargest}, secondLargestIndex = ${secondLargestIndex}`)

        if (largest === secondLargest) {
            stones.splice(secondLargestIndex, 1);
        } else {
            stones.splice(secondLargestIndex, 1);
            stones.splice(largestIndex, 0,  largest - secondLargest);
            console.log(`1 : stones = ${stones}`)
            console.log(`2 : stones = ${stones}`)
        }
    }

    console.log(`break loop: stones = ${stones}`)
    return stones[0] ?? 0;
};

console.log(lastStoneWeight([2, 2]));