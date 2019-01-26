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

 /**
  * We use two pointers to solve this problem.
  * Every time the fast runner's value is different than the slow runner's, we update the slow runner's pointer.
  * This way, we are simply removing whatever is in between that have the save value as the slow runner.
  * Finally, when the fast runner reaches the end and the slow runner hasn't, that means we have some leftover duplicates to remove. So we set the slow runner as the tail.
  */
var deleteDuplicates = function(head) {
    if (!head) return head;
    
    let slowRunner = head;
    let fastRunner = head;
    while(fastRunner){
        if (fastRunner.val !== slowRunner.val){
            slowRunner.next = fastRunner;
            slowRunner = slowRunner.next;
        }
        fastRunner = fastRunner.next;
    }
    if (slowRunner.next) slowRunner.next = null;
    return head;
};