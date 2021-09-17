const fn = function (head) {
    let sign = head;
    while (sign) {
        if (sign.isVisited) return true;
        sign.isVisited = true;
        sign = sign.next;
    }
    return false;
};

// const list=[];
// while(head){
//     if(list.includes(head)){
//         return true;
//     }
//     list.push(head);
//     head=head.next;
// }
// return false;