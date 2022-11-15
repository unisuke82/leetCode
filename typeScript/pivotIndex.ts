function pivotIndex(nums: number[]): number {
    let i;
    for (i = 0; i < nums.length; i++) {
        let left = 0;
        let right = 0;

        for (let j = 0; j < i; j++) {
            left += nums[j];
        }

        for (let j = i + 1; j < nums.length; j++) {
            right += nums[j];
        }

        console.log(`i = ${i}, left = ${left}, right = ${right}`)
        if (right === left) break;
        if (i === nums.length - 1 && right !== left) {
            i = -1;
            break;
        }
    }

    return i;
};

console.log(pivotIndex([2,1,-1]));