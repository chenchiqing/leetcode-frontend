const fn = function (head) {
    let [pre, node] = [null, head];
    while (node) {
        let temp = node.next;
        node.next = pre;
        pre = node;
        node = temp;
    }
    return pre;
};

console.log(fn([1, 2, 3, 4, 5]))