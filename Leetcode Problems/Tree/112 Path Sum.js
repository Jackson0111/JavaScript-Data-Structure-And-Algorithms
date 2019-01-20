/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    /**
    * We will use recursion to solve this problem.
    * First, we need to check the special case, aka when the root is null, we simply return false.
    * Then we travel down the tree at all paths at the same time until we reach the leaf node.
    * By calling hasPathSum and twice and passing the left as well as right node, we are going down every path
    * at the same time.
    * At every node, we will reduce sum by the current node's value. This way, we just need to check if the sum is 0
    * when we get to the leaf node. If it is, we return true, which means we found the path. If it's not, we return
    * false, which means this path is not right. The returned boolean value will then go to the parent call and all
    * the way back to the first recursive call, where we end the function and return the final value.
    **/
    if (!root) return false;
    sum -= root.val;
    if (!root.left && !root.right) return sum === 0;
    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
};