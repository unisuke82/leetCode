function canConstruct(ransomNote: string, magazine: string): boolean {
    for (let i = 0; i < magazine.length; i++) {
        let j = 0
        for (j = 0; j < ransomNote.length; j++) {
            if (magazine[i] === ransomNote[j]) {
                break;
            }
        }
        ransomNote = ransomNote.replace(ransomNote[j], '');
        if (ransomNote.length === 0) return true;
    }
    return false;
};

console.log(canConstruct("aa", "aab"));