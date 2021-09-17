const fn = function (num) {
    //数字转字符串
    let str = String(num);
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 1) sum++;
    }
    return sum;
};
console.log(fn(00000100000001));