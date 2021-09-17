const fn = function (n1, n2) {
    n1 = n1.sort((a, b) => a - b);
    n2 = n2.sort((a, b) => a - b);
    let a = 0;
    let b = 0;
    let len1 = n1.length;
    let len2 = n2.length;
    let res = [];
    while (a < len1 && b < len2) {
        if (n1[a] == n2[b]) {
            res.push(n1[a]);
            a++;
            b++;
        } else if (n1[a] > n2[b]) {
            b++;
        } else {
            a++;
        }
    }
    return res;
};