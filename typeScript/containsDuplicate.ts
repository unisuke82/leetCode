function containsDuplicate(nums: number[]): boolean {
    const numsSet = new Set(nums)
    return nums.length !== numsSet.size
};

console.log(containsDuplicate([1,2,3,4]))