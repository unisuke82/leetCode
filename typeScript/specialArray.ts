function specialArray(nums: number[]): number {
    for (let x = 0; x <= nums.length; x++) {
        let count = 0;

        for (let i = 0; i < nums.length; i++) {
            if (x <= nums[i]) count++
        }

        if (x === count) return x;
    }
    return -1;
};

console.log(specialArray([0,4,3,0,4]));