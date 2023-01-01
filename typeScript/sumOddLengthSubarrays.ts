function sumOddLengthSubarrays(arr: number[]): number {
    let sum = 0;

    for (let i = 0; i <= arr.length; i++) {
        if (i % 2 === 1) {
            console.log(`i = ${i}`)
            for (let j = 0; j < arr.length; j++) {
                console.log(`j = ${j}`)
                for (let k = 0; k < i; k++) {
                    if (arr[j+i-1]) {
                        console.log(arr[j+k]);
                        sum += arr[j+k];
                    } else {
                        break;
                    }
                }
            }
        }
    }

    return sum
};

console.log(sumOddLengthSubarrays([10, 11, 12]));

/*
[1,4,2,5,3]

i = 1
1
4
2
5
3

i = 3
1
4
2
4
2
5
2
5
3

i = 5
1
4
2
5
3
*/