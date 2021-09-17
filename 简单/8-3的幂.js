const fn = function (n) {
    while (n >= 3) {
        n /= 3;
    }
    return n == 1;
};