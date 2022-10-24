class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
    return new TreeNode(root.val, invertTree(root.right), invertTree(root.left))
};

console.log(invertTree(new TreeNode(2, new TreeNode(1), new TreeNode(3))))