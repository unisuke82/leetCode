function subsets(nums: number[]): number[][] {
    let subsets: number[][] = [[]];
    nums.forEach((num) => {
        subsets.forEach((subset) => {
            subsets.push(subset.concat(num));
        })
    })

    subsets.sort((a, b) => {
        return a.length - b.length
    })
    return subsets
};

console.log(subsets([1,2,3]));

/*
[1, 2, 3]

[], [1], [2], [3], [1, 2]

[]
1を追加 [] [1]
2を追加 [] [1] [2] [1, 2]
3を追加 [] [1] [2] [1, 2] [3] [1, 3] [2, 3] [1, 2, 3]

[
*/