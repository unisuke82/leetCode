function findDuplicate(nums: number[]): number {
    const numsNoDuplicate = [...new Set(nums)];
    for (let i = 0; i < numsNoDuplicate.length; i++) {
        console.log(`nums: ${nums[i]}, numsNoDuplicate: ${numsNoDuplicate[i]}`)
        if (nums[i] !== numsNoDuplicate[i]) {
            return nums[i]
        }
    }
    return nums.slice(-1)[0];
};

console.log(findDuplicate([3,1,3,4,2]))