/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//ITERATIVE METHOD:
var reverseList = function(head) {
    if(head == null) return head;
    var prev, next = null;
    var curr = head;
    while(curr != null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    head = prev;
    return head;
};

//RECERSIVE METHOD:
var reverseList = function(head) {
    if(head == null) return head;
    return recursive(head);
};

//
function recursive(head){
    //exit condition, return the last node when the call stack gets to the bottom, aka, the end of the linked list.
    if(head.next == null){
        return head;
    }
    //save the reversed list head, aka, the last node in the linked list. we will return that as the head once all pointers have been fliped.
    var reversedListHead = recursive(head.next);
    //flip the pointers. the current node's next node is the last node from the next recursive call. we set that node's next node to the current node, this way we are fliping the pointer
    head.next.next = head;
    //then we set the current node's next node to null. the current node now becomes the last node of the reversed linked list so far.
    head.next = null;
    //then we return the reversed list head, aka, the last node of the original linked list. we return this reference in every call to save it to the end when we reverse the entire linked list.
    return reversedListHead;
}