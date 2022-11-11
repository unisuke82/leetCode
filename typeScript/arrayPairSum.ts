function arrayPairSum(nums: number[]): number {
    nums.sort((a, b) => {
        return a - b;
    })

    let maxSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 1) {
            continue;
        }
        maxSum += nums[i];
    }

    console.log(nums)
    return maxSum;
};

console.log(arrayPairSum([6,2,6,5,1,2]))