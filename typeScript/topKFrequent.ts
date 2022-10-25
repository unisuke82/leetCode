function topKFrequent(nums: number[], k: number): number[] {
    const dist: {[index: string]: number} = {}
    nums.forEach((val) => {
        if (val.toString() in dist) {
            dist[val] += 1;
        } else {
            dist[val] = 1;
        }
    })

    let values = []
    for (let key in dist) {
        values.push(Number(key))
    }

    values.sort((a, b) => {
        return dist[b] - dist[a]
    })

    return values.slice(0,k);
};

console.log(topKFrequent([1,1,3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,2,2,3],2))

