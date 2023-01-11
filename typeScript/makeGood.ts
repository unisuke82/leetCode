function makeGood(s: string): string {
    while (1) {
        let isGood = true;
        for (let i = 0; i < s.length - 1; i++) {
            console.log(`s[${i}] = ${s[i]}, s[${i+1}] = ${s[i+1]}`);
            if (s[i].toLowerCase() === s[i] && s[i].toUpperCase() === s[i+1] ||
                s[i+1].toLowerCase() === s[i+1] && s[i] === s[i+1].toUpperCase()) {
                console.log(`i = ${i}`)
                isGood = false
                s = s.substring(0, i) + s.substring(i+2, s.length);
            }
        }
        if (isGood) break;
    }
    return s;
};

console.log(makeGood("kkdsFuqUfSDKK"));