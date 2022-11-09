function addDigits(num: number): number {
    let numTmp = num

    while (10 <= numTmp) {
        let total = 0
        numTmp.toString().split('').forEach((val) => {
            total += Number(val)
        })

        numTmp = total
        console.log(numTmp)
    }

    return numTmp
};

console.log(addDigits(38))