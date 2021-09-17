const fn = function (strs) {
    if (strs.length == 0) return "";
    let ans = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0
        for (; j < ans.length && j < strs[i].length; j++) {
            if (ans[j] !== strs[i][j]) {
                break;
            }
        }
        ans = ans.slice(0, j);
        // if (ans == '') return "";
        // console.log(ans);
    }
    return ans;
};
console.log(fn(["flower", "flow", "flight"]));

// 使用reduce函数
const fun = function (strs) {
    if (strs.length == 0) return "";
    if (strs.length == 1) return strs[0];
    return strs.reduce(getSameStr, strs[0]);
}
const getSameStr = function (a, b) {
    let res = "";
    for (let j = 0; j < a.length; j++) {
        if (a[j] == b[j]) {
            res += a[j];
        } else {
            return res;
        }
    }
    return res;
}
console.log(fun(["flower", "flow", "flight"]));