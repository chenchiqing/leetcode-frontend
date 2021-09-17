// Set 时复和空复太大不优雅
const fn = function (nums1, nums2) {
    let result;
    return result = [...new Set(nums1)].filter(item => new Set(nums2).has(item));
};
console.log(fn([1, 2, 2, 1], [2, 2]));

// map优化
const fun = function (num1, num2) {
    const map = {};
    const ret = [];
    for (let i = 0; i < num1.length; i++) {
        map[num1[i]] = true;
    }
    for (let i = 0; i < num2.length; i++) {
        if (map[num2[i]]) {
            ret.push(num2[i]);
            map[num2[i]] = false;
        }
    }
    return ret;
};
console.log(fun([1, 2, 2, 1], [2, 2]));