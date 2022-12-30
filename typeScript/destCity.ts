function destCity(paths: string[][]): string {
    let departure: string[] = [];
    let destination: string[] = [];

    for (let path of paths) {
        departure.push(path[0]);
        destination.push(path[1]);
    }

    destination = destination.filter((element) => {
        return !departure.includes(element);
    })

    return destination[0];
};

console.log(destCity([["B","C"],["D","B"],["C","A"]]));