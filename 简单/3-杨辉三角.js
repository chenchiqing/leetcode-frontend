const fn = function (nowRows) {
    if (nowRows == 0) return [];
    const result = Array.from(new Array(nowRows), () => []);
    for (let i = 0; i < nowRows; i++) {
        result[i][0] = 1;
        result[i][i] = 1;
        for (let j = 1; j < i; j++) {
            result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
        }
    }
    return result;
};

console.log(fn(5));
