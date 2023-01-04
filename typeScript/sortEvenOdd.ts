function sortEvenOdd(nums: number[]): number[] {
    let numsOdd = nums.filter((val, index) => index % 2 === 1).sort((a, b) => b - a);
    let numsEven = nums.filter((val, index) => index % 2 === 0).sort((a, b) => a - b);

    console.log(`numsOdd = ${numsOdd}, numsEven = ${numsEven}`);

    let rearrangeNums = [];

    for (let i = 0; i < Math.max(numsOdd.length, numsEven.length); i++) {
        if (numsEven[i]) rearrangeNums.push(numsEven[i]);
        if (numsOdd[i]) rearrangeNums.push(numsOdd[i]);
    }

    return rearrangeNums;
};

console.log(sortEvenOdd([36,45,32,31,15,41,9,46,36,6,15,16,33,26,27,31,44,34]))