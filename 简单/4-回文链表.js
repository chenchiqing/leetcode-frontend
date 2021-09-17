const fn = function (head) {
    if (head == null || head.next == null) return true;
    let slow = head;
    let fast = head;
    let prev;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;
    let head1 = null;
    while (slow) {
        let temp = slow.next;
        slow.next = head1;
        head1 = slow;
        slow = temp;
    }
    while (head && head1) {
        if (head.val !== head1.val) {
            return false;
        }
        head = head.next;
        head1 = head1.next;
    }
    return true;
};

console.log(fn());