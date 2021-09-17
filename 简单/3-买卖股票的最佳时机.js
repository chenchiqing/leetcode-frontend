const fn = function (prices) {
    let len = prices.length;
    let res = 0;
    let min = prices[0];
    for (let i = 1; i < len; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else {
            res = Math.max(res, prices[i] - min);
        }
    }
    return res;
};

console.log(fn([7, 1, 5, 3, 6, 4]));