const fn = function (nums) {
    // 原地解 不使用额外空间
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            nums[i + 1] = nums[j];
            i++;
        }
    }
    nums = nums.slice(0, i + 1);
    return nums;
};
console.log(fn([1, 1, 2, 2, 3, 3, 4, 4, 5]));