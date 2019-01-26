/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

 /**
  * Method 1:
  * Use a dummy node as the previous node of the head.
  * Use another node called current to start from dummy's position and traverse the list.
  * Every time we encounter the value, update the pointers. 
  * NOTE: DO NOT FORGET TO MAKE THE DELETED NODE'S NEXT POINTER POINT TO NULL.
  * THIS IS HOW WE COMPLETELY REMOVE A NODE.
  */
var removeElements = function(head, val) {
    let dummy = new ListNode(-1);
    let current = dummy;
    dummy.next = head;
    while(current.next){
        if (current.next.val === val){
            let deletedNode = current.next;
            current.next = deletedNode.next;
            deletedNode.next = null;
            delete deletedNode;
        }else{
            current = current.next;
        }
    }
    return dummy.next;
};

/**
 * We can also use recursion to solve this problem. 
 * Recursion is a little tricky... 
 * It just messes with my head too much so I barely use it unless the data structure is tree, which requires recursion for pretty much anything.
 */
var removeElements = function(head, val) {
    if (!head) return null;
    head.next = removeElements(head.next, val);
    return head.val === val ? head.next : head;
};
