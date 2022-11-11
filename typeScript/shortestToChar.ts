function shortestToChar(s: string, c: string): number[] {
    const appearIndex: number[] = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            appearIndex.push(i);
        }
    }

    const distances:number[] = []
    for (let i = 0; i < s.length; i++) {
        let distance = s.length;
        appearIndex.forEach((val) => {
            distance = Math.min(distance, Math.abs(val - i))
        })
        distances.push(distance)
    }

    return distances;
};

console.log(shortestToChar("aaab", "b"))