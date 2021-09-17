const fn = function (s) {
    s = s.replace(/[^\w]/g, '').toLowerCase();
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        if (s[l++] === s[r--]) {
            return true;
        } else {
            return false;
        }
    }
};

console.log(fn('a man, a plan, a cancal, panama'));