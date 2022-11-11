function flipAndInvertImage(image: number[][]): number[][] {
    const flipped: number[][] = [];
    image.forEach((val, index) => {
        flipped[index] =  val.reverse().map((val) => {
            return val === 1 ? 0 : 1;
        })
    })

    return flipped;
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))