function rearrangeArray(nums: number[]): number[] {
    const result = [];
    for (let i = 0; i < nums.length; i++) {

    }



    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0 && nums[i] < 0) {
            for (let j = i; j < nums.length; j++) {
                if (0 <= nums[j]) {
                    let tmp = nums[j];
                    nums.splice( j, 1 );
                    nums.splice(i, 0, tmp)
                    break;
                }
            }
        } else if (i % 2 === 1 && 0 <= nums[i]) {
            for (let j = i; j < nums.length; j++) {
                if (nums[j] < 0) {
                    let tmp = nums[j];
                    nums.splice( j, 1 );
                    nums.splice(i, 0, tmp)
                    break;
                }
            }
        }
    }
    return nums;
};

console.log(rearrangeArray([28,-41,22,-8,-37,46,35,-9,18,-6,19,-26,-37,-10,-9,15,14,31]))
console.log(rearrangeArray([-1, 1]))

/*
[3,1,-2,-5,-2,-10,4,3]
3みる -> OK
1みる -> -2があるな　交換
1みる -> OK
-5みる -> OK
-2みる -> 4があるな　4削除して-2の後ろに4挿入


arr[0]正の値 -> OK
arr[1]負の値 -> NG -> swap arr[1+1] -> [3,-2, 1,-5,2,-4]

*/