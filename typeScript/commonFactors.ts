function commonFactors(a: number, b: number): number {
    let count = 0;

    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            count++
        }
    }

    return count;
};

console.log(commonFactors(25, 30));