// [0,n]的总和减去数组的总和
const fn = function (nums) {
    let len = nums.length;
    let sum = 0;
    let sum1 = 0;
    // for (let i = 0; i < len; i++) {
    //     sum += i;
    // }
    // 优化 用等差数列
    sum = ((1 + len) * len) / 2;
    for (let i = 0; i < len; i++) {
        sum1 += nums[i];
    }
    return sum - sum1;
};