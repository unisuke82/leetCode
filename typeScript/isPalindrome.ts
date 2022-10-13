const isPalindrome = (x: number): boolean => {
    let xArr:string[] = x.toString().split('');
    let xArrRev:string[] = xArr.reverse();
    let xRev:string = xArrRev.join('');

    return x.toString() === xRev;
};

isPalindrome(121)
isPalindrome(-121)
isPalindrome(10)