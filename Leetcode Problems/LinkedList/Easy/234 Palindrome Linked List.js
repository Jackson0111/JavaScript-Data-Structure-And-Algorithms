/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // take care of the exception first.
    if(head == null) return true;
    // Use fast and slow pointers. Slow moves one step a time and fast moves two steps a time. When fast gets to the end, slow will be in the middle of the list, which means we found the middle point to divede the list.
    var fast = head;
    var slow = head;
    while(fast.next != null && fast.next.next != null){
        fast = fast.next.next;
        slow = slow.next;
    }
    //To compare the first part of the list with the second part, we need to reverse the second part of the list. I need to remember how to reverse a linked list with iterative method more, aka, the while loop below.
    var curr = slow.next;
    var pre = null;
    var next = null;
    while(curr != null){
        next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }
    //Now the second part of the list has been reversed, we simply compare every digit of the two lists.
    var secondHead = pre;
    while(secondHead != null){
        if(head.val != secondHead.val) return false;
        head = head.next;
        secondHead = secondHead.next;
    }
    return true;
};