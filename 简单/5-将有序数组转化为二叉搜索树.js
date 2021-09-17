// BST二叉搜索树
const fn = function (nums) {
    return toBST(nums, 0, nums.length - 1);
};

const toBST = function (num, l, r) {
    if (l > r) return null;
    const mid = l + r >> 1;
    const root = new TreeNode(num[mid]);
    root.left = toBST(num, l, mid - 1);
    root.right = toBST(num, mid + 1, r);

    return root;
}