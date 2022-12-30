function subtractProductAndSum(n: number): number {
    let product = 1;
    let sum = 0;

    for (let i = 0; i < String(n).length; i++) {
        product *= Number(String(n)[i])
        sum += Number(String(n)[i])
    }

    return product - sum;
};

console.log(subtractProductAndSum(4421))