function sortArrayByParity(nums: number[]): number[] {
    let rearrangeNums: number[] = [];

    for (let num of nums) {
        if (num % 2 === 0) {
            rearrangeNums.unshift(num);
        } else {
            rearrangeNums.push(num)
        }
    }
    return rearrangeNums;
};

console.log(sortArrayByParity([3,1,2,4]));