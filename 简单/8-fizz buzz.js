const fn = function (n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        let isThree = i % 3 == 0;
        let isFive = i % 5 == 0;
        let isTF = i % 3 == 0 && i % 5 == 0;
        if (isTF) {
            arr.push('FizzBuzz');
        } else if (isThree) {
            arr.push('Fizz');
        } else if (isFive) {
            arr.push('Buzz');
        } else {
            arr.push(`${i}`);
        }
    }
    return arr;
};