function findRestaurant(list1: string[], list2: string[]): string[] {
    let commonStrings:string[] = [];
    let minIndexSum = list1.length + list2.length;

    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                console.log(`i = ${i}, j = ${j}, list1[i] = ${list1[i]}, list2[j] = ${list2[j]}`)
                if (i + j < minIndexSum) {
                    commonStrings = [];
                    commonStrings.push(list1[i]);
                    minIndexSum = i + j;
                } else if (i + j === minIndexSum) {
                    commonStrings.push(list1[i]);
                    minIndexSum = i + j;
                }
            }
        }
    }

    return commonStrings
};

console.log(findRestaurant(["happy","sad","good"], ["sad","happy","good"]))