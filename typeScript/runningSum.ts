function runningSum(nums: number[]): number[] {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = 0; j <= i; j++) {
            sum += nums[j];
        }
        result.push(sum);
    }

    return result;
};

console.log(runningSum([3,1,2,10,1]))