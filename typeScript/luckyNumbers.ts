function luckyNumbers (matrix: number[][]): number[] {
    let results:number[] = []

    for (let row of matrix) {
        let minInRowIndex = 0;
        const minInRow = row.reduce((previousValue, currentValue, currentIndex) => {
            if (currentValue < previousValue) {
                minInRowIndex = currentIndex;
                return currentValue
            }
            return previousValue
        }, Infinity)

        let isMaxInColumn = true
        for (let i = 0; i < matrix.length; i++) {
            isMaxInColumn = isMaxInColumn && matrix[i][minInRowIndex] <= minInRow
        }

        if (isMaxInColumn) results.push(minInRow)

        console.log(`row = ${row}, minInRow = ${minInRow}, minInRowIndex = ${minInRowIndex}`)
    }

    return results;
};

console.log(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]))