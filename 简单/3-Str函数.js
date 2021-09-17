const fn = function (haystack, needle) {
    if (needle == "") return -1;
    let nl = needle.length;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[0]) {
            if (haystack.slice(i, i + nl) == needle) return i;
        }
    }
    return -1;
};

console.log(fn("hello", "ll"));