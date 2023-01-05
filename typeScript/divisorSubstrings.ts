function divisorSubstrings(num: number, k: number): number {
    let count = 0;

    for (let i = 0; i < num.toString().length - k + 1; i++) {
        console.log(num.toString().substring(i, i+k));
        if (num % Number(num.toString().substring(i, i+k)) === 0) count++;
    }

    return count;
};

console.log(divisorSubstrings(430043, 2));