const fn = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
        r--;
    }
    return nums;
}

console.log(fn(['h', 'e', 'l', 'l', 'o']));