function findMiddleIndex(nums: number[]): number {
    let result = -1;
    for (let i = 0; i < nums.length; i++) {
        let left = sumArray(nums.slice(0, i));
        let right = sumArray(nums.slice(i+1, nums.length));
        console.log(`left = ${left}, right = ${right}`);
        if (right === left) {
            result = i;
            break;
        }
    }
    return result;
};

function sumArray(nums: number[]): number {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}

console.log(findMiddleIndex([2,3,-1,8,4]));