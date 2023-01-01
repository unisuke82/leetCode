function uniqueOccurrences(arr: number[]): boolean {
    const dist: {[key: number]: number} = {}
    for (let num of arr) {
        if (num in dist) {
            dist[num]++;
        } else {
            dist[num] = 1;
        }
    }

    console.log(dist)
    return new Set(Object.values(dist)).size === Object.values(dist).length;
};

console.log(uniqueOccurrences([1,2]));