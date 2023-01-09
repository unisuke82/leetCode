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

function preorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = [];
    scanning(root, result);

    return result
};

function scanning(root: TreeNode | null, result: number[]) {
    if (root) {
        result.push(root.val);
        scanning(root.left, result);
        scanning(root.right, result);
    }
}

console.log(preorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null))))