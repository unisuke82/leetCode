function countBits(n: number): number[] {
    let result = [];
    for (let i = 0; i <= n; i++) {
        result.push((i.toString(2).match(/1/g) || []).length);
    }

    return result
};

console.log(countBits(2))

/*
5 / 2 = 2..1
2 / 2 = 1..0 -> 1 0 1

1@ 0 :0
2@ 1 :1
3@ 1 1 :2
4@ 1 0 0 :1
5@ 1 0 1 :2
6@ 1 1 0 :2
7@ 1 1 1 :3
8@ 1 0 0 0 :1
9@ 1 0 0 1 :2
10@ 1 0 1 0 :2
11@ 1 0 1 1 :3
12@ 1 1 0 0 :2
13@ 1 1 0 1 :3
14@ 1 1 1 0 :3
15@ 1 1 1 1 :4


*/