function uniquePaths(m: number, n: number): number {
    return multiplicationConsecutiveNums(m+n-2, m)/multiplicationConsecutiveNums(n-1, 1)
};

function multiplicationConsecutiveNums(start: number, end: number): number {
    let result = 1
    for (let i = start; end <= i; i--) {
        result *= i;
    }
    return result
}

console.log(uniquePaths(3, 2))
console.log(multiplicationConsecutiveNums(7, 1))

/*
3, 7 -> 3-1回下に動いて7-1回下に動く
組み合わせは 8C2 8*7/2*1 8C6 8*7*6*5*4*3/6*5*4*3*2*1

3, 2 -> 3-1回下に動いて2-1回下に動く
組み合わせは 3C2 3*2/2*1
*/