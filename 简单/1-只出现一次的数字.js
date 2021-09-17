// 利用map计数
const fn = function (nums) {
    let l = nums.length;
    let map = {};
    for (let i of nums) {
        map[i] ? map[i]++ : map[i] = 1;
    }
    for (let i = 0; i < l; i++) {
        if (map[nums[i]] == 1) return nums[i];
    }
};
console.log(fn([2, 2, 1, 1, 8, 4, 8, 9, 9, 7, 4]));

// 巧妙借助异或
const fun = function (nums) {
    let a = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // 异或
        a ^= nums[i];
    }
    return a;
};
console.log(fun([2, 2, 1, 1, 8, 4, 8, 9, 9, 7, 4]));