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
* We use Depth-First Search algorithm to travel the tree.
* DFS basically travles one branch of the tree until we reach a dead end.
* Then it will backtrack and try another branch.
* In the code below, we have three if statements.
* The first one determines whether we reached a dead end in the current branch. That's where we end and go back.
* The second one says if the left side of the current position is empty, we try the right side.
* The third one says if the rght side of the current position is empty, we try the left side.
* If both sides have children, we will then get to the 4th line where we will make recursive calls to go down both sides.
* The recursive call then goes to the three if statements and determines what to do until we reach a dead end.
* Once all calls return, we need to add 1 as the caller's node to find the total number of nodes.
**/
var minDepth = function(root) {
    if (!root) return 0;
    if (!root.left) return 1 + minDepth(root.right);
    if (!root.right) return 1 + minDepth(root.left);
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};