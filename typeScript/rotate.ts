function rotate(matrix: number[][]): void {
    const m = matrix.length;
    const n = matrix[0].length;

    let rotated = new Array(m).fill([])
    rotated = rotated.map(() => {
        return [];
    })

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rotated[j].unshift(matrix[i][j]);
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = rotated[i][j]
        }
    }
};

rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])

/*
1 2 3
4 5 6
7 8 9

rotated
7 4 1 [0]
8 5 2 [1]
9 6 3 [2]
*/