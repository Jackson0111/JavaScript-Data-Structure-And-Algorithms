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
var hasCycle = function(head) {
    // This is a classic two pointer problem. We simply set a slow pointer and a fast pointer. Slow pointer moves one step at a time while fast pointer moves two steps. When they meet again, there is certainly a loop. 
    if(head == null) return false;
    var fast = head;
    var slow = head;
    while(fast.next != null && fast.next.next != null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) return true;
    }
    return false;
};