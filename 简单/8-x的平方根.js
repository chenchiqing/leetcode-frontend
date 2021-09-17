// 采用二分法的思路解题
const fn = function (x) {//x是非负整数
    let [l, r] = [0, x];
    let ans = -1;
    while (l <= r) {
        let mid = (l + r) >> 1;
        if (mid * mid > x) {
            r = mid - 1;
        } else if (mid * mid < x) {
            ans = mid;//防止越界
            l = mid + 1;
        } else {
            ans = mid;
            return ans
        }
    }
    return ans;
};

console.log(fn(8));