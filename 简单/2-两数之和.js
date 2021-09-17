const fn = function (nums, target) {
    let l = nums.length;
    let map = new Map();
    map.set(nums[0], 0);
    for (let i = 1; i < l; i++) {
        let flag = target - nums[i];
        if (map.get(flag) !== undefined) {
            return [map.get(flag), i];
        } else {
            map.set(nums[i], i);
        }
    }
};

console.log(fn([2, 7, 11, 15], 9));

// and
const fun = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) !== undefined) {
            return [map.get(nums[i]), i];
        } else {
            map.set(target - nums[i], i);
        }
    }
}
console.log(fun([2, 7, 11, 15], 9));