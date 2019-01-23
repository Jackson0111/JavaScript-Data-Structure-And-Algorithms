/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

/** 
* Givin two binary trees, write a function to check if they are the same or not.
* This was a tricky one but not so tricky afterall.
* Basically we travel two trees at the same time and compare every node at every step.
* They tricky part is the else if statment.
* We travel the entire left subtree by making a recursive call isSameTree(p.left, q.left);
* This will return a true or false value.
* Meanwhile, we travel the entire right subtree by making a recursive call isSameTree(p.right, q.right);
* This will also return a true of false value.
* By making two calls here, we have traveled the entire tree and compared the left half and right half saperately.
* Now we just need to see if they are both true. If they are, then we have indentical trees. 
* If they are not, then we have an unidentical tree.
**/

var isSameTree = function(p, q) {
    if (!p && !q) return true;
    else if (p && q && p.val === q.val) return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    else return false;
};