const fn = function (nums) {
    let res = nums[0];
    let dp = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (dp[i - 1] > 0) {
            dp[i] = nums[i] + dp[i - 1];
        } else {
            dp[i] = nums[i];
        }
        res = Math.max(dp[i], res);
    }
    return res;
};