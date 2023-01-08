function isMonotonic(nums: number[]): boolean {
    let isIncreasing: boolean = true;
    let isDecreasing: boolean = true;

    for (let i = 0; i < nums.length - 1; i++) {
        isIncreasing = isIncreasing && nums[i] <= nums[i+1];
        isDecreasing = isDecreasing && nums[i+1] <= nums[i];
        console.log(`nums[i] = ${nums[i]}, nums[i+1] = ${nums[i+1]}, isIncreasing = ${isIncreasing}, isDecreasing = ${isDecreasing}`)
    }

    return isIncreasing || isDecreasing;
};

console.log(isMonotonic([1,3,2]));