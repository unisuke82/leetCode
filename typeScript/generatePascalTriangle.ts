function generate(numRows: number): number[][] {
    let triangle: number[][] = []
    for (let i = 1; i <= numRows; i++) {
        if (i === 1) {
            triangle.push([1])
        } else if (i === 2) {
            triangle.push([1, 1])
        } else {
            let row:number[] = [];
            for (let j = 0; j < i; j++) {
                if (j === 0 || j === i - 1) {
                    row.push(1)
                } else {
                    row.push(triangle[i-2][j-1] + triangle[i-2][j])
                }
            }
            triangle.push(row)
        }
    }
    return triangle
};

console.log(generate(5))