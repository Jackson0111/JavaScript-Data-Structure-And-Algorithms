/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let nodes = [];
    let traverse = (root) => {
        if (root){
            traverse(root.left);
            nodes.push(root.val);
            traverse(root.right);
        }
    };
    traverse(root);
    return nodes;
};