const fn = function (s, t) {
    let sl = s.length;
    let tl = t.length;
    if (sl !== tl) return false;
    let map = {};
    for (let i = 0; i < sl; i++) {
        let cs = s[i];
        let ct = t[i];
        map[cs] ? map[cs]++ : map[cs] = 1;
        console.log(map);
        map[ct] ? map[ct]-- : map[ct] = -1;
        console.log(map);
    }
    //获取map中所有键的值，然后对every值进行x===0的函数测试.
    return Object.values(map).every(x => x === 0);
};
console.log(fn('anagram', 'nagaram'));