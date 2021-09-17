const fn = function (prices) {
    let ans = 0;
    let len = prices.length;
    for (let i = 0; i < len; i++) {
        if (prices[i + 1] > prices[i]) {
            ans += prices[i + 1] - prices[i];
        } else {
            continue;
        }
    }
    return ans
};
console.log(fn([7, 1, 5, 3, 6, 4]));