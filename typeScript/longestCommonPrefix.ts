function longestCommonPrefix(strs: string[]): string {
    let longestCommonPrefix: string = strs[0];
    for (let j = 1; j < strs.length; j++) {
        let longestCommonPrefix_tmp = ''
        for (let i = 0; i <= strs[j].length; i++) {
            if(strs[j].substring(0,i) === longestCommonPrefix.substring(0,i)) {
                longestCommonPrefix_tmp = strs[j].substring(0,i)
            }
        }
        longestCommonPrefix = longestCommonPrefix_tmp
    }
    return longestCommonPrefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));