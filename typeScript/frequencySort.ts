function frequencySort(nums: number[]): number[] {
    let frequency : {[num: number]: number} = {}

    for (let num of nums) {
        if (num in frequency) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    }

    let sorted = nums.sort((a, b) => {
        if (frequency[a] === frequency[b]) {
            return b - a;
        } else {
            return frequency[a] - frequency[b];
        }
    })
    console.log(frequency);

    return sorted;
};

console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1]));