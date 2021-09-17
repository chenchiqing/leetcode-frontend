//每一个5会产生一个0 原因是2×5
const fn = function (n) {
    let ans = 0;
    while (n > 1) {
        n = Math.floor(n / 5);
        ans += n;
    }
    return ans;
};