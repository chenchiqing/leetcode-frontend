const fn = function (n) {
    const map = {};
    while (n !== 1) {
        map[n] = true;
        n = getNext(n);
        if (map[n]) return false;
    }
    return true;

};
const getNext = function (n) {
    n = String(n);
    let sum = 0;
    for (let num of n) {
        sum += Math.pow(+num, 2);
    }
    return sum;
};
