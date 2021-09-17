const isSame = function (leftnode, rightnode) {
    if (leftnode === null && rightnode === null) return true;
    if (leftnode === null || rightnode === null) return false;
    return leftnode.val === rightnode.val && isSame(leftnode.left, rightnode.rightnode) && isSame(leftnode.right, rightnode.left);
}

const fn = function (root) {
    if (!root) return root;
    return isSame(root.left, root.right);
};