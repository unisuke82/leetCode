export function lengthOfLongestSubstring(s: string): number {
    return longestSubstring(s).length
};

export function longestSubstring(s: string): string {
    let longestSubstring = '';
    for (let i = 0; i <= s.length; i++) {
        console.log('sub: '+s.substring(0, i));
        console.log('s[i]: '+s[i]);
        if (i === 0) {
            longestSubstring = s[0];
        }
        if (!s.substring(0, i).includes(s[i])) {
            longestSubstring = s.substring(0, i);
        }
    }
    return longestSubstring;
}