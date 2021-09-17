const fn = function (nums) {
    let map = new Map();
    let l = nums.length;
    for (let i of nums) {
        if (map.has(i)) {
            return true;
        }
        else {
            map.set(i, 1);
            // console.log(map);
        }
    }
    return false;
};

console.log(fn([1, 2, 3, 1]));