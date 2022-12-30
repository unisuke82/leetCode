function validMountainArray(arr: number[]): boolean {
    if (arr.length < 3) return false;

    let isMountainArray = true;
    for (let i = 1; i < arr.length; i++) {
        isMountainArray = true;
        const leftArr = arr.slice(0, i + 1);
        const rightArr = arr.slice(i, arr.length);

        console.log(`left = ${leftArr}, right = ${rightArr}`)
        for (let j = 1; j < leftArr.length; j++) {
            isMountainArray = isMountainArray && leftArr[j - 1] < leftArr[j];
        }
        console.log(isMountainArray)
        for (let j = 1; j < rightArr.length; j++) {
            isMountainArray = isMountainArray && rightArr[j] < rightArr[j - 1];
        }
        console.log(isMountainArray)
    }
    return isMountainArray;
};

console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9]));