/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/**
* This problem is basically the same as 111. Minimum Depth of Binary Tree.
* We use Depth First search to travel every branch of the tree, traceback when we reach an end.
* Then compare to find the longest branch.
* There are three if statements.
* The first if statement checks if we have reached the bottom of the tree. If so, we will return 0 because there's no depth at all.
* The second if statement tells us if the left node is null, we stop going left, now go to the right.
* The third if statement tells us if the right node is null, we stop going right and go left instead.
* Every recursive call will return a number, we need to add 1 because we must add the current node that made the recursive call.
* The last line of code recursively travels both left and right branch and when all calls come back, we compare the bigger one of the two and plus the current node to make the total number of nodes.
* Note that the last line of code keeps recursively traveling down the branch if any children still have two children, but eventually we will reach the bottom.
**/
var maxDepth = function(root) {
    if (!root) return 0;
    if (!root.left) return 1 + maxDepth(root.right);
    if (!root.right) return 1 + maxDepth(root.left);
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};