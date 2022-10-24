function maxSubArray(nums: number[]): number {
    let maxSubArraySum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            let subArraySum = 0;
            nums.slice(i, j).forEach((val) => {
                subArraySum += val;
            })

            if (maxSubArraySum < subArraySum) maxSubArraySum = subArraySum
        }
    }
    return maxSubArraySum
};

console.log('return ' + maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

/*
[-2,1,-3,4,-1,2,1,-5,4]

-2
-2 1 = -1
*/