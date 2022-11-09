function findComplement(num: number): number {
    const binaryNum: string = num.toString(2);
    let complementNum: string = '';

    for (let char of binaryNum) {
        if (char === '0') {
            complementNum += '1'
        } else if (char === '1') {
            complementNum += '0'
        }
    }

    return parseInt(complementNum, 2);
};

console.log(findComplement(5))