function maximum69Number (num: number): number {
    let numArr = num.toString().split('');
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] === '6') {
            numArr[i] = '9'
            break;
        }
    }
    console.log(numArr)
    return Number(numArr.join(''));
};

console.log(maximum69Number(9999));