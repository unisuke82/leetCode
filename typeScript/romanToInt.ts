interface Dict {
    [key: string]: number;
}

const romanSymbols:Dict = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}

export const romanToInt = (s:string) => {
    let int: number = 0;

    for (let i = 0; i < s.length; i++) {
        if (romanSymbols[s[i]] < romanSymbols[s[i+1]]) {
            int += (romanSymbols[s[i+1]] - romanSymbols[s[i]]);
            i++;
        } else {
            int += romanSymbols[s[i]];
        }
    }

    return int;
}