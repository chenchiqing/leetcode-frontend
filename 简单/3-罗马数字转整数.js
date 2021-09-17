const fn = function (s) {
    const map = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };
    let sum = 0;
    let i = 0;
    let l = s.length;
    while (i < l) {
        if (i + 1 < l && map[s.slice(i, i + 2)]) {
            sum += map[s.slice(i, i + 2)];
            i += 2;
        } else {
            sum += map[s.slice(i, i + 1)];
            i++;
        }
    }
    return sum;
}
console.log(fn("LVIII"));