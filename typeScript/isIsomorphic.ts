function isIsomorphic(s: string, t: string): boolean {
    let conversionDist: {[key: string]:string} = {}

    if (s.length !== t.length) return false;

    let sArr = s.split('');
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in conversionDist)) {
            if (Object.values(conversionDist).includes(t[i])) {
                return false;
            }
            conversionDist[sArr[i]] = t[i];
        }
        console.log(conversionDist)
        console.log(`s[i]: ${s[i]}, t[i]: ${t[i]},`)
        sArr[i] = conversionDist[s[i]];
        console.log(sArr)
    }

    return sArr.join('') === t;
};

console.log(isIsomorphic("badc", "baba"));