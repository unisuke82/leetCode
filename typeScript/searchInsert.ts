function searchInsert(nums: number[], target: number): number {
    let start: number = 0;
    let end: number = nums.length - 1;
    let mid: number = Math.floor((end - start) / 2);

    while(start < end) {
        let mid = Math.floor((end - start) / 2)
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] <= target) {
            start = mid + 1
        } else {
            end = mid
        }
        console.log(`start ${start} end ${end} mid ${mid}`)
    }
    //console.log(`start ${start} end ${end} mid ${mid}`)
    return mid;
};