const fn = function (s) {
    let l = s.length;
    const map = {};
    for (let i of s) {
        map[i] = (map[i] || 0) + 1;
        console.log(map);
    }
    for (let j = 0; j < l; j++) {
        if (map[s[j]] === 1) return j;
    }
    return -1;
};

console.log(fn('leetcode'));