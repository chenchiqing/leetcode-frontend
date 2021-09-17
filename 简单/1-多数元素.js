const fn = function (nums) {
    let l = nums.length;
    const map = {};
    for (let i of nums) {
        map[i] ? map[i]++ : map[i] = 1;
        if (map[i] > l / 2) {
            return i;
        }
    }
}

console.log(fn([2, 2, 1, 1, 1, 2, 2]));