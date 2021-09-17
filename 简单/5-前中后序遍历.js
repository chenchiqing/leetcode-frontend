// 前序遍历为:a-b-d-e-c-f 深度优先遍历，先左后右
const fn = function (root) {
    const stack = [];
    const res = [];
    while (root || stack.length) {
        while (root) {
            res.push(root.val);
            stack.push(root);
            root = root.left;
        }
        root = stack.pop(root);
        root = root.right;
    }
    return res;
};

// 中序遍历 d-b-e-a-c-f
const fn1 = function (root) {
    const res = [];
    const stack = [];
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop(root);
        res.push(root.val);
        root = root.right;
    }
    return res;
}

// 后序遍历 d-e-b-f-c-a
const fn2 = function (root) {
    const res = [];
    const stack = [];
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            res.unshift(root.val);
            root = root.right;
        }
        root = stack.pop(root);
        root = root.left;
    }
    return res;
};