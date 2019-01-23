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
 **/

/**
* This is another traversal problem.
* To find all left leaves, we need to visit every node.
* When the node has a left child, and the left child does not have a left child nor a right child, then we know we are currently at a left leaf's parent node position.
* Simply add that leaf node value to sum. 
* Return sum when we finish the traversal.
**/
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    findSum(root);
    function findSum(root){
        if (!root) return;
        if (root.left && !root.left.left && !root.left.right){
            sum += root.left.val;
        }
        findSum(root.left);
        findSum(root.right);
    }
    
    return sum;
};