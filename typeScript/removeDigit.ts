function removeDigit(number: string, digit: string): string {
    let result: bigint = BigInt(0);

    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            let numArr = number.split('');
            numArr.splice(i, 1);
            let subNum: bigint = BigInt(numArr.join(''));
            if (result < subNum) result = subNum
        }
    }
    return result.toString();
};

console.log(removeDigit("2998589353917872714814599237991174513476623756395992135212546127959342974628712329595771672911914471", "3"))