/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let countZeros = 0;

    let movedZeros = nums.filter((val) => {
        if (val === 0) {
            countZeros++;
        }

        return val !== 0
    })

    for (let i = 1; i <= countZeros; i++) {
        movedZeros.push(0)
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = movedZeros[i]
    }
};

let nums = [0,1,0,3,12]
moveZeroes(nums)
console.log(nums)