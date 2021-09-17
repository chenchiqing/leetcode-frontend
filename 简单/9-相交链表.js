const fn = function (head1, head2) {
    let set = new Set();
    let temp = head1;
    while (temp) {
        set.add(temp);
        temp = temp.next;
    }
    temp = head2;
    while (temp) {
        if (set.has(temp)) {
            return temp;
        }
        temp = temp.next;
    }
    return false;
};