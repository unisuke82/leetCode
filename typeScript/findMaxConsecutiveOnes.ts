function findMaxConsecutiveOnes(nums: number[]): number {
    let onesCount =  0;
    let maxOnesCount = 0;

    for (let num of nums) {
        if (num === 1) {
            onesCount++;
        }

        if (num === 0) {
            if (maxOnesCount < onesCount) {
                maxOnesCount = onesCount;
            }
            onesCount = 0;
        }
    }

    return maxOnesCount < onesCount ? onesCount : maxOnesCount;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));