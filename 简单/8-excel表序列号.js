// 10进制转2进制就是不停除2并加余数
// 这里就不停的除26
const fn = function (columnTitle) {
    let ans = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        let ans = ans * 26 + (columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1);
    }
    return ans;
};