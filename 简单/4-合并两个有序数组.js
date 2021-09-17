const fn = function (nums1, nums2) {
    let nums = nums1.concat(nums2).sort((a, b) => a - b);
    return nums;
}

console.log(fn([1, 2, 3], [1, 4, 5]));


var fun = function (nums1, m, nums2, n) {
    let len = m + n - 1;
    m--; n--;
    while (m >= 0 && n >= 0) {
        if (nums1[m] > nums2[n]) {
            nums1[len] = nums1[m--];
        } else {
            nums1[len] = nums2[n--];
        }
        len--;
    }

    if (m == -1) {
        return nums1.splice(0, len + 1, ...nums2.slice(0, n + 1));
    }
    if (n == -1) {
        return nums1;
    }
}

console.log(fun([1, 2, 3], 3, [1, 4, 5], 3));