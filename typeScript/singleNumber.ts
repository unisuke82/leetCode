function singleNumber(nums: number[]): number {
    let appear: number[] = []
    nums.forEach((val1, idx) => {
        if (appear.includes(val1)) {
            appear = appear.filter((val2) => {
                return val1 !== val2
            })
        } else {
            appear.push(val1)
        }
    })
    return appear[0];
}

console.log(singleNumber([1]))