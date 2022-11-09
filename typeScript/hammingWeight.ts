function hammingWeight(n: number): number {
    const oneArray = n.toString(2).split('').filter((val) => {
        return val === '1';
    })

    return oneArray.length;
};

console.log(hammingWeight(1011))