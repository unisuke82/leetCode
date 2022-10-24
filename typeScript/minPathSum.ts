import {sum} from "./helloWorld";

function minPathSum(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ( i === 0 && j === 0 ) continue;
            if ( i === 0 && j !== 0 ) grid[i][j] += grid[i][j-1];
            if ( i !== 0 && j === 0 ) grid[i][j] += grid[i-1][j];
            if ( i !== 0 && j !== 0 ) grid[i][j] += Math.min(grid[i][j-1], grid[i-1][j])
        }
    }

    return grid[m-1][n-1];
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));

/*
m*nのgrid
m-1回右に動いてn-1下に動く必要あり
どの順番で右と下を選ぶかで全部網羅できるはず
最後は左下だからgrid[m-1][n-1]

1 3 1
1 5 1
4 2 1

1 4
2

1 4 5
2 7
6

1 4 5
2 7 6
6 8 7
*/