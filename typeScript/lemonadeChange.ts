function lemonadeChange(bills: number[]): boolean {
    let billCount: {[bill: number]: number} = {5: 0, 10: 0, 20: 0};
    for (let bill of bills) {
        if (bill === 5) {
            billCount[5]++
        } else if (bill === 10) {
            billCount[10]++
            billCount[5]--
        } else if (bill === 20) {
            billCount[20]++
            if (billCount[10] === 0) {
                billCount[5] -= 2
            } else {
                billCount[10]--
            }
            billCount[5]--
        }

        console.log(billCount)
        if (Object.values(billCount).findIndex((val) => val < 0) !== -1) return false;
    }

    return true;
};

console.log(lemonadeChange( [5,5,10,20,5,5,5,5,5,5,5,5,5,10,5,5,20,5,20,5]));