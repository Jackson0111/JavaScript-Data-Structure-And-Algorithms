/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

/**
* This is basically a pre-order traversal.
* In pre-order traversal, we will visit the parent, the left node and then the right node.
* In the pre-order part, aka before we make the recursive call and pasing on node.left, we need to check status
* and also do the math here.
* If the current node doesn't exist, we simply do nothing. Just return to its parent call.
* If the current node exists but has no left and right node, it meas we have reached the leaf node.
* Here we will add the leaf node's value to the path and push it to the result array then return to its parent call.
* If neither conditions are met, we continue to travel down the tree, but when making the recursive call, we need
* to add the current node's value to the path. 
* That's why we have currentPath + currentNode.val + '->' passed as the second parameter.
* When the traversal ends, we will have a complete array. Return that array, we are done.
**/
var binaryTreePaths = function(root) {
    let result = [];
    findPaths(root, '');
    
    function findPaths(currentNode, currentPath){
        if (!currentNode) return;
        if (!currentNode.left && !currentNode.right){
            currentPath += currentNode.val;
            result.push(currentPath);
            return;
        }
        findPaths(currentNode.left, currentPath + currentNode.val + '->');
        findPaths(currentNode.right, currentPath + currentNode.val + '->');
    }
    return result;
};