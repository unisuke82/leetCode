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

function rightSideView(root: TreeNode | null): number[] {
    let result:number[] = []
    let rootTmp = root;
    let rootLeftTmp = null;

    if (root) {
        while(rootTmp) {
            console.log(rootTmp)
            result.push(rootTmp.val);
            if (!rootTmp.right && !rootTmp.left) {
                rootTmp = rootLeftTmp
                rootLeftTmp = null;
            } else if (rootTmp.right) {
                if (!rootTmp.right.right && !rootTmp.right.left) {
                    rootLeftTmp = rootTmp.left
                }
                rootTmp = rootTmp.right
            } else if (rootTmp.left) {
                rootTmp = rootTmp.left
            } else {
                rootTmp = null
            }
            console.log(`rootLeftTmp`)
            console.log(rootLeftTmp)
        }
    }

    return result
};

console.log(rightSideView(new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3))))