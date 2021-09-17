// 链表定义函数
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const fn = function (l1, l2) {
    const ans = node = new ListNode();
    while (l1 && l2) {
        if (l1.val > l2.val) {
            node.next = l2;
            l2 = l2.next;
        } else {
            node.next = l1;
            l1 = l1.next;
        }
        node = node.next;
    }
    node.next = l1 || l2;
    return node.next;
};

console.log(fn([1, 2, 4], [1, 3, 4]));