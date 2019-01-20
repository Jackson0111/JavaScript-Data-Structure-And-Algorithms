/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    //have no access to the node before the given node, therefore can't modify the pointer to point to the node after the given node after deletion. 
    //Insead, we will swap the given node with the node after it and then delete the second one.
    node.val = node.next.val;
    node.next = node.next.next;
};