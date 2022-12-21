function balancedStringSplit(s: string): number {
    let count = 0;
    let tmpS = s;

    while (0 < tmpS.length) {
        let i = 1
        for (i; i <= tmpS.length; i++) {
            const substring = tmpS.substring(0, i);
            let rCount = substring.split('').filter((char) => {
                return char === 'R'
            }).length

            let lCount = substring.split('').filter((char) => {
                return char === 'L'
            }).length

            if (rCount === lCount) {
                count++;
                break;
            }
        }
        tmpS = tmpS.substring(i)
    }

    return count;
};

console.log(balancedStringSplit("RLRRLLRLRL"))