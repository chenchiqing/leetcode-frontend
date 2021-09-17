const fn = function (root) {
    if (!root) return root;
    let max = 1;
    function dfs(root, deepth) {
        if (!root.left && !root.right) ret = max(deepth, max);
        if (root.left) dfs(root.left, deepth + 1);
        if (root.right) dfs(root.right, deepth + 1);
    }
    dfs(root, max);
    return max;
};