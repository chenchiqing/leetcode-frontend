// 循环取最后一位拼接起来
const fn = function (n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        res = (res << 1) + (n & 1);
        n = n >> 1;
    }
    // 因为js没有无符号整数 全是有符号的 
    //而>>>0方法就是将有符号转化成无符号。
    return res >>> 0;
};

console.log(fn(11110001010101));
