function selfDividingNumbers(left: number, right: number): number[] {
    const result: number[] = [];

    for (let i = left; i <= right; i++) {
        let isSelfDividingNumber = true;

        for (let num of i.toString()) {
            isSelfDividingNumber = isSelfDividingNumber && (i % Number(num) === 0);
            if (!isSelfDividingNumber) break;
        }

        if (isSelfDividingNumber) {
            result.push(i)
        }
    }

    return result;
};

console.log(selfDividingNumbers(1, 22))