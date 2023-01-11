function shuffle(nums: number[], n: number): number[] {
    let shuffled: number[] = [];

    // const left: number[] = nums.slice(0, n);
    // const right: number[] = nums.slice(n, nums.length);
    //
    // for (let i = 0; i < n; i++) {
    //     shuffled.push(left[i], right[i]);
    // }

    for (let i = 0; i < n; i++) {
        shuffled.push(nums[i], nums[i+n]);
    }

    return shuffled;
};

console.log(shuffle([2,5,1,3,4,7], 3));